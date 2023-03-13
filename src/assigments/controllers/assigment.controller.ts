import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateAssigmentDto } from '../dtos/assigment';
import { AssigmentService } from '../services/assigment.service';

@Controller('assigment')
export class AssigmentController {
  constructor(private assigmentService : AssigmentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.assigmentService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateAssigmentDto) {
    return this.assigmentService.create(payload);
  }
}
