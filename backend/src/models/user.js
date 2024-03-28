import {Database} from './database.js'

const database = new Database();

export class User {
    constructor(idUser, name, email, password, photo) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }

    login() {
        return database.getUsers();
    }

    /*login() {
        getUsers().then( users => {
            return users;
        });

        const arrayteste = [];
        //let userCheck = false;

        /*for(let i = 0; i < users.length; i++) {
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

        return userCheck;*/
    //}
}

const userLogin = new User(null, null, 'tulio.turuda@gmail.com', 'tuLio!123', null);

/*getUsers().then( users => {
    userLogin.login(users);
});*/

//const arrayUsers = getUsers().then(users => {return users});
//console.log(arrayUsers);


//userLogin.login();

//const crypto = require("crypto");

//acessar banco de dados
//coletar dados dos usuários cadastrados
//salvar dados em um array