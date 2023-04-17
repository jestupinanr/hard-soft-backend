import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(
  private mailerService: MailerService
  ) {}

  sendEmailRecoveryPassword(): void {
    this.mailerService.sendMail({
      to: 'juan1diego3@gmail.com',
      from: 'empresahardsoft2023@gmail.com',
      subject: 'test email',
      text: 'Este es un test de correo electronico',
      html: '<h1>Holaaaaa este es un test de mensaje</h1>'
    })
  }
}
