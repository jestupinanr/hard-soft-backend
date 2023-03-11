import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateIncidentResourceDto } from '../dtos/incidents';
import { IncidentsService } from '../services/incidents.service';

@Controller('incidents')
export class IncidentsController {
  constructor(private incidentService : IncidentsService) {}

  @Get()
  findAll() {
    return this.incidentService.findAll()
  }

  @Post()
  create(@Body() payload: CreateIncidentResourceDto) {
    return this.incidentService.create(payload);
  }
}
