import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { authUser } from '../entities/auth.entity';
import { LoginDto, getTokenRecoveryPassword, recoveryPassword } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mails/services/mail.service';

@Injectable()
export class AuthService {
  constructor(
  @InjectRepository(User)
  private usersRepository: Repository<User>,
  @Inject(JwtService)
  private readonly jwtAuthService: JwtService,
  private mailService: MailService
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  async login(payload: LoginDto) {
    const user = await this.usersRepository.findOne({
      where: {
        email: payload.email,
      },
      select: ['password']
    })

    if (!user)
      throw new BadRequestException(`User or password incorrect`);
    
    const samePassword = bcrypt.compareSync(payload.password, user.password);
    
    if(samePassword) {
      const res = await this.usersRepository.findOne({
        where: {
          email: payload.email,
        },
        relations: ['role']
      })
      const dataToken = { id: res.id, email: res.email };
      const token = this.jwtAuthService.sign(dataToken)
      return {
        user: res,
        token: token
      }
    } else {
      throw new BadRequestException(`User or password incorrect`);
    }
  }

  async getTokenRecoveryPassword(payload: getTokenRecoveryPassword) {
    const res = await this.usersRepository.findOne({
      where: {
        email: payload.email,
      }
    })

    if (!res)
      throw new BadRequestException(`User not found`);
  
    const dataToken = { email: payload.email };
    const token = this.jwtAuthService.sign(dataToken);
    this.mailService.sendEmailRecoveryPassword(token, payload.email);
  }

  async savePassword(payload: getTokenRecoveryPassword, token: string) {
    const dataJwt = this.jwtAuthService.verify(token);
    const res = await this.usersRepository.findOne({
      where: {
        email: dataJwt.email,
      }
    })

    if (!res)
      throw new BadRequestException(`User not found`);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(payload.password, salt);

    return await this.usersRepository.update(res.id, {
      password: hash
    })
  }
}
