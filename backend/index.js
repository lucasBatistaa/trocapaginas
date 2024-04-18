import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import routes from '../backend/src/controller/routes.js';
import session from 'express-session';
import passport from 'passport';
//import { createProxyMiddleware } from 'http-proxy-middleware';
//import passportSetup from '../backend/passport.js'
import authRoute from '../backend/src/controller/auth.js';

const app = express(); 

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(routes);

app.use(
  session({
      resave: false,
      saveUninitialized: true,
      secret: 'SECRET'
  })
);


app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: 'http://localhost:8081', // Permitir somente solicitações deste domínio
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

app.use(cors(corsOptions));
app.use('/auth', authRoute);

app.set('view engine', 'ejs');

const port = process.env.PORT;

app.listen(port, () => { 
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send('Meu servidor backend está rodando!'); 
});



//app.use(passport.initialize());
//app.use(passport.session());









