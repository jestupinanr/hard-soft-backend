import { CreateHardwareDto, UpdateHardwareDto } from '../../dtos/hardware';
import { HardwareService } from '../../services/hardware/hardware.service';
export declare class HardwareController {
    private hardwareService;
    constructor(hardwareService: HardwareService);
    findAll(): Promise<import("../../entities/hardware/hardware.entity").Hardware[]>;
    create(payload: CreateHardwareDto): Promise<{
        hardware: import("../../entities/hardware/hardware.entity").Hardware;
    } & import("../../entities/resources.entity").Resources>;
    update(id: string, payload: UpdateHardwareDto): Promise<import("../../entities/hardware/hardware.entity").Hardware>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
