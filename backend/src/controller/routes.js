import express from 'express';
import {Database} from '../../database.js';
import {ResetSenha} from '../../reset-senha.js';
import bcrypt from 'bcryptjs';
import {User} from '../models/user.js';
import {Post} from '../models/post.js';
import {Review} from '../models/review.js';
import {Comment} from '../models/comment.js';
import {Controller} from '../controller/controller.js';

const routes = express.Router();
const database = new Database();
const salt = bcrypt.genSaltSync(10);
const user = new User();
const post = new Post();
const review = new Review();
const validationCode = [];
const timeNow = new Date().toLocaleString(Intl.DateTimeFormat("pt-BR"));
const comments = new Comment();
const controller = new Controller(database, user);

let contPost = 0;
let contReview = 0; 
let allPublications = [];

routes.post('/login', (req, res) => {
    const {email, password} = req.body;

    database.getUsers().then(users => {
        const validateUser = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));
        
        if(validateUser !== undefined) {
            user.idUser = validateUser.idUser;
            user.email = validateUser.email;
            user.name = validateUser.name;
            user.password = validateUser.password;
            user.photo = validateUser.photo;

            return res.status(200).send(validateUser);
        
        }else {
            return res.status(401).send('Usuário ou senha inválidos!');
        }
    });
});

routes.post('/create', async (req, res) => {
    const {username, email, password} = req.body;

    const passwordHash = bcrypt.hashSync(password, salt); 

    user.email = email;
    user.name = username;
    user.password = passwordHash;
    user.photo = 'https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/user-circle-512.png';

    await database.create(user).then(() => {
        return res.status(200).send(user);
    }); 
});

routes.post('/verificar-email', async (req, res) => {
    const {email} = req.body;

    if(await controller.userExists(email) != undefined) {
        return res.status(422).send('E-mail já cadastrado!');

    }else {
        return res.status(200).send('E-mail disponível!');
    }
});

routes.post('/esqueciMinhaSenha', async (req, res) => {
    const {email} = req.body; 

    if(await controller.userExists(email) != undefined) {
        user.email = email;

        for(let i = 0; i < 4; i++) {
            validationCode[i] = Math.floor(Math.random() * 9 + 1);
        }

        const reset = new ResetSenha(email, validationCode.join(''));
        reset.sendEmail();

        return res.status(200).send('E-mail enviado com sucesso!');

    }else {
        return res.status(401).send('Usuário não encontrado! Tente novamente'); 
    }
});

routes.get('/getCode', async (req, res) => {
    const {confirmationCode} = req.query;
    
    if(confirmationCode === validationCode.join('')) {
        return res.status(200).send('Código correto!');
    
    }else {
        return res.status(401).send('Código inválido!');
    }
});

routes.post('/alterar-senha', async (req, res) => {
    const {password} = req.body; 
    const passCript = bcrypt.hashSync(password, salt); 

    await database.updatePassword(user.email, passCript).then(() => {
        return res.status(200).send("Senha alterada com sucesso!");
    });

});

routes.post('/post', async (req, res) => {

    const {userEmail, text, nameBook, imageURI} = req.body; 

    const user_owner_post = await controller.userExists(userEmail);

    post.imageBook = imageURI;
    post.idUser = user_owner_post.id_user;
    post.content = text;
    post.timePost = timeNow;
    post.nameBook = nameBook;
    post.username = await database.getUsersById(post.idUser).name;
    post.user_photo = await database.getUsersById(post.idUser).photo;
    
    try{
        await database.createPost(post).then(() => { 
            return res.status(201).send('Post criado com sucesso!');
        });

    } catch (error) {   //retornando erro
        return res.status(500).send('Erro ao criar o post');
    }

});

routes.post('/review', async (req, res) => {

    const {userEmail, text, nameBook, imageURI, title, rating} = req.body; 
    const user_owner_post = await controller.userExists(userEmail);

    review.imageBook = imageURI;
    review.idUser = user_owner_post.id_user;
    review.title = title;
    review.content = text;
    review.nameBook = nameBook;
    review.rating = rating;
    review.timePost = timeNow;
    review.username = await database.getUsersById(review.idUser).name;
    review.user_photo = await database.getUsersById(review.idUser).photo;

    try{
        await database.createReview(review).then(() => { 
            return res.status(201).send('Resenha criada com sucesso!');
        });    


    } catch (error) {
        console.log(error)   //retornando erro
        return res.status(500).send('Erro ao criar a resenha');
    }

});

