import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { SoftwareService } from '../services/software.service';
export declare class SoftwareController {
    private softwareService;
    constructor(softwareService: SoftwareService);
    findAll(): Promise<import("../entities/software.entity").Software[]>;
    create(payload: CreateSoftwareDto): Promise<CreateSoftwareDto & import("../entities/software.entity").Software>;
    update(id: string, payload: UpdateSoftwareDto): Promise<import("../entities/software.entity").Software>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
