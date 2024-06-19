export class Controller {
    constructor(database, user) {
        this.database = database;
        this.user = user;
    }

    async userExists(email) {
        return await this.database.getUsers().then(users => {
        const userWithEmail = users.find(user => {
            return user.email === email;
        });
    
        return userWithEmail;
        });
    }

    async getPosts() {
        const posts = await database.getUsersPosts(contPost).then((posts) => {
                
            posts.forEach(post => {
                post.photo = post.photo.toString('utf-8');
            })
            return posts;
        }); 

        return posts;
    }

    async getReviews() {
        const reviews = await database.getUsersReviews(contReview).then((reviews) => {
            reviews.forEach(review => {
                review.photo = review.photo.toString('utf-8');
            })
        return reviews;
        });

        return reviews;
    }

    sortPublications(publications) {
        publications.sort((a, b) => {
            return new Date(a.timepost.split(', ')[0].split('/').reverse().join('-')) - new Date(b.timepost.split(', ')[0].split('/').reverse().join('-'));
        })
    }

    async getUserByEmail(email) {
        if(email !== null) {
            const user = await userExists(email);

            return user.id_user;
        }
    }

    async bookExists(imageBook) {
        const books = await database.getBooks();

        if(books.find((book) => book.cover === imageBook)) {
            return true;
        }

        return false;
    }
}