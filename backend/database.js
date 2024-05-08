import {sql} from './database-connect.js';

export class Database {
    //retornar todos os usuários do banco
    async getUsers() {
        const users = await sql`select * from users`;
        return users;
    }

    async updatePassword(email, password) {
        await sql `update users set password = ${password} where email = ${email}`;
    }

    async create(user) {
        await sql `insert into users (name, email, password, photo) values (${user.name}, ${user.email}, ${user.password}, ${user.photo})`;	
    }

    async createPost(post) {
        await sql `insert into posts (id_user, content, timePost, nameBook, imageBook) values (${post.idUser}, ${post.content}, ${post.timePost}, ${post.nameBook}, ${post.imageBook})`;
    }

    async createReview(review) {
        await sql `insert into reviews (id_user, title, content, nameBook, rating, image, time_post) values (${review.idUser},${review.title}, ${review.content}, ${review.nameBook}, ${review.rating}, ${review.imageBook}, ${review.timePost})`;
    }

    async createComment (comments) {
        await sql `insert into comments (content_coment, id_book, id_post, id_review, id_user, id_ time_coment) 
        values (${comments.comment}${comments.idBook}, ${comments.idPost}, ${comments.idReview}, ${comments.idUser}, ${comments.comment}, ${comments.time})`;
    }

    async buscaCommentPost () {
        const commentPost = await sql `select c.content_coment, c.id_time_content from comments c inner join users u ON c.id_user = u.id_user inner join posts p on p.id_user = u.id_user
        where c.id_post = p.id_post order by c.id_time_content desc`;

        return commentPost;
    }

    async buscaCommentReview () {
        const commentReview = await sql `select c.content_coment, c.id_time_content from comments c inner join users u ON c.id_user = u.id_user inner join reviews r on r.id_user = u.id_user
        where c.id_review = r.id_review order by c.id_time_content desc`;

        return commentReview;
    }
}
