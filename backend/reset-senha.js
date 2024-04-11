import nodemailer from 'nodemailer';
import 'dotenv/config';

export class ResetSenha {
    constructor(email) {
        this.email = email;
    }

    sendEmail() {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.PASS_EMAIL
            }
        });
    
        transporter.sendMail({
            from: "Troca Páginas <process.env.USER_EMAIL>",
            to: this.email, 
            subject: "Solicitação de alteração de senha",
            html: "Olá, recebemos sua solicitação para redefinir sua senha. Clique no link abaixo para redefinir a senha: <br><br> <a href='http://localhost:8081/'>Redefinir minha senha</a>"
        }).then(message => {
            console.log(message);
        
        }).catch(err => {
            console.log(err);
        });

        return this.email;
    }
}