import {Database} from '../../database.js'

const database = new Database();

export class User {
    constructor(idUser, name, email, password, photo) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }
}