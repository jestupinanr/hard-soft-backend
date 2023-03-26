import { CreateHardwareBrandDto } from 'src/resources/dtos/hardware';
import { HardwareBrandService } from 'src/resources/services/hardware/hardware-brand.service';
export declare class HardwareBrandController {
    private hardwareBrandService;
    constructor(hardwareBrandService: HardwareBrandService);
    findAll(): Promise<import("../../entities/status-resources.entity").StatusResources[]>;
    create(payload: CreateHardwareBrandDto): Promise<CreateHardwareBrandDto & import("../../entities/hardware/hardware-brand.entity").HardwareBrand>;
}
