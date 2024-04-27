import {Database} from '../../database.js'

const database = new Database();

export class Post {
    constructor(idPost, idUser, content, timePost, likes, titleReview, textReview, image) {
        this.idPost = idPost;
        this.idUser = idUser;
        this.content = content;
        this.timePost = timePost;
        this.likes = likes;
        this.titleReview = titleReview;
        this.textReview = textReview;
        this.image= image;
    }
 }
