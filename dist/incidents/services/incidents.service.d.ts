import { Repository } from 'typeorm';
import { CreateIncidentResourceDto, UpdateIncidentDto } from '../dtos/incidents';
import { Incidents } from '../entities/incidents.entity';
export declare class IncidentsService {
    private incidentsRepository;
    constructor(incidentsRepository: Repository<Incidents>);
    findAll(): Promise<Incidents[]>;
    findOne(id: string): Promise<Incidents>;
    create(data: CreateIncidentResourceDto): Promise<CreateIncidentResourceDto & Incidents>;
    update(id: string, changes: UpdateIncidentDto): Promise<Incidents>;
    createReportExcel(query: {
        dateStart: string;
        dateEnd: string;
    }): Promise<string>;
}
