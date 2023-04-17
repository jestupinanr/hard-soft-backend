import {
  Controller,
  Get,
} from '@nestjs/common';

import { MailService } from '../services/mail.service';

@Controller('email')
export class MailController {
  constructor( private mailService: MailService) {}

  @Get()
  findAll() {
    return this.mailService.sendEmailRecoveryPassword();
  }
}
