import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, Query, StreamableFile, UseGuards } from '@nestjs/common';
import { createReadStream } from 'fs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateAssigmentDto, UpdateAssigmentDto } from '../dtos/assigment';
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
  @Get(':id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.assigmentService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user/:id')
  getByUser(@Param('id', ParseUUIDPipe) id: string) {
    return this.assigmentService.findAllByUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/resource/:id')
  getByResource(@Param('id', ParseUUIDPipe) id: string) {
    return this.assigmentService.findAllByResource(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateAssigmentDto) {
    return this.assigmentService.create(payload);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateAssigmentDto,
  ) {
    return this.assigmentService.update(id, payload);
  }

  @UseGuards(JwtAuthGuard)
  @Get('report/assigment')
  async getUsersExcel(@Query() query: {dateStart: string, dateEnd: string}) {
    const path = await this.assigmentService.createReportExcel(query);
    return new StreamableFile(createReadStream(path));
  }
}
