import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolDto } from '../dtos/roles.dto';
import { Roles } from '../entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
    ) {}

  findAll():Promise<Roles[]> {
    return this.rolesRepository.find();
  }

  async create(payload: CreateRolDto) {
    try {
      return await this.rolesRepository.save(payload);
    } catch (e) {
        throw new NotAcceptableException(e.detail);
    }
  }
}
