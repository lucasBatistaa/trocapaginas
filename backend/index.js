//import "dotenv/config";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import routes from '../backend/src/routes.js';

//import session from 'express-session';
//import passport from 'passport'; 
//import GoogleStrategy from 'passport-google-oauth';
//const GOOGLE_CLIENT_ID = '';
//const GOOGL_CLIENT_SECRET = '';

const app = express(); // Inicialização corrigida
let userProfile;


app.use(express.json());
app.use(cors()); // Presumindo que você deseja permitir todas as origens
app.use(bodyParser.urlencoded({ extended: false })); // Analisa corpos de solicitação codificados por URL
app.use(routes);
/*
//app.use(session({
    secure: true,
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET'
    app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(routes);
app.set('view engine', 'ejs');

app.use(session({
  secure: true,
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
  }));

app.use(passport.initialize());
app.use(passport.session());
app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
    process.nextTick(function() {
        return cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
        });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

passport.use(new GoogleStrategy.OAuth2Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGL_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
    },

    function(accessToken, refreshToken, profile, done) {
        userProfile = profile;

        return done(null, userProfile);
    }
))

app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });
*/
const port = 3000;

app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`);
  });
  
  app.get('/', (req, res) => {
    res.send('Meu servidor backend está rodando!'); 
  });
  
 
  
  
  