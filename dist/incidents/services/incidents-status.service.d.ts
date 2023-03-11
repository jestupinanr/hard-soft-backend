import { Repository } from 'typeorm';
import { CreateIncidentStatusResourceDto } from '../dtos/incidents-status';
import { IncidentsStatus } from '../entities/incidentsStatus.entity';
export declare class IncidentStatusService {
    private incidentStatusRepository;
    constructor(incidentStatusRepository: Repository<IncidentsStatus>);
    findAll(): Promise<IncidentsStatus[]>;
    create(data: CreateIncidentStatusResourceDto): Promise<CreateIncidentStatusResourceDto & IncidentsStatus>;
}
