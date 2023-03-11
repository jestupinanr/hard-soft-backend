import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hardware } from '../entities/hardware.entity';
import { Resources } from '../entities/resources.entity';
import { Software } from '../entities/software.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resources)
    private ResourceRepository: Repository<Resources>
  ) {}

  findAll():Promise<Resources[]> {
    return this.ResourceRepository.find({
      relations: ['hardware', 'software',]
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
  }
}
