import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncidentResourceDto, UpdateIncidentDto } from '../dtos/incidents';
import { Incidents } from '../entities/incidents.entity';

@Injectable()
export class IncidentsService {
  constructor(
    @InjectRepository(Incidents)
    private incidentsRepository: Repository<Incidents>
  ) {}

  findAll():Promise<Incidents[]> {
    return this.incidentsRepository.find({
      relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
      'assigment.resource.software.brand', 'assigment.resource.software.type' ]
    });
  }

  findOne(id: string) {
    const assigment = this.incidentsRepository.findOne({
      where: {
        id
      },
      relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
      'assigment.resource.software.brand', 'assigment.resource.software.type' ]
    });
    if (!assigment) {
      throw new NotFoundException(`Incident #${id} not found`);
    }
    return assigment;
  }

  async create(data: CreateIncidentResourceDto) {
    try {
      return await this.incidentsRepository.save(data);
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }

  async update(id: string, changes: UpdateIncidentDto) {
    const incident = this.incidentsRepository.findOne({
      where: {
        id
      }
    });

    if (!incident)
      throw new NotFoundException(`Incident #${id} not found`);
    
    // Update
    await this.incidentsRepository.update(id,
      {
        ...changes
      });

    return this.incidentsRepository.findOne({
      where: {
        id
      },
      relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
      'assigment.resource.software.brand', 'assigment.resource.software.type' ]
    });
  }
}
