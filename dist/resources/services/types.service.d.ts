import { Repository } from 'typeorm';
import { CreateResourceBrandDto } from '../dtos/resource-brand';
import { StatusResources } from '../entities/status-resources.entity';
import { ResourceType } from '../entities/type.entity';
export declare class ResourceTypesService {
    private resourceTypeRepository;
    constructor(resourceTypeRepository: Repository<ResourceType>);
    findAll(query: any): Promise<StatusResources[]>;
    findByResource(): Promise<StatusResources[]>;
    create(data: CreateResourceBrandDto): Promise<CreateResourceBrandDto & ResourceType>;
}
