import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HardwareBrandService } from 'src/resources/services/brand.service';
import { CreateResourceBrandDto } from '../dtos/resource-brand';

@Controller('resources/brand')
export class HardwareBrandController {
  constructor(private hardwareBrandService : HardwareBrandService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: string) {
    return this.hardwareBrandService.findAll(query)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateResourceBrandDto) {
    return this.hardwareBrandService.create(payload);
  }
}
