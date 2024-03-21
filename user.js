class User {
    constructor(idUser, name, email, password, photo) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }

    login() {
        let userCheck = false;

        for(let i = 0; i < users.length; i++) {
            if(users[i].email === this.email) {

                if(users[i].password === this.password) {
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

let id = 0;

//criando usuários para teste
const users = [new User(++id, 'Túlio', 'tulio.master@gmail.com', '123', null),
new User(++id, 'Maria', 'maria.faria@gmail.com', '456', null),
new User(++id, 'Stephanie', 'stephanie.victoria@gmail.com', '789', null),
new User(++id, 'Lucas', 'lucas@gmail.com', '5623', null)
];

//console.log(users);

let userEmail = 'maria.faria@gmail.com';
let userPassword = '456';

const userLogin = new User(null, null, userEmail, userPassword, null);

userLogin.login();

const crypto = require("crypto");

//acessar banco de dados
//coletar dados dos usuários cadastrados
//salvar dados em um array