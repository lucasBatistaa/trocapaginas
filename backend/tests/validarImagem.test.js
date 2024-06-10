import validateImage from './validarImagem.js';


describe('teste da função validateImage', () => {

    it('testa imagem vazia', () => {
        const data = 'isso é uma imagem';
        const {review, post} = validateImage(data);
        expect(review).toBe('isso é uma imagem');
        expect(post).toBe('isso é uma imagem');
    });

    it('testa imagem vazia', () => {
        const data = undefined;
        const {review, post} = validateImage(data);
        expect(review).toBeNull();
        expect(post).toBeNull();
    });
});