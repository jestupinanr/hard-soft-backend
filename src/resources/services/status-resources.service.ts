import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStatusResourceDto } from '../dtos/status-resources';
import { StatusResources } from '../entities/status-resources.entity';

@Injectable()
export class StatusResourcesService {
  constructor(
    @InjectRepository(StatusResources)
    private statusResourceRepository: Repository<StatusResources>
  ) {}

  findAll():Promise<StatusResources[]> {
    return this.statusResourceRepository.find();
  }

  async create(data: CreateStatusResourceDto) {
    return await this.statusResourceRepository.save(data);
  }
}
