import { Repository } from 'typeorm';
import { CreateHardwareDto, UpdateHardwareDto } from '../../dtos/hardware';
import { Hardware } from '../../entities/hardware/hardware.entity';
import { Resources } from '../../entities/resources.entity';
import { ResourceService } from '../resource.service';
export declare class HardwareService {
    private hardwareRepository;
    private resourceService;
    constructor(hardwareRepository: Repository<Hardware>, resourceService: ResourceService);
    findAll(): Promise<Hardware[]>;
    create(data: CreateHardwareDto): Promise<{
        hardware: Hardware;
    } & Resources>;
    update(id: string, changes: UpdateHardwareDto): Promise<Hardware>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
