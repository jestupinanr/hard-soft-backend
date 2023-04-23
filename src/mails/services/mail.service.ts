import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(
  private mailerService: MailerService
  ) {}

  sendEmailRecoveryPassword(token: string, email: string): void {
    this.mailerService.sendMail({
      to: email,
      from: 'empresahardsoft2023@gmail.com',
      subject: 'Recuperar contraseña',
      html: `
        <body>
          <h1>Recuperar contraseña</h1>
          <p>¿has perdido tu contraseña?, no hay problema detectamos que tu cuenta si existe.</p>
          <p>Ingresa al siguiente link para cambiar tu contraseña</p>
          <a href='http://localhost:4200/auth/recovery-password/${token}'>Click aquí</a>
        </body>`
    })
  }
}
