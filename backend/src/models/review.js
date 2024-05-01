import { Database } from "../../database.js";
import { Post } from "../models/post.js";

const database = new Database();

export class Review extends Post{
    constructor(idReview, idUser,title, text, avaliation, image) {
        super(idUser,nameBook, timePost, image);
        this.idReview = idReview;
        this.title = title;
        this.text = text;
        this.avaliation = avaliation;
    }

}