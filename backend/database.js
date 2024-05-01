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

    async createPost(content, timePost, nameBook, ImageURI) {
        await sql `insert into posts (content, timePost, nameBook, ImageURI) values (${content}, ${timepost}, ${nameBook}, ${ImageURI})`;
    }

    async createReview(title, text, nameBook, avaliation, ImageURI) {
        await sql `insert into reviews (title, text, nameBook, avaliation, ImageURI) values (${title}, ${text}, ${nameBook}, ${avaliation}, ${ImageURI})`;
    }
}
