import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';

import { MailController } from './controllers/mail.controller';
import { MailService } from './services/mail.service';

@Module({
  imports: [UsersModule],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
