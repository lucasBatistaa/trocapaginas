import { Database } from "../../database.js";

const database = new Database();

export class Review {
    constructor(idReview, idUser,title, text, nameBook, avaliation, imageURI) {
        this.idReview = idReview;
        this.idUser = idUser;
        this.title = title;
        this.text = text;
        this.nameBook = nameBook;
        this.avaliation = avaliation;
        this.imageURI = imageURI;
    }

}