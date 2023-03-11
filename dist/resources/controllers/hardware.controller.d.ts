import { CreateHardwareDto, UpdateHardwareDto } from '../dtos/hardware';
import { HardwareService } from '../services/hardware.service';
export declare class HardwareController {
    private hardwareService;
    constructor(hardwareService: HardwareService);
    findAll(): Promise<import("../entities/hardware.entity").Hardware[]>;
    create(payload: CreateHardwareDto): Promise<CreateHardwareDto & import("../entities/hardware.entity").Hardware>;
    update(id: string, payload: UpdateHardwareDto): Promise<import("../entities/hardware.entity").Hardware>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
