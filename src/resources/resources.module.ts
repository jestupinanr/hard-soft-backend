import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HardwareBrandController } from './controllers/brand.controller';
import { HardwareController } from './controllers/hardware/hardware.controller';
import { ResourceController } from './controllers/resource.controller';
import { SoftwareController } from './controllers/software.controller';
import { StatusResourcesController } from './controllers/status-resources.controller';
import { ResourceTypeController } from './controllers/types.controller';
import { ResourceBrand } from './entities/brand.entity';
import { Hardware } from './entities/hardware/hardware.entity';
import { Resources } from './entities/resources.entity';
import { Software } from './entities/software/software.entity';
import { StatusResources } from './entities/status-resources.entity';
import { ResourceType } from './entities/type.entity';
import { HardwareBrandService } from './services/brand.service';
import { HardwareService } from './services/hardware/hardware.service';
import { ResourceService } from './services/resource.service';
import { SoftwareService } from './services/software.service';
import { StatusResourcesService } from './services/status-resources.service';
import { ResourceTypesService } from './services/types.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hardware, Software, StatusResources, Resources, ResourceBrand, ResourceType])],
  controllers: [HardwareController, SoftwareController, StatusResourcesController, ResourceController, HardwareBrandController, ResourceTypeController],
  providers: [HardwareService, SoftwareService, StatusResourcesService, ResourceService, HardwareBrandService, ResourceTypesService]
})
export class ResourcesModule {}
