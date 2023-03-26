import { CreateHardwareBrandDto } from 'src/resources/dtos/hardware';
import { HardwareBrand } from 'src/resources/entities/brand.entity';
import { Repository } from 'typeorm';
import { StatusResources } from '../../entities/status-resources.entity';
export declare class HardwareBrandService {
    private hardwareBrandRepository;
    constructor(hardwareBrandRepository: Repository<HardwareBrand>);
    findAll(): Promise<StatusResources[]>;
    create(data: CreateHardwareBrandDto): Promise<CreateHardwareBrandDto & HardwareBrand>;
}
