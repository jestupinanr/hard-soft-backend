import { CreateStatusResourceDto } from '../dtos/status-resources';
import { StatusResourcesService } from '../services/status-resources.service';
export declare class StatusResourcesController {
    private statusResourcesService;
    constructor(statusResourcesService: StatusResourcesService);
    findAll(): Promise<import("../entities/statusResources.entity").StatusResources[]>;
    create(payload: CreateStatusResourceDto): Promise<CreateStatusResourceDto & import("../entities/statusResources.entity").StatusResources>;
}
