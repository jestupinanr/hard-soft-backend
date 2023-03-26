import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { SoftwareService } from '../services/software.service';
export declare class SoftwareController {
    private softwareService;
    constructor(softwareService: SoftwareService);
    findAll(): Promise<import("../entities/software/software.entity").Software[]>;
    create(payload: CreateSoftwareDto): Promise<{
        hardware: import("../entities/hardware/hardware.entity").Hardware;
    } & import("../entities/resources.entity").Resources>;
    update(id: string, payload: UpdateSoftwareDto): Promise<import("../entities/software/software.entity").Software>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
