import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Hardware } from '../entities/hardware/hardware.entity';
import { Resources } from '../entities/resources.entity';
import { Software } from '../entities/software/software.entity';
import { CreateResourceDto } from '../dtos/resource';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resources)
    private ResourceRepository: Repository<Resources>
  ) {}

  findAll(query: string | undefined) {
    return this.ResourceRepository.find({
      relations: ['hardware', 'hardware.status', 'hardware.brand', 'hardware.type', 'software', 'software.status', 'software.brand', 'software.type'],
    });
  }

  async findOne(id: string):Promise<Resources> {
    const resource =  await this.ResourceRepository.findOne({
      where: {
        id
      },
      relations: ['hardware', 'hardware.status', 'hardware.brand', 'hardware.type', 'software', 'software.status', 'software.brand', 'software.type']
    });

    if (!resource)
      throw new NotFoundException(`Resource #${id} not found`);

    return resource
  }

  async update(id: string, changes: CreateResourceDto) {
    const software = this.ResourceRepository.findOne({
      where: {
        id
      }
    });

    if (!software)
      throw new NotFoundException(`Resource #${id} not found`);
    
    // Update
    await this.ResourceRepository.update(id,
      {
        ...changes
      });

    return this.ResourceRepository.findOne({
      where: {
        id
      },
      relations: ['hardware', 'hardware.status', 'hardware.brand', 'hardware.type', 'software', 'software.status', 'software.brand', 'software.type'],
    });
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
  };
}
