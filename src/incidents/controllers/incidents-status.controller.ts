import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateIncidentStatusResourceDto } from '../dtos/incidents-status';
import { IncidentStatusService } from '../services/incidents-status.service';

@Controller('incidents/status')
export class IncidentsStatusController {
  constructor(private incidentStatusService : IncidentStatusService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.incidentStatusService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateIncidentStatusResourceDto) {
    return this.incidentStatusService.create(payload);
  }
}
