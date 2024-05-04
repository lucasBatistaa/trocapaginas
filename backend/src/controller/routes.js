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

async function userExists(email) {
    return await database.getUsers().then(users => {
      const userWithEmail = users.find(user => {
        return user.email === email;
      });
  
      return userWithEmail;
    });
  }

  function validateImage(data){
    if(data.image === undefined) {
        review.imageBook = null;
        post.imageBook = null;

    } else {

        review.imageBook = data.ImageURI;
        post.imageBook = data.ImageURI;
    }    
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
    const {data_post} = req.body; // recebendo o objeto post
    const user_owner_post = await userExists(data_post.userEmail);
    
    validateImage(data_post);

    post.idUser = user_owner_post.id_user;
    post.content = data_post.text;
    post.timePost = new Date().toLocaleString(Intl.DateTimeFormat("pt-BR"))
    post.nameBook = data_post.nameBook;
    
    try{

        await database.createPost(post).then(() => { //criando o post no banco de dados
            return res.status(201).send('Post criado com sucesso!');
        });

    } catch (error) {   //retornando erro
        return res.status(500).send('Erro ao criar o post');
    }

});

routes.post('/review', async (req, res) => {

    const {data_review} = req.body; // recebendo o objeto review
    const user_owner_post = await userExists(data_review.userEmail);

    validateImage(data_review);

    review.idUser = user_owner_post.id_user;
    review.title = data_review.title;
    review.content = data_review.text;
    review.nameBook = data_review.nameBook;
    review.rating = data_review.rating;
    review.timePost = new Date().toLocaleString(Intl.DateTimeFormat("pt-BR"))

    console.log(review)
    try{
        await database.createReview(review).then(() => { //criando o review no banco de dados
            return res.status(201).send('Resenha criada com sucesso!');
        });    


    } catch (error) {
        console.log(error)   //retornando erro
        return res.status(500).send('Erro ao criar a resenha');
    }

});

export default routes;
