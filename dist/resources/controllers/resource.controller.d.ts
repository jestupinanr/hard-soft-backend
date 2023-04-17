import { ResourceService } from '../services/resource.service';
import { CreateResourceDto } from '../dtos/resource';
export declare class ResourceController {
    private ResourceService;
    constructor(ResourceService: ResourceService);
    findAll(query: string | undefined): Promise<import("../entities/resources.entity").Resources[]>;
    update(id: string, payload: CreateResourceDto): Promise<import("../entities/resources.entity").Resources>;
    findOne(id: string): Promise<import("../entities/resources.entity").Resources>;
}
