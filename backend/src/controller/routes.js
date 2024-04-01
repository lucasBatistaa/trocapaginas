import express from 'express';
import {Database} from '../../database.js';
import {ResetSenha} from '../../reset-senha.js';
import bcrypt from 'bcryptjs';
import {User} from '../models/user.js';

const routes = express.Router();
const database = new Database();
const salt = bcrypt.genSaltSync(10);
const user = new User();

//login
database.getUsers().then(users => {
    routes.post('/login', (req, res) => {
        const {email, password} = req.body;

        const userExists = users.find(user => user.email === email && user.password === password);

        if(userExists) {
            return res.status(200).send('Login efetuado com sucesso!');
        
        }else {
            return res.status(401).send('Usuário ou senha inválidos!');
        }

    })
});

//Esqueci minha senha
database.getUsers().then(users => {
    routes.post('/esqueciMinhaSenha', (req, res) => {
        const {email} = req.body; //receber um e-mail
    
        const emailExists = users.find(user => user.email === email); //verificar se o e-mail existe no database
    
        if(emailExists) {
            user.email = email;//setando email para usar depois

            //se e-mail existe -> enviar link de reset
            const reset = new ResetSenha(email);
            reset.sendEmail();
    
            return res.status(200).send('E-mail de reset enviado!');
    
        }else {
            return res.status(401).send('Usuário não encontrado! Tente novamente'); //se e-mail não existe -> informar usuário
        }
    })
});

//alterar a senha
routes.post('/alterar-senha', (req, res) => {
    const {password} = req.body; //recebendo nova senha
    const passCript = bcrypt.hashSync(password, salt); //criptografando a senha

    //alterando no banco de dados
    database.updatePassword(user.email, passCript);

    return res.status(200).send("Senha alterada com sucesso!");
});

export default routes;