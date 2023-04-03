import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, Query, StreamableFile, UseGuards } from '@nestjs/common';
import { createReadStream } from 'fs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateIncidentResourceDto, UpdateIncidentDto } from '../dtos/incidents';
import { IncidentsService } from '../services/incidents.service';

@Controller('incidents')
export class IncidentsController {
  constructor(private incidentService : IncidentsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.incidentService.findAll()
  }

  @Get(':id')
  get(@Param('id', ParseUUIDPipe) id: string) {
    return this.incidentService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateIncidentResourceDto) {
    return this.incidentService.create(payload);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateIncidentDto,
  ) {
    return this.incidentService.update(id, payload);
  }

  @UseGuards(JwtAuthGuard)
  @Get('report/incident')
  async getUsersExcel(@Query() query: {dateStart: string, dateEnd: string}) {
    const path = await this.incidentService.createReportExcel(query);
    return new StreamableFile(createReadStream(path));
  }
}
