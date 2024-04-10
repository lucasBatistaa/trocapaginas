import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import routes from '../backend/src/controller/routes.js';
import passport from 'passport'; 
import session from 'express-session';

const app = express(); 

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

const port = process.env.PORT;

app.listen(port, () => { 
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send('Meu servidor backend está rodando!'); 
});

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

