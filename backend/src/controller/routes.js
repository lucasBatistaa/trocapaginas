import express from 'express';
import {Database} from '../../database.js';
import {ResetSenha} from '../../reset-senha.js';
import bcrypt from 'bcryptjs';
import {User} from '../models/user.js';
import axios from 'axios';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth2';
import session from 'express-session';

const routes = express.Router();
const database = new Database();
const salt = bcrypt.genSaltSync(10);
const user = new User();

async function userExists(email) {
    console.log('here:'  + email)
    await database.getUsers().then(users => {

        return users.find(user => user.email === email)
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
routes.post('/create', async (req, res) => {

    const {username, email, password, photo} = req.body;
    //verificar se o e-mail existe no database

    console.log(username, email)

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

//login com google

/*passport.use(
    new GoogleStrategy(
        {
            clientID: '466281999410-0fs5m0nbvs27cka5enoi6etev6ud039f.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            scope: ['profile', 'email']
        },
        function (accessToken, refreshToken, profile, done) {
            const userProfile = profile;
            return done(null, userProfile);
        }
    )
);

routes.get('auth/google', (req, res) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })
});

routes.get('/auth/google/callback', 
    passport.authenticate('google', {
        session: false, 
        failureRedirect: '/auth/error' }), 

    (req, res) => {
    res.send('Login efetuado com sucesso!');
});*/

export default routes;