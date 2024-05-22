import checkEmail from "./validationCode";

test('Validation code', () => {
    const result = checkEmail('1534', [1, 2, 3, 4]);
    const expected = 'Código inválido!';

    expect(result.normalize()).toBe(expected.normalize());
})