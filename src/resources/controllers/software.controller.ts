import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { SoftwareService } from '../services/software.service';

@Controller('software')
export class SoftwareController {
  constructor(private softwareService : SoftwareService) {}

  @Get()
  findAll() {
    return this.softwareService.findAll()
  }

  @Post()
  create(@Body() payload: CreateSoftwareDto) {
    return this.softwareService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateSoftwareDto,
  ) {
    return this.softwareService.update(id, payload);
  }


  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.softwareService.remove(id);
  }
}