routes.get('/publications', async (req, res) => {
    try{
        const posts = await controller.getPosts(contPost);
        const reviews = await controller.getReviews(contReview);
        const publications = posts.concat(reviews);

        posts.length === 0 ? contPost = 0 : contPost += 5;
        reviews.length === 0 ? contReview = 0 : contReview += 5;
        
        publications.map((publication) => {
            if((!(allPublications.some(pub => pub.id_post === publication.id_post))) || (!(allPublications.some(pub => pub.id_review === publication.id_review)))) {
                allPublications.unshift(publication);
            }    
        })
        
        controller.changeDateFormat(allPublications);
        controller.sortPublications(allPublications);

        return res.status(200).send(allPublications);

    }catch(error) {
        return res.status(400).send('Não foi possível carregar as publicações');
    }
});

routes.post('/user-publication', async (req, res) => {
    const {id_user} = req.body;
    
    try {
        const user_owner_publication = await database.getUsersById(id_user);
        user_owner_publication[0].photo = user_owner_publication[0].photo.toString('utf8');

        return res.status(200).send(user_owner_publication[0]);

    } catch (error) {
        console.log(error)
        return res.send(error)
    }
});

routes.post('/my-publications', async (req, res) => {
    const {email} = req.body;

    try {

        const myPosts = await database.getMyPosts(email);
        const myReviews = await database.getMyReviews(email);
        const myPublications = myPosts.concat(myReviews);

        controller.changeDateFormat(myPublications);
        controller.sortPublications(myPublications);

        myPublications.map((publication) => {
            publication.photo = publication.photo.toString('utf8');
        })

        return res.status(200).send(myPublications);

    }catch(error) {
        return res.status(400).send('Publicações não encontradas');
    }
});

routes.get('/notifications', async (req, res) => {
    const notifications = [];

    try {
        const ownerBook = await database.getUserOwnerInfo();
        const receiverBook = await database.getReceiverBookInfo();

        notifications.push(ownerBook, receiverBook);

        console.log(notifications)

        return res.status(200).send(notifications);

    } catch (error) {
        return res.status(404).send('Nenhuma notificação encontrada');
    }
});

routes.post('/accept-exchange', async(req, res) => {
    const{email, titleBook, status} = req.body;
    const id_user = await controller.getUserByEmail(email);

    try {
        await database.acceptExchange(id_user, titleBook, status);

        return res.status(200).send(`Troca ${status} com sucesso!`)
        
    } catch (error) {
        return res.status(500).send('Erro ao acessar o servidor de banco de dados');
    }
});

routes.post('/save-book', async (req, res) => {
    const {userEmail, imageBook, titleBook, writerBook, ratingBook, bookReview, choiceUser} = req.body;
    let id_user = null

    if(userEmail !== null) {
        id_user = await controller.getUserByEmail(userEmail);
    }

    try {
        if(! await controller.bookExists(imageBook)) {
            await database.createBook(id_user, imageBook, titleBook, writerBook, ratingBook, bookReview);
        
        }else {
            const books = await database.getBookByImage(imageBook);
            const totalRatings = books[0].totalratings + 1;
            const sumRatings = books[0].sumratings + ratingBook;
            const rating = Math.round(sumRatings / totalRatings)

            await database.updateBook(imageBook, totalRatings, sumRatings, rating);
        }

        if(choiceUser === 'hasInterest') {
            const interests = await database.getInterests();

            interests.forEach((interest) => {
                console.log(interest.imagebook)
            })

            if(!interests.find((interest) => interest.imagebook === imageBook)) {
                await database.setInterest(id_user, titleBook, imageBook, writerBook);
            }
        
        }else if(choiceUser === 'exchange') {
            const myExchanges = await database.getMyExchanges();

            if(!myExchanges.find((exchange) => exchange.imagebook === imageBook)) {
                await database.setMyExchanges(id_user, titleBook, imageBook, writerBook);
            }
        }

        return res.status(200).send('Livro salvo com sucesso!');

    } catch (error) {
        return res.status(500).send(error);
    }
});

routes.post('/my-interests', async (req, res) => {
    const {email} = req.body;

    try {
        const myInterests = await database.getMyInterests(email);

        return res.status(200).send(myInterests);

    }catch(error) {
        return res.status(400).send('Interesses não encontrados');
    }
});

routes.post('/my-book-for-exchange', async (req, res) => {
    const {email} = req.body;

    try {
        const myExchangesByEmail = await database.myExchangesByEmail(email);

        return res.status(200).send(myExchangesByEmail);
        
    } catch (error) {
        return res.status(400).send('Nenhum livro encontrado para troca');
    }
})

