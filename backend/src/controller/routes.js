import express from 'express';
import {Database} from '../../database.js';
import {ResetSenha} from '../../reset-senha.js';
import bcrypt from 'bcryptjs';
import {User} from '../models/user.js';
import {Post} from '../models/post.js';
import {Review} from '../models/review.js';

const routes = express.Router();
const database = new Database();
const salt = bcrypt.genSaltSync(10);
const user = new User();
const post = new Post();
const review = new Review();
const validationCode = [];

const timeNow = new Date().toLocaleString(Intl.DateTimeFormat("pt-BR"));

let contPost = 0;
let contReview = 0; 

let allPublications = [];
let publications = [];

async function userExists(email) {
    return await database.getUsers().then(users => {
      const userWithEmail = users.find(user => {
        return user.email === email;
      });
  
      return userWithEmail;
    });
}

function validateImage(imageURI){
    if(imageURI === undefined) {
        review.imageBook = null;
        post.imageBook = null;

    } else {

        review.imageBook = imageURI;
        post.imageBook = imageURI;
    }    
} 

async function getPosts() {
    const posts = await database.getUsersPosts(contPost).then((posts) => {
            
        posts.forEach(post => {
            post.photo = post.photo.toString('utf-8');
        })
        return posts;
    }); 

    return posts;
}

async function getReviews() {
    const reviews = await database.getUsersReviews(contReview).then((reviews) => {
        reviews.forEach(review => {
            review.photo = review.photo.toString('utf-8');
        })
       return reviews;
    });

    return reviews;
}

//login
routes.post('/login', (req, res) => {
    const {email, password} = req.body;

    database.getUsers().then(users => {
        const validateUser = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));
        
        if(validateUser !== undefined) {
            validateUser.photo = validateUser.photo.toString('utf8');

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


// criação de conta
routes.post('/create', async (req, res) => {
    const {username, email, password, photo} = req.body;

    const passwordHash = bcrypt.hashSync(password, salt); //criptografando a senha

    user.email = email;
    user.name = username;
    user.password = passwordHash;
    user.photo = 'https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/user-circle-512.png';

    await database.create(user).then(() => {
        return res.status(200).send(user);
    }); 
});

//verificar se email existe
routes.post('/verificar-email', async (req, res) => {
    const {email} = req.body;

    if(await userExists(email) != undefined) {
        return res.status(422).send('E-mail já cadastrado!');

    }else {
        return res.status(200).send('E-mail disponível!');
    }
});

//Esqueci minha senha
routes.post('/esqueciMinhaSenha', async (req, res) => {
    const {email} = req.body; //receber um e-mail

    if(await userExists(email) != undefined) {
        user.email = email;//setando email para usar depois

        for(let i = 0; i < 4; i++) {
            validationCode[i] = Math.floor(Math.random() * 9 + 1);
        }

        //se e-mail existe -> enviar link de reset
        const reset = new ResetSenha(email, validationCode.join(''));
        reset.sendEmail();

        return res.status(200).send('E-mail enviado com sucesso!');

    }else {
        return res.status(401).send('Usuário não encontrado! Tente novamente'); //se e-mail não existe -> informar usuário
    }
});

//validar código
routes.get('/getCode', async (req, res) => {
    const {confirmationCode} = req.query;
    
    if(confirmationCode === validationCode.join('')) {
        return res.status(200).send('Código correto!');
    
    }else {
        return res.status(401).send('Código inválido!');
    }
});

//alterar a senha
routes.post('/alterar-senha', async (req, res) => {
    const {password} = req.body; //recebendo nova senha
    const passCript = bcrypt.hashSync(password, salt); //criptografando a senha

    //alterando no banco de dados
    await database.updatePassword(user.email, passCript).then(() => {
        return res.status(200).send("Senha alterada com sucesso!");
    });

});

//criação da rota post
routes.post('/post', async (req, res) => {

    const {userEmail, text, nameBook, imageURI} = req.body; // recebendo o objeto review

    const user_owner_post = await userExists(userEmail);
    
    validateImage(imageURI);

    post.idUser = user_owner_post.id_user;
    post.content = text;
    post.timePost = timeNow;
    post.nameBook = nameBook;
    post.username = await database.getUsersById(post.idUser).name;
    post.user_photo = await database.getUsersById(post.idUser).photo;
    
    try{

        await database.createPost(post).then(() => { //criando o post no banco de dados
            return res.status(201).send('Post criado com sucesso!');
        });

    } catch (error) {   //retornando erro
        return res.status(500).send('Erro ao criar o post');
    }

});

routes.post('/review', async (req, res) => {

    const {userEmail, text, nameBook, imageURI, title, rating} = req.body; // recebendo o objeto review
    const user_owner_post = await userExists(userEmail);

    validateImage(imageURI);

    review.idUser = user_owner_post.id_user;
    review.title = title;
    review.content = text;
    review.nameBook = nameBook;
    review.rating = rating;
    review.timePost = timeNow;
    review.username = await database.getUsersById(review.idUser).name;
    review.user_photo = await database.getUsersById(review.idUser).photo;

    try{
        await database.createReview(review).then(() => { //criando o review no banco de dados
            return res.status(201).send('Resenha criada com sucesso!');
        });    


    } catch (error) {
        console.log(error)   //retornando erro
        return res.status(500).send('Erro ao criar a resenha');
    }

});

routes.get('/publications', async (req, res) => {

    try{
        let posts = await getPosts();

        if(posts.length < 3) {
            contPost = 0;
            posts = await getPosts();
        }

        let reviews = await getReviews();

        if(reviews.length < 2) {
            contReview = 0;
            reviews = await getReviews();
        }

        const publications = posts.concat(reviews);

        publications.sort((a, b) => {
            return new Date(a.timepost.split(', ')[0].split('/').reverse().join('-')) - new Date(b.timepost.split(', ')[0].split('/').reverse().join('-'));
        })
        
        publications.map((publication) => {
            if((!(allPublications.some(pub => pub.id_post === publication.id_post))) || (!(allPublications.some(pub => pub.id_review === publication.id_review)))) {
                allPublications.unshift(publication);
            }    
        })

        allPublications.map((pub) => {
            console.log(pub.timepost)
        })
        console.log('--------------------')

        contPost += 3;
        contReview += 2;
        
        return res.status(200).send(allPublications);

    }catch(error) {
        console.log(error)
        return res.status(400).send('deu tudo errado')
    }
});

export default routes;