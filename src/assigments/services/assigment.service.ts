import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssigmentDto, UpdateAssigmentDto } from '../dtos/assigment';
import { Assigment } from '../entities/assigment.entity';

@Injectable()
export class AssigmentService {
  constructor(
    @InjectRepository(Assigment)
    private assigmentRepository: Repository<Assigment>
  ) {}


  findAll():Promise<Assigment[]> {
    return this.assigmentRepository.find({
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
  }

  findOne(id: string) {
    const assigment = this.assigmentRepository.findOne({
      where: {
        id
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
    if (!assigment) {
      throw new NotFoundException(`Assigmente #${id} not found`);
    }
    return assigment;
  }

  findAllByUser(id: string) {
    const assigment = this.assigmentRepository.find({
      where: {
        user: {
          id
        }
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
    if (!assigment) {
      throw new NotFoundException(`Assigmente #${id} not found`);
    }
    return assigment;
  }

  findAllByResource(id: string) {
    const assigment = this.assigmentRepository.findOne({
      where: {
        resource: {
          id
        }
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
    if (!assigment) {
      throw new NotFoundException(`Assigment #${id} not found`);
    }
    return assigment;
  }

  async create(data: CreateAssigmentDto) {
    try {
      return await this.assigmentRepository.save(data);
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }

  async update(id: string, changes: UpdateAssigmentDto) {
    const software = this.assigmentRepository.findOne({
      where: {
        id
      }
    });

    if (!software)
      throw new NotFoundException(`Assigment #${id} not found`);
    
    // Update
    await this.assigmentRepository.update(id,
      {
        ...changes
      });

    return this.assigmentRepository.findOne({
      where: {
        id
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
  }
}
