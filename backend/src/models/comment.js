import { User } from "./user.js";


export class Comment{
        constructor(idUser, idComment, comment, time){
        this.idUser = idUser;
        this.idComment = idComment;
        this.comment = comment;
        this.time = time;
        }   
    }