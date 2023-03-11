import { Controller, Get } from '@nestjs/common';
import { ResourceService } from '../services/resource.service';


@Controller('resources')
export class ResourceController {
  constructor(private ResourceService : ResourceService) {}

  @Get()
  findAll() {
    return this.ResourceService.findAll()
  }
}
