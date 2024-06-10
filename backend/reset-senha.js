import nodemailer from 'nodemailer';
import 'dotenv/config';

export class ResetSenha {
    constructor(email, validationCode) {
        this.email = email;
        this.validationCode = validationCode;
    }

    sendEmail() {
        const emailContent = `
            Olá, recebemos sua solicitação para redefinir sua senha. Digite o código abaixo para redefinir a senha: <br><br> <h1 style="text-align: center">${this.validationCode}</h1>
            <br><br>
            Atenciosamente, <br>
            <img src="https://i.ibb.co/k9Y2ZzX/Viver-sem-ler-perigoso-te-obriga-a-crer-no-que-te-dizem-Mafalda.png">
        `
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
            html: emailContent
        }).then(message => {
            console.log(message);
        
        }).catch(err => {
            console.log(err);
        });

        return this.email;
    }
}