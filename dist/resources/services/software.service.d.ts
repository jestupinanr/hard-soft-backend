import { Repository } from 'typeorm';
import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { Software } from '../entities/software/software.entity';
import { ResourceService } from './resource.service';
export declare class SoftwareService {
    private softwareRepository;
    private resourceService;
    constructor(softwareRepository: Repository<Software>, resourceService: ResourceService);
    findAll(): Promise<Software[]>;
    create(data: CreateSoftwareDto): Promise<{
        hardware: import("../entities/hardware/hardware.entity").Hardware;
    } & import("../entities/resources.entity").Resources>;
    update(id: string, changes: UpdateSoftwareDto): Promise<Software>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    createReportExcel(query: {
        dateStart: string;
        dateEnd: string;
    }): Promise<string>;
}
