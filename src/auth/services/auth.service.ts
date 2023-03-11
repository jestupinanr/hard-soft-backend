import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { authUser } from '../entities/auth.entity';
import { LoginDto } from '../dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
  @InjectRepository(User)
  private usersRepository: Repository<User>,) {}

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
      return this.usersRepository.findOne({
        where: {
          email: payload.email,
        },
      })
    } else {
      throw new BadRequestException(`User or password incorrect`);
    }
    
  }
}
