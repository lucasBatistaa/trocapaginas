import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import routes from '../backend/src/controller/routes.js';

const app = express(); 

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(routes);

const port = process.env.PORT;

app.listen(port, () => { 
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/', (req, res) => {
  res.send('Meu servidor backend está rodando!'); 
});


