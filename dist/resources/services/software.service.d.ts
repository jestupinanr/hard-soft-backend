import { Repository } from 'typeorm';
import { CreateSoftwareDto, UpdateSoftwareDto } from '../dtos/software';
import { Software } from '../entities/software.entity';
export declare class SoftwareService {
    private softwareRepository;
    constructor(softwareRepository: Repository<Software>);
    findAll(): Promise<Software[]>;
    create(data: CreateSoftwareDto): Promise<CreateSoftwareDto & Software>;
    update(id: string, changes: UpdateSoftwareDto): Promise<Software>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
