import {sql} from './database-connect.js';

export class Database {
    //retornar todos os usuários do banco
    async getUsers() {
        const users = await sql`select * from users`;
        return users;
    }

    //retornar usuário 
    async getUsersById(id_user) {
        const users_with_id = sql `select name, photo from users where id_user = ${id_user}`;
        return users_with_id;
    }

    async updatePassword(email, password) {
        await sql `update users set password = ${password} where email = ${email}`;
    }

    async create(user) {
        await sql `insert into users (name, email, password, photo) values (${user.name}, ${user.email}, ${user.password}, ${user.photo})`;	
    }

    async createPost(post) {
        await sql `insert into posts (id_user, content, timepost, nameBook, image_post) values (${post.idUser}, ${post.content}, ${post.timePost}, ${post.nameBook}, ${post.imageBook})`;
    }

    async createReview(review) {
        await sql `insert into reviews (id_user, title, content, nameBook, rating, image_post, timepost) values (${review.idUser},${review.title}, ${review.content}, ${review.nameBook}, ${review.rating}, ${review.imageBook}, ${review.timePost})`;
    }

    async getUsersPosts(init) {
        const users_and_posts = await sql `select posts.*, users.name, users.photo
        from posts inner join users using(id_user)
        limit 5 offset ${init}`;

        return users_and_posts;
    }

    async getUsersReviews(init) {
        const users_and_reviews= await sql `select reviews.*, users.name, users.photo
        from reviews inner join users using(id_user)
        limit 5 offset ${init}`;

        return users_and_reviews;
    }

    async createComment (comments) {
        await sql `insert into comments (content_coment, id_book, id_post, id_review, id_user, id_ time_coment) 
        values (${comments.idUser}, ${comments.IdComment}, ${comments.comment}, ${comments.time})`;
    }

    async getMyPosts(email) {
        console.log(email)
        const myPosts = sql `select posts.*, users.name, users.photo 
        from posts inner join users using(id_user)
        where users.email = ${email}`;

        return myPosts;
    }

    async getMyReviews(email) {
        const myReviews = sql `select reviews.*, users.name, users.photo
        from reviews inner join users using(id_user) 
        where users.email = ${email}`;

        return myReviews; 
    }
}
