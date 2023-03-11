import { Repository } from 'typeorm';
import { CreateIncidentResourceDto } from '../dtos/incidents';
import { Incidents } from '../entities/incidents.entity';
export declare class IncidentsService {
    private incidentsRepository;
    constructor(incidentsRepository: Repository<Incidents>);
    findAll(): Promise<Incidents[]>;
    create(data: CreateIncidentResourceDto): Promise<CreateIncidentResourceDto & Incidents>;
}
