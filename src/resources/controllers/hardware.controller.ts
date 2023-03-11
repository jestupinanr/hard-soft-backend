import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateHardwareDto, UpdateHardwareDto } from '../dtos/hardware';
import { HardwareService } from '../services/hardware.service';

@Controller('hardware')
export class HardwareController {
  constructor(private hardwareService : HardwareService) {}

  @Get()
  findAll() {
    return this.hardwareService.findAll()
  }

  @Post()
  create(@Body() payload: CreateHardwareDto) {
    return this.hardwareService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateHardwareDto,
  ) {
    return this.hardwareService.update(id, payload);
  }


  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.hardwareService.remove(id);
  }
}
