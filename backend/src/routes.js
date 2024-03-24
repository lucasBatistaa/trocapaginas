import express from 'express';
import {Database} from '../database.js';

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
})

export default routes;