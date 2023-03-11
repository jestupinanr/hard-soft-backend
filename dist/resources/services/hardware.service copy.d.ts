import { Repository } from 'typeorm';
import { CreateHardwareDto, UpdateHardwareDto } from '../dtos/hardware';
import { Hardware } from '../entities/hardware.entity';
export declare class HardwareService {
    private hardwareRepository;
    constructor(hardwareRepository: Repository<Hardware>);
    findAll(): Promise<Hardware[]>;
    create(data: CreateHardwareDto): Promise<CreateHardwareDto & Hardware>;
    update(id: string, changes: UpdateHardwareDto): Promise<Hardware>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
