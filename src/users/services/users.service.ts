import { BadRequestException, HttpException, HttpStatus, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User> ) {}

  findAll():Promise<User[]> {
    return this.usersRepository.find({
      relations: ['role']
    });
  }

  findOne(id: string) {
    const user = this.usersRepository.findOne({
      where: {
        id
      },
      relations: ['role']
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto) {
    const olderData = await this.usersRepository.findOne({
      where: {
        email: data.email
      },
    });

    if (olderData)
      throw new BadRequestException('User already created');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    return await this.usersRepository.save({
      ...data,
      password: hash
    });
  }

  async update(id: string, changes: UpdateUserDto) {
    const user = this.usersRepository.findOne({
      where: {
        id
      }
    });

    if (!user)
      throw new NotFoundException(`User #${id} not found`);

    const dataSend = { ...changes };
    // Update password?
    if (changes.password) {
      const salt = bcrypt.genSaltSync(10);
      dataSend.password = bcrypt.hashSync(changes.password, salt);
    }

    // Update
    await this.usersRepository.update(id,
      {
        ...dataSend
      });

    return this.usersRepository.findOne({
      where: {
        id
      },
      relations: ['role']
    });
  }

  // remove(id: number) {
  //   const index = this.users.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   this.users.splice(index, 1);
  //   return true;
  // }
}
