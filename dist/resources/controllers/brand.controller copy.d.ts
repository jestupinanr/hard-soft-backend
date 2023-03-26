import { HardwareBrandService } from 'src/resources/services/brand.service';
import { CreateResourceBrandDto } from '../dtos/resource-brand';
export declare class HardwareBrandController {
    private hardwareBrandService;
    constructor(hardwareBrandService: HardwareBrandService);
    findAll(query: string): Promise<import("../entities/status-resources.entity").StatusResources[]>;
    create(payload: CreateResourceBrandDto): Promise<CreateResourceBrandDto & import("../entities/brand.entity").ResourceBrand>;
}
