import { Database } from "../../database.js";
import { Post } from "../models/post.js";

const database = new Database();

export class Review extends Post{
    constructor(idReview, title, text, rating) {
        super(idUser, nameBook, timePost, imageBook);
        this.idReview = idReview;
        this.title = title;
        this.text = text;
        this.rating = rating;
    }

}