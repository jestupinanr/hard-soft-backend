import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HardwareController } from './controllers/hardware.controller';
import { SoftwareController } from './controllers/software.controller';
import { Hardware } from './entities/hardware.entity';
import { Software } from './entities/software.entity';
import { HardwareService } from './services/hardware.service';
import { SoftwareService } from './services/software.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hardware, Software])],
  controllers: [HardwareController, SoftwareController],
  providers: [HardwareService, SoftwareService]
})
export class ResourcesModule {}
