import { CreateIncidentResourceDto } from '../dtos/incidents';
import { IncidentsService } from '../services/incidents.service';
export declare class IncidentsController {
    private incidentService;
    constructor(incidentService: IncidentsService);
    findAll(): Promise<import("../entities/incidents.entity").Incidents[]>;
    get(id: string): Promise<import("../entities/incidents.entity").Incidents>;
    create(payload: CreateIncidentResourceDto): Promise<CreateIncidentResourceDto & import("../entities/incidents.entity").Incidents>;
}
