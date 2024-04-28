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

async function userExists(email) {
    await database.getUsers().then(users => {

        return users.find(user => user.email === email)
    });
}

//login
routes.post('/login', (req, res) => {
    const {email, password} = req.body;

    database.getUsers().then(users => {
        const validateUser = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));
            
        if(validateUser !== undefined) {
            return res.status(200).json(validateUser);
        
        }else {
            return res.status(401).send('Usuário ou senha inválidos!');
        }
    });
});


// criação de conta
routes.post('/create', async (req, res) => {

    const {username, email, password, photo} = req.body;
    //verificar se o e-mail existe no database

    const passwordHash = bcrypt.hashSync(password, salt); //criptografando a senha

    await database.create(username, email, passwordHash, photo).then(() => {
        return res.status(200).send('Usuário criado com sucesso!');
    }); 
});

//verificar se email existe
routes.post('/verificar-email', async (req, res) => {
    const {email} = req.body;

    if(await typeof(userExists(email)) != undefined) {
        return res.status(422).send('E-mail já cadastrado!');

    }else {
        return res.status(200).send('E-mail disponível!');
    }
})

//Esqueci minha senha
routes.post('/esqueciMinhaSenha', async (req, res) => {
    const {email} = req.body; //receber um e-mail

    if(await typeof(userExists(email)) != undefined) {
        user.email = email;//setando email para usar depois

        //se e-mail existe -> enviar link de reset
        const reset = new ResetSenha(email);
        reset.sendEmail();

        return res.status(200).send('E-mail de reset enviado!');

    }else {
        return res.status(401).send('Usuário não encontrado! Tente novamente'); //se e-mail não existe -> informar usuário
    }
});


//alterar a senha
routes.post('/alterar-senha', (req, res) => {
    const {password} = req.body; //recebendo nova senha
    const passCript = bcrypt.hashSync(password, salt); //criptografando a senha

    //alterando no banco de dados
    database.updatePassword(user.email, passCript).then(() => {
        return res.status(200).send("Senha alterada com sucesso!");
    });

});

//criao da rota post

routes.post('/post', async (req, res) => {
    const {post: {content, timePost, nameBook, ImageURI}} = req.body; // recebendo o objeto post

    try{

        await database.createPost(content, timePost, nameBook, ImageURI).then(() => { //criando o post no banco de dados
            return res.status(201).send('Post criado com sucesso!');
        });

    } catch (error) {   //retornando erro
        console.log(error);
        return res.status(500).send('Erro ao criar o post');
    }

});

routes.post('/review', async (req, res) => {
    const {review: {title, text, nameBook, avaliation, ImageURI}} = req.body; // recebendo o objeto review

    try{
        await database.createReview(title, text, nameBook, avaliation, ImageURI).then(() => { //criando o review no banco de dados
        return res.status(201).send('Resenha criada com sucesso!');
        });    

    } catch (error) {   //retornando erro
        console.log(error);
        return res.status(500).send('Erro ao criar a resenha');
    }

});

export default routes;