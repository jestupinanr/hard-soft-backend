import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateStatusResourceDto } from '../dtos/status-resources';
import { StatusResourcesService } from '../services/status-resources.service';


@Controller('resources/status')
export class StatusResourcesController {
  constructor(private statusResourcesService : StatusResourcesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.statusResourcesService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateStatusResourceDto) {
    return this.statusResourcesService.create(payload);
  }
}
