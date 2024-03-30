import express from 'express';
import {Database} from '../../database.js';
import {ResetSenha} from '../../reset-senha.js';

const routes = express.Router();
const database = new Database();

database.getUsers().then(users => {
    routes.post('/login', (req, res) => {
        const {email, password} = req.body;

        const user = users.find(user => user.email === email && user.password === password);

        if(user) {
            return res.status(200).send('Login efetuado com sucesso!');
        
        }else {
            return res.status(401).send('Usuário ou senha inválidos!');
        }

    })
});

//Esqueci minha senha
database.getUsers().then(users => {
    routes.post('/esqueciMinhaSenha', (req, res) => {
        const email = req.body; //receber um e-mail
    
        const emailExists = users.find(user => user.email === email); //verificar se o e-mail existe no database
    
        if(emailExists) {
            //se e-mail existe -> enviar link de reset
            const reset = new ResetSenha(email);
    
            console.log(reset.destinatario);
    
        }else {
            return res.status(401).send('Usuário não encontrado! Tente novamente'); //se e-mail não existe -> informar usuário
        }
    })
});



export default routes;