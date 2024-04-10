import express from 'express';
import {Database} from '../database.js';
import bcrypt from 'bcryptjs';
import {User} from '../user.js';

const routes = express.Router();
const database = new Database();
const salt = bcrypt.genSaltSync(10);
const user = new User();

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
//criar usuário
database.getUsers().then(users => {
    routes.post('/create', (req, res) => {
        const {name, email, password, photo} = req.body;
       //verificar se o e-mail existe no database
        const userExisting = users.find(user => user.email === email); 

        if(userExisting) {
           return res.status(401).send('Usuário ja existe!');

    } else{
       const passwordHash = bcrypt.hashSync(password, salt); //criptografando a senha

       database.create(name, email, passwordHash, photo); //criando o usuário no database

       return res.status(200).send('Usuário criado com sucesso!');

    }
})
});

//login
database.getUsers().then(users => {
   routes.post('/login', (req, res) => { console.log('Entrei na rota de login');
       const {email, password} = req.body;
       const userExists = users.find(user => user.email === email && user.password === password);

       if(userExists) {
           return res.status(200).send('Login efetuado com sucesso!');
       
       }else {
           return res.status(401).send('Usuário ou senha inválidos!');
       }

   })
});


// criação de conta

database.getUsers().then(user => {
   routes.post('/create', async (req, res) => {
 
   const {email, name, password, photo} = req.body;
   
   try{
   // primeiro verificar se existe um email no banco de dados
 
       const existingUser = user.find(user => user.email === email);
       if(existingUser){
           return res.status(409).send('Já existe uma conta com esse email');
       }
 
   // criptografar senha
 
       const passwordHash = await bcrypt.hash(password, salt); //criptografando senha
 
   //criando usuario no banco de dados
        
       await database.create(email, name, passwordHash, photo);
 
       res.status(201).send('Conta criada com sucesso');
 
   }   catch (error){
       console.error(error);
       res.status(500).send('Erro ao cadastrar usuário');
   }
 });
 });

//Esqueci minha senha
database.getUsers().then(users => {
   routes.post('/esqueciMinhaSenha', (req, res) => {
       const {email} = req.body; //receber um e-mail
   
       const emailExists = users.find(user => user.email === email); //verificar se o e-mail existe no database
   
       if(emailExists) {
           user.email = email;//setando email para usar depois

           //se e-mail existe -> enviar link de reset
           const reset = new ResetSenha(email);
           reset.sendEmail();
   
           return res.status(200).send('E-mail de reset enviado!');
   
       }else {
           return res.status(401).send('Usuário não encontrado! Tente novamente'); //se e-mail não existe -> informar usuário
       }
   })
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

export default routes;