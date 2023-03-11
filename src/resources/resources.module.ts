import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HardwareController } from './controllers/hardware.controller';
import { ResourceController } from './controllers/resource.controller';
import { SoftwareController } from './controllers/software.controller';
import { StatusResourcesController } from './controllers/status-resources.controller';
import { Hardware } from './entities/hardware.entity';
import { Resources } from './entities/resources.entity';
import { Software } from './entities/software.entity';
import { StatusResources } from './entities/status-resources.entity';
import { HardwareService } from './services/hardware.service';
import { ResourceService } from './services/resource.service';
import { SoftwareService } from './services/software.service';
import { StatusResourcesService } from './services/status-resources.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hardware, Software, StatusResources, Resources])],
  controllers: [HardwareController, SoftwareController, StatusResourcesController, ResourceController],
  providers: [HardwareService, SoftwareService, StatusResourcesService, ResourceService]
})
export class ResourcesModule {}
