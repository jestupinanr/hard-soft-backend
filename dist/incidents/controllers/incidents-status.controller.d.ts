import { CreateIncidentStatusResourceDto } from '../dtos/incidents-status';
import { IncidentStatusService } from '../services/incidents-status.service';
export declare class IncidentsStatusController {
    private incidentStatusService;
    constructor(incidentStatusService: IncidentStatusService);
    findAll(): Promise<import("../entities/incidentsStatus.entity").IncidentsStatus[]>;
    create(payload: CreateIncidentStatusResourceDto): Promise<CreateIncidentStatusResourceDto & import("../entities/incidentsStatus.entity").IncidentsStatus>;
}
