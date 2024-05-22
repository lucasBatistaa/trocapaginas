function checkEmail(confirmationCode, validationCode) {
    if( confirmationCode === validationCode.join('')) {
        return 'Código correto!';
    
    }else {
        return 'Código inválido!';
    }
}

export default checkEmail;