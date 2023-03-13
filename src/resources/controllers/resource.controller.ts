import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResourceService } from '../services/resource.service';


@Controller('resources')
export class ResourceController {
  constructor(private ResourceService : ResourceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.ResourceService.findAll()
  }
}
