import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, StreamableFile, UseGuards } from '@nestjs/common';
import { createReadStream } from 'fs';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { SoftwareService } from '../services/software.service';

@Controller('resources/software')
export class SoftwareController {
  constructor(private softwareService : SoftwareService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.softwareService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateSoftwareDto) {
    return this.softwareService.create(payload);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateSoftwareDto,
  ) {
    return this.softwareService.update(id, payload);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.softwareService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('report/software')
  async getUsersExcel(@Query() query: {dateStart: string, dateEnd: string}) {
    const path = await this.softwareService.createReportExcel(query);
    return new StreamableFile(createReadStream(path));
  }
}
