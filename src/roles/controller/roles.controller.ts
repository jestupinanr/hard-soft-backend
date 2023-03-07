import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRolDto } from '../dtos/roles.dto';
import { RolesService } from '../services/roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Post()
  async create(@Body() payload: CreateRolDto) { 
    return this.rolesService.create(payload);
  }
}
