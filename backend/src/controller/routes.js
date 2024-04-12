import express from 'express';
import {Database} from '../../database.js';
import {ResetSenha} from '../../reset-senha.js';
import bcrypt from 'bcryptjs';
import {User} from '../models/user.js';

const routes = express.Router();
const database = new Database();
const salt = bcrypt.genSaltSync(10);
const user = new User();

async function userExists(email) {
    await database.getUsers().then(users => {
        return users.find(user => user.email === email);
    });
}
//login
routes.post('/login', (req, res) => {
    const {email, password} = req.body;

    database.getUsers().then(users => {
        const validateUser = users.find(user => user.email === email && bcrypt.compareSync(password, user.password));
    
        if(validateUser) {
            return res.status(200).send('Login efetuado com sucesso!');
        
        }else {
            return res.status(401).send('Usuário ou senha inválidos!');
        }
    });
});


// criação de conta
routes.post('/create', (req, res) => {

    const {username, email, password, photo} = req.body;
    //verificar se o e-mail existe no database

    const passwordHash = bcrypt.hashSync(password, salt); //criptografando a senha

    database.create(username, email, passwordHash, photo).then(() => {
        return res.status(200).send('Usuário criado com sucesso!');
    }); 
});

//verificar se email existe
routes.post('/verificar-email', async (req, res) => {
    const {email} = req.body;

    if(await userExists(email)) {
        return res.status(422).send('E-mail já cadastrado!');

    }else {
        return res.status(200).send('E-mail disponível!');
    }
})

//Esqueci minha senha
routes.post('/esqueciMinhaSenha', async (req, res) => {
    const {email} = req.body; //receber um e-mail

    if(await userExists(email)) {
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

export default routes;