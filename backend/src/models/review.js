import { Database } from "../../database.js";
import { Post } from "../models/post.js";

const database = new Database();

export class Review extends Post{
    constructor(idUser, title, content, nameBook, rating, imageBook, timePost) {
        super(idUser, nameBook, timePost, content, imageBook);
        this.title = title;
        this.rating = rating;
    }

}

export default Review;