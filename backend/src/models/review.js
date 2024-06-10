import { Post } from "../models/post.js";

export class Review extends Post{
    constructor(idUser, title, content, nameBook, rating, imageBook, timePost, username, user_photo) {
        super(idUser, nameBook, timePost, content, imageBook, username, user_photo);
        this.title = title;
        this.rating = rating;
    }
}