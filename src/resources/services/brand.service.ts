import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceBrand } from 'src/resources/entities/brand.entity';
import { Repository } from 'typeorm';
import { CreateResourceBrandDto } from '../dtos/resource-brand';
import { StatusResources } from '../entities/status-resources.entity';

@Injectable()
export class HardwareBrandService {
  constructor(
    @InjectRepository(ResourceBrand)
    private resourceBrandRepository: Repository<ResourceBrand>
  ) {}

  findAll(query: any):Promise<StatusResources[]> {
    const { resource } = query;
    return this.resourceBrandRepository.find({
      where: {
        ...(resource) && {
          resource
        }
      }
    });
  }

  findByResource():Promise<StatusResources[]> {
    return this.resourceBrandRepository.find();
  }

  async create(data: CreateResourceBrandDto) {
    return await this.resourceBrandRepository.save(data);
  }
}
