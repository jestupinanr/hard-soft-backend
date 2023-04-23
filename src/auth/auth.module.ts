import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

import { AuthController } from './controllers/auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './services/auth.service';
import { MailService } from 'src/mails/services/mail.service';
import { MailModule } from 'src/mails/mail.module';

@Module({
  imports: [UsersModule,
    MailModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'estaEsLaLlaveSecreta',
      signOptions: { expiresIn: '20h' }
    })
],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
