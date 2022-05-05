import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'ccb9e0fe3565ac',
        pass: '186ede86db6fe3',
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail(data: SendMailData) {
        await transport.sendMail({
            from: 'Equipe FeedGet <oi@feedget.com>',
            to: 'Igor Trentini <igortrentini.2004@gmail.com>',
            subject: data.subject,
            html: data.body,
        });
    }
}
