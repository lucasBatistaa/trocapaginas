export class Post {
    constructor(idPost, idUser, content, timePost, imageBook, nameBook, username, user_photo) {
        this.idPost = idPost;
        this.idUser = idUser;
        this.content = content;
        this.timePost = timePost;
        this.nameBook = nameBook;
        this.imageBook= imageBook;
        this.username = username;
        this.user_photo = user_photo;
    }
}