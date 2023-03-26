import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hardware } from '../entities/hardware/hardware.entity';
import { Resources } from '../entities/resources.entity';
import { Software } from '../entities/software/software.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resources)
    private ResourceRepository: Repository<Resources>
  ) {}

  findAll():Promise<Resources[]> {
    return this.ResourceRepository.find({
      relations: ['hardware', 'hardware.status', 'software', 'software.status']
    });
  }

  async findOne(id: string):Promise<Resources> {
    const resource =  await this.ResourceRepository.findOne({
      where: {
        id
      },
      relations: ['hardware', 'hardware.status', 'software', 'software.status']
    });

    if (!resource)
      throw new NotFoundException(`Resource #${id} not found`);

    return resource
  }

  async create(hardware?: Hardware, software?:Software) {
    if (hardware)
      return await this.ResourceRepository.save({
        hardware: hardware
      });
    else
      return await this.ResourceRepository.save({
        software: software
      });
  }
}
