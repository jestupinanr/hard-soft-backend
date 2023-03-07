import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './entities/role.entity';
import { RolesService } from './services/roles.service';
import { RolesController } from './controller/roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Roles])],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