routes.post('/get-book', async (req, res) => {
    const {imageBook} = req.body;

    try {
        const book = await database.getBookByImage(imageBook);

        return res.status(200).send(book);

    }catch(error) {
        return res.status(400).send('Livro não encontrado');
    }
});

routes.get('/book-reviews', async(req, res) => {
    const {title} = req.query;

    try {
        const reviewsBook = await database.getBookReviews(title);

        reviewsBook.map((review) => {
            review.photo = review.photo.toString('utf8');
        })
        
        return res.status(200).send(reviewsBook);

    } catch (error) {
        return res.status(500).send('Erro ao carregar as resenhas');
    }
});

routes.post('/update-profile', async(req, res) => {
    const {email, name, oldPassword, newPassword} = req.body;

    try {
        const user = await controller.userExists(email);

        if(bcrypt.compareSync(oldPassword, user.password)) {
            await database.updateUser(name, email, bcrypt.hashSync(newPassword, salt));

            return res.status(200).send('Informações atualizadas com sucesso!');

        }else {
            return res.status(401).send('Senha atual não confere, tente novamente!');
        }

    } catch (error) {
        return res.status(500).send(error);
    }
});

routes.post('/comment', async (req, res) => {
    const {email, id, comment} = req.body;
    const idUser = await controller.getUserByEmail(email);
    comments.idUser = idUser;
    comments.idPublication = id;
    comments.comment = comment;

    console.log(idUser, id, comment)

    try{
        await database.createComment(comments).then(() => {
            return res.status(201).send('Comentario criado com sucesso!');
        });
    } catch(error) {
        return res.status(500).send('Erro ao criar o comentario');
    }
});


routes.get('/loadComments', async(req, res) => {
    const {idPublication} = req.query;

    try {
        const loadComment = await database.getloadComments(idPublication);

        loadComment.map((comment) => {
            comment.photo = comment.photo.toString('utf-8');
        })
        return res.status(200).send(loadComment);
    } catch (error) {
        return res.status(500).send('Erro interno ao carregar os comentários da publicação');
    }
});

routes.post('/exchange', async(req, res) => {
    const {email, dateExchange, myBook, bookExchange, idUserOwner} = req.body;

    const idUserReceiver = await controller.getUserByEmail(email);

    try{
        if(idUserOwner !== idUserReceiver) {
            await database.setExchangeWish(idUserOwner, idUserReceiver, 'pendente', myBook, bookExchange, dateExchange);

            return res.status(200).send(['Sucesso', 'Troca solicitada com sucesso!']);
        
        }else {
            return res.status(200).send(['Erro','Você não pode trocar um livro com você mesmo!']);
        }
        
    
    }catch(error) {
        return res.status(500).send('Erro ao solicitar troca...')
    }

});

routes.get('/set-like', async(req, res) => {
    const {email, id_publication} = req.query;
    const id_user = await controller.getUserByEmail(email);

    try {

        const likes = await database.getLikes(id_publication, id_user);

        if(likes.length === 0) {
            await database.setLike(id_user, id_publication);
        } 

        return res.status(200).send('Curtida registrada com sucesso!');

    } catch (error) {
        return res.status(500).send('Erro ao acessar o servidor');   
    }
});

routes.get('/set-dislike', async(req, res) => {
    const {email, id_publication} = req.query;
    const id_user = await controller.getUserByEmail(email);

    try {

        await database.setDislike(id_user, id_publication);

        return res.status(200).send('Dislike registrado com sucesso!');
        
    } catch (error) {
        return res.status(500).send('Erro ao acessar o servidor');
    }
});

routes.get('/get-like', async(req, res) => {
    const {email, id_publication} = req.query;
    const id_user = await controller.getUserByEmail(email);

    try {

        const likes = await database.getLikes(id_publication, id_user);
        const isLike = likes.length > 0 ? true : false;

        return res.status(200).send(isLike);

    } catch (error) {
        return res.status(500).send('Erro ao acessar o servidor');   
    }
});

routes.get('/book-exchanges', async (req, res) => {
    const { titleBook } = req.query;
    try {
        console.log('entrou na chamada da rota rsrsr');
        const loadExchange = await database.getExchangeBooks(titleBook);
        
        return res.status(200).send(loadExchange);

    } catch (error) {
        return res.status(500).send('Erro interno ao carregar as trocas');
    }
});

    
export default routes;