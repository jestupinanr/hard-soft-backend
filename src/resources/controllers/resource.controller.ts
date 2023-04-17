import { Body, Controller, Get, Param, ParseUUIDPipe, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResourceService } from '../services/resource.service';
import { CreateResourceDto } from '../dtos/resource';


@Controller('resources')
export class ResourceController {
  constructor(private ResourceService : ResourceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: string | undefined) {
    return this.ResourceService.findAll(query)
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() payload: CreateResourceDto,
  ) {
    return this.ResourceService.update(id, payload);
  }

  @Get('get-one/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string,) {
    return this.ResourceService.findOne(id)
  }

}
