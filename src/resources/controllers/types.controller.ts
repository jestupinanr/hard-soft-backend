import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateResourceBrandDto } from '../dtos/resource-brand';
import { ResourceTypesService } from '../services/types.service';

@Controller('resources/type')
export class ResourceTypeController {
  constructor(private resourceTypesService : ResourceTypesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: string) {
    return this.resourceTypesService.findAll(query)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateResourceBrandDto) {
    return this.resourceTypesService.create(payload);
  }
}
