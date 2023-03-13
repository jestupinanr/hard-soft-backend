import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateIncidentResourceDto } from '../dtos/incidents';
import { IncidentsService } from '../services/incidents.service';

@Controller('incidents')
export class IncidentsController {
  constructor(private incidentService : IncidentsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.incidentService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateIncidentResourceDto) {
    return this.incidentService.create(payload);
  }
}
