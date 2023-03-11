import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncidentStatusResourceDto } from '../dtos/incidents-status';
import { IncidentsStatus } from '../entities/incidentsStatus.entity';

@Injectable()
export class IncidentStatusService {
  constructor(
    @InjectRepository(IncidentsStatus)
    private incidentStatusRepository: Repository<IncidentsStatus>
  ) {}

  findAll():Promise<IncidentsStatus[]> {
    return this.incidentStatusRepository.find();
  }

  async create(data: CreateIncidentStatusResourceDto) {
    try {
      return await this.incidentStatusRepository.save(data);
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }
}
