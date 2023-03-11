import { ResourceService } from '../services/resource.service';
export declare class ResourceController {
    private ResourceService;
    constructor(ResourceService: ResourceService);
    findAll(): Promise<import("../entities/resources.entity").Resources[]>;
}
