import { ResourceBrand } from 'src/resources/entities/brand.entity';
import { Repository } from 'typeorm';
import { CreateResourceBrandDto } from '../dtos/resource-brand';
import { StatusResources } from '../entities/status-resources.entity';
export declare class HardwareBrandService {
    private resourceBrandRepository;
    constructor(resourceBrandRepository: Repository<ResourceBrand>);
    findAll(query: any): Promise<StatusResources[]>;
    findByResource(): Promise<StatusResources[]>;
    create(data: CreateResourceBrandDto): Promise<CreateResourceBrandDto & ResourceBrand>;
}
