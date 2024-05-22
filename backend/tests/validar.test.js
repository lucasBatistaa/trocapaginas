import User from '../src/models/user.js';
import Post from '../src/models/post.js';
import Review from '../src/models/review.js';
import Comment from '../src/models/comment.js';

describe('teste das classes', () =>{

    it('teste da classe User', () => {
        const user = new User(1, 'Tulio', 'yHnqT@example.com', '123456', 'https://github.com/tuliofarias');

        expect(typeof user).toBe('object');
        expect(user.idUser).toBe(1);
        expect(user.name).toBe('Tulio');
        expect(user.email).toBe('yHnqT@example.com');
        expect(user.password).toBe('123456');
        expect(user.photo).toBe('https://github.com/tuliofarias');
        
    });

    it('teste da classe Post', () => {
        const post = new Post(6, 1, 'postagem teste', '2022-05-12', 'https://github.com/tuliofarias', 'Turma da Mônica');

        expect(typeof post).toBe('object');
        expect(post.idPost).toBe(6);
        expect(post.idUser).toBe(1);
        expect(post.content).toBe('postagem teste');
        expect(post.timePost).toBe('2022-05-12');
        expect(post.nameBook).toBe('Turma da Mônica');
        expect(post.imageBook).toBe('https://github.com/tuliofarias');
        }
    );

    it('teste da classe Review', () => {
        const review = new Review(10, 'Teste de classe', 'teste unitário', 'Engenharia da Computação', 10, 'isso e uma imagem', '2024-05-18');

        expect(typeof review).toBe('object');
        }
    );

    it('teste da classe Comment', () => {
        const comment = new Comment(1, '15', 'Fazer testes está sendo bom', '2024-05-18');

        expect(typeof comment).toBe('object');
        expect(comment.idUser).toBe(1);
        expect(comment.idComment).toBe('15');
        expect(comment.comment).toBe('Fazer testes está sendo bom');
        expect(comment.time).toBe('2024-05-18');
        }
    );
        
})
