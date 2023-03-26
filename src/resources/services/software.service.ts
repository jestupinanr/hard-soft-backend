import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { Software } from '../entities/software/software.entity';
import { ResourceService } from './resource.service';

@Injectable()
export class SoftwareService {
  constructor(
    @InjectRepository(Software)
    private softwareRepository: Repository<Software>,
    private resourceService: ResourceService
  ) {}

  findAll():Promise<Software[]> {
    return this.softwareRepository.find({
      relations: ['status']
    });
  }

  async create(data: CreateSoftwareDto) {
    try {
      const res = await this.softwareRepository.save(data);
      if (res) {
        const resource = await this.resourceService.create(undefined, res);
        return resource; 
      }
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }

  async update(id: string, changes: UpdateSoftwareDto) {
    const software = this.softwareRepository.findOne({
      where: {
        id
      }
    });

    if (!software)
      throw new NotFoundException(`Software #${id} not found`);
    
    // Update
    await this.softwareRepository.update(id,
      {
        ...changes
      });

    return this.softwareRepository.findOne({
      where: {
        id
      }
    });
  }

  async remove(id: string) {
    const software = await this.softwareRepository.findOne({
      where: {
        id
      }
    });
    if (!software)
      throw new NotFoundException(`Software #${id} not found`);
    
    return this.softwareRepository.delete(id)
  }
}
