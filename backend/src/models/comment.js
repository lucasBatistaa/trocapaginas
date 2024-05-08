import { Database } from "postgres";
import { User } from "./user";

const database = new Database();

export class Comment extends User {
        constructor(idUser, idComment, comment, time){
        this.idUser = idUser;
        this.idComment = idComment;
        this.comment = comment;
        this.time = time;
        }   
    }