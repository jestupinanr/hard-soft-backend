import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncidentResourceDto } from '../dtos/incidents';
import { Incidents } from '../entities/incidents.entity';

@Injectable()
export class IncidentsService {
  constructor(
    @InjectRepository(Incidents)
    private incidentsRepository: Repository<Incidents>
  ) {}

  findAll():Promise<Incidents[]> {
    return this.incidentsRepository.find();
  }

  async create(data: CreateIncidentResourceDto) {
    try {
      return await this.incidentsRepository.save(data);
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }
}
