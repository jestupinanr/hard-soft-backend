import { BadRequestException, HttpException, HttpStatus, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User> ) {}

  findAll():Promise<User[]> {
    return this.usersRepository.find();
  }

  // findOne(id: number) {
  //   const user = this.users.find((item) => item.id === id);
  //   if (!user) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   return user;
  // }

  async create(data: CreateUserDto) {
    const olderData = await this.usersRepository.findOne({
      where: {
        email: data.email
      }
    });

    if (olderData)
      throw new BadRequestException('User already created');
    return await this.usersRepository.save(data);
  }

  // update(id: number, changes: UpdateUserDto) {
  //   const user = this.findOne(id);
  //   const index = this.users.findIndex((item) => item.id === id);
  //   this.users[index] = {
  //     ...user,
  //     ...changes,
  //   };
  //   return this.users[index];
  // }

  // remove(id: number) {
  //   const index = this.users.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   this.users.splice(index, 1);
  //   return true;
  // }
}
