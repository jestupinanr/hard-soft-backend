import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { authUser } from '../entities/auth.entity';
import { LoginDto } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
  @InjectRepository(User)
  private usersRepository: Repository<User>,
  private jwtAuthService: JwtService
  ) {}

  private users: authUser[] = [
    {
      email: 'correo@mail.com',
      password: '12345',
    },
  ];

  findAll() {
    return this.users;
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
}
