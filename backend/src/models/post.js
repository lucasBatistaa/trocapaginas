import {Database} from '../../database.js'

const database = new Database();

export class Post {
    constructor(idPost, idUser, content, timePost, imageBook, nameBook) {
        this.idPost = idPost;
        this.idUser = idUser;
        this.content = content;
        this.timePost = timePost;
        this.nameBook = nameBook;
        this.imageBook= imageBook;
    }
 }
