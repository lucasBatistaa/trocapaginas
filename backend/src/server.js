import express from 'express';
import cors from 'cors';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World 2!');
});

app.listen(4000, () => {
    console.log('servidor rodando na porta 4000');
})