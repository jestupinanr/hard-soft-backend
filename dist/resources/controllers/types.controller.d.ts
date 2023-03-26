import { CreateResourceBrandDto } from '../dtos/resource-brand';
import { ResourceTypesService } from '../services/types.service';
export declare class ResourceTypeController {
    private resourceTypesService;
    constructor(resourceTypesService: ResourceTypesService);
    findAll(query: string): Promise<import("../entities/status-resources.entity").StatusResources[]>;
    create(payload: CreateResourceBrandDto): Promise<CreateResourceBrandDto & import("../entities/type.entity").ResourceType>;
}
