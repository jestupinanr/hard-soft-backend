import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAssigmentDto } from '../dtos/assigment';
import { AssigmentService } from '../services/assigment.service';

@Controller('assigment')
export class AssigmentController {
  constructor(private assigmentService : AssigmentService) {}

  @Get()
  findAll() {
    return this.assigmentService.findAll()
  }

  @Post()
  create(@Body() payload: CreateAssigmentDto) {
    return this.assigmentService.create(payload);
  }
}
