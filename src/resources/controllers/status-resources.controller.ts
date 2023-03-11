import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStatusResourceDto } from '../dtos/status-resources';
import { StatusResourcesService } from '../services/status-resources.service';


@Controller('status-resources')
export class StatusResourcesController {
  constructor(private statusResourcesService : StatusResourcesService) {}

  @Get()
  findAll() {
    return this.statusResourcesService.findAll()
  }

  @Post()
  create(@Body() payload: CreateStatusResourceDto) {
    return this.statusResourcesService.create(payload);
  }
}
