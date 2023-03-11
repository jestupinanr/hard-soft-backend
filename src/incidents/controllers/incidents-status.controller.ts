import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateIncidentStatusResourceDto } from '../dtos/incidents-status';
import { IncidentStatusService } from '../services/incidents-status.service';

@Controller('incidents-status')
export class IncidentsStatusController {
  constructor(private incidentStatusService : IncidentStatusService) {}

  @Get()
  findAll() {
    return this.incidentStatusService.findAll()
  }

  @Post()
  create(@Body() payload: CreateIncidentStatusResourceDto) {
    return this.incidentStatusService.create(payload);
  }
}
