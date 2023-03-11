import { Repository } from 'typeorm';
import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { Software } from '../entities/software.entity';
import { ResourceService } from './resource.service';
export declare class SoftwareService {
    private softwareRepository;
    private resourceService;
    constructor(softwareRepository: Repository<Software>, resourceService: ResourceService);
    findAll(): Promise<Software[]>;
    create(data: CreateSoftwareDto): Promise<CreateSoftwareDto & Software>;
    update(id: string, changes: UpdateSoftwareDto): Promise<Software>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
