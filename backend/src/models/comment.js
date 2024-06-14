import { User } from "./user.js";


export class Comment{
        constructor(idUser, idPublication, comment){
        this.idUser = idUser;
        this.idPublication = idPublication;
        this.comment = comment;
    }   
}

export default Comment;