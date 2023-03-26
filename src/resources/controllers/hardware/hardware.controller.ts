import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateHardwareDto, UpdateHardwareDto } from '../../dtos/hardware';
import { HardwareService } from '../../services/hardware/hardware.service';

@Controller('resources/hardware')
export class HardwareController {
  constructor(private hardwareService : HardwareService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.hardwareService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: CreateHardwareDto) {
    return this.hardwareService.create(payload);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: UpdateHardwareDto,
  ) {
    return this.hardwareService.update(id, payload);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.hardwareService.remove(id);
  }
}
