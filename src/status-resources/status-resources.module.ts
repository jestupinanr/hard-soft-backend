import { Module } from '@nestjs/common';
import { StatusResourcesService } from './services/status-resources.service';
import { StatusResourcesController } from './controllers/status-resources.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusResources } from './entities/statusResources.entity';


@Module({
  imports: [TypeOrmModule.forFeature([StatusResources])],
  providers: [StatusResourcesService],
  controllers: [StatusResourcesController]
})
export class StatusResourcesModule {}
