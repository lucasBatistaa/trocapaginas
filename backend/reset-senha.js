import AWS from 'aws-sdk';
import 'dotenv/config';

export class ResetSenha {
    constructor(destinatario) {
        this.destinatario = destinatario;
    }

    enviarEmail(){
        const assunto = 'Solicitação de alteração de senha';
        const mensagem = 'Olá, recebemos sua solicitação para redefinir sua senha. Clique no link abaixo para redefinir a senha:';

        AWS.config.update({});

        const params = {
            Destination: {CcAddressess: [this.destinatario]},
            Message: {

                Body: {

                    Html: {
                        Charset: 'UTF-8',
                        Data: mensagem
                    },

                    Subject: {
                        Charset: 'UTF-8',
                        Data: assunto
                    }
                }
            },
            Source: 'maduhfaria452@gmail.com'
        }

        const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

        sendPromise.then(function(data) {
            console.log('Mensagem '+ data.MessageId + ' enviada com sucesso!')

        }).catch( function(err) { 
            console.error(err, err.stack);
        });
    }
}
