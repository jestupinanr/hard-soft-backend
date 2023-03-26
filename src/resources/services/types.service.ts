import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateResourceBrandDto } from '../dtos/resource-brand';
import { StatusResources } from '../entities/status-resources.entity';
import { ResourceType } from '../entities/type.entity';

@Injectable()
export class ResourceTypesService {
  constructor(
    @InjectRepository(ResourceType)
    private resourceTypeRepository: Repository<ResourceType>
  ) {}

  findAll(query: any):Promise<StatusResources[]> {
    const { resource } = query;
    return this.resourceTypeRepository.find({
      where: {
        ...(resource) && {
          resource
        }
      }
    });
  }

  findByResource():Promise<StatusResources[]> {
    return this.resourceTypeRepository.find();
  }

  async create(data: CreateResourceBrandDto) {
    return await this.resourceTypeRepository.save(data);
  }
}
