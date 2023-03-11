import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentsStatusController } from './controllers/incidents-status.controller';
import { IncidentsController } from './controllers/incidents.controller';
import { Incidents } from './entities/incidents.entity';
import { IncidentsStatus } from './entities/incidentsStatus.entity';
import { IncidentStatusService } from './services/incidents-status.service';
import { IncidentsService } from './services/incidents.service';

@Module({
  imports: [TypeOrmModule.forFeature([IncidentsStatus, Incidents])],
  providers: [IncidentStatusService, IncidentsService],
  controllers: [IncidentsStatusController, IncidentsController],
})
export class IncidentsModule {}
