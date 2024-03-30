//import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import routes from './routes.js';
 
const app = express(); // Inicialização corrigida

app.use(express.json());
app.use(cors()); // Presumindo que você deseja permitir todas as origens
app.use(bodyParser.urlencoded({ extended: false })); // Analisa corpos de solicitação codificados por URL
app.use(routes);

const port = 4000;

app.listen(port, () => { // Função de seta para sintaxe mais limpa
  console.log(`Servidor rodando na porta ${port}`);
});

// Rota para testar o servidor
app.get('/', (req, res) => {
  res.send('Meu servidor backend está rodando!'); // Erro de digitação corrigido (está)
});



