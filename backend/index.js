import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './src/controller/routes.js';
import session from 'express-session';
import passport from 'passport';
import OAuth2Strategy from 'passport-google-oauth2';
import {Database} from './database.js';
import {User} from './src/models/user.js';

const oauth2strategy = OAuth2Strategy.Strategy;
const app = express(); 
const port = process.env.PORT;
const database = new Database();
const user = new User();

const clientid = process.env.GOOGLE_CLIENT_ID;
const clientsecret = process.env.GOOGLE_CLIENT_SECRET;

async function userExists(email) {
  return await database.getUsers().then(users => {
    const userWithEmail = users.find(user => {
      return user.email === email;
    });

    return userWithEmail;
  });
}

app.use(cors({
  origin: 'http://localhost:8081',
  methods: 'GET, POST, PUT, DELETE',
  credentials: true
  }
));

/*app.use(cors({
  origin: "http://localhost:8081",
}));*/

app.use(express.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.send('Meu servidor backend está rodando!'); 
});

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new oauth2strategy({
        clientID: clientid,
        clientSecret: clientsecret,
        callbackURL: "/auth/google/callback",
        scope: ['profile', 'email']
    },

    async (accessToken, refreshToken, profile, done) => {
        try {

            user.email = profile.emails[0].value;
            user.name = profile.displayName;
            user.password = '';
            user.photo = profile.photos[0].value;

            if(await userExists(profile.emails[0].value) === undefined) {

                await database.create(user.name, user.email, user.password, user.photo).then(() => {
                    console.log('user add');
                });  

            }else {
                console.log('Usuário já cadastrado!');
            }

            return done(null, user);

        } catch (error) {
            console.log(error);
            return done(error, null);
        }
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

/*app.get('/login/google', (req, res) => {
  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=https://trocapaginas-server-production.up.railway.app/auth/google/callback&scope=profile%20email&client_id=${clientid}`);
});*/

app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/success',
  failureRedirect: '/login/failed'
}));

/*app.get('/auth/google/callback', (req, res) => {
  // Lide com a resposta do Google aqui
  console.log(res.data);
});*/


app.get('/success', (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login efetuado!</title>
        <body style="display: flex; flex-direction:column; align-items: center; margin-top: 40%; background: #f2f2f2; color: #170303; font-family: Roboto">
            <img src="https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-512.png" alt="check" style="width: 200px; height: 200px;">
            <br>
            <h2 style="font-size: 20px;">Autenticação com o Google realizada com sucesso!</h2>
            <p style="font-size: 18px">Feche o navegador para voltar ao aplicativo!</p>
        </body>
        </html>
    `;

    res.status(200).send(htmlResponse);
});

app.get('/login/success', (req, res) => {
  res.send(JSON.stringify(user));
});

app.get('/login/failed', (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login efetuado!</title>
        <body style="display: flex; flex-direction:column; align-items: center; margin-top: 40%; background: #f2f2f2; color: #170303; font-family: Roboto">
            <img src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-26-512.png" alt="error" style="width: 200px; height: 200px;">
            <br>
            <h2 style="font-size: 20px;">Autenticação com o Google falhou!</h2>
            <p style="font-size: 18px">Feche o navegador para voltar ao aplicativo e tentar novamente!</p>
        </body>
        </html>
    `;
    
    res.status(401).send(htmlResponse);
});

app.get('/user-data', async (req, res) => {
  if(req.isAuthenticade) {
    res.json(req.user);
  
  }else {
    res.status(401).json({error: 'Usuário não autenticado'});
  }
});


app.listen(port, () => { 
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(routes);
