import {getUsers} from './database.js'

class User {
    constructor(idUser, name, email, password, photo) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }

    login(users) {
        let userCheck = false;

        for(let i = 0; i < users.length; i++) {
            if(users[i].email === this.email) {

                if(users[i].senha === this.password) {
                    console.log('Você está logado!');
                    userCheck = true;
                    break;
                }

            }
        }

        if(!userCheck) {
            console.log('Usuário e/ou senha incorretos');
        }
    }
}

const userLogin = new User(null, null, 'tulio.turuda@gmail.com', 'tuLio!123', null);

getUsers().then( users => {
    const arrayUsers = users;

    userLogin.login(arrayUsers);
});

//const arrayUsers = getUsers().then(users => {return users});
//console.log(arrayUsers);

let userEmail = 'maria.faria@gmail.com';
let userPassword = '456';


//userLogin.login();

//const crypto = require("crypto");

//acessar banco de dados
//coletar dados dos usuários cadastrados
//salvar dados em um array