import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssigmentDto } from '../dtos/assigment';
import { Assigment } from '../entities/assigment.entity';

@Injectable()
export class AssigmentService {
  constructor(
    @InjectRepository(Assigment)
    private assigmentRepository: Repository<Assigment>
  ) {}


  findAll():Promise<Assigment[]> {
    return this.assigmentRepository.find({
      relations: ['user', 'resource', 'resource.hardware', 'resource.software']
    });
  }

  async create(data: CreateAssigmentDto) {
    try {
      return await this.assigmentRepository.save(data);
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }
}
