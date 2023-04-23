import { Repository } from 'typeorm';
import { Hardware } from '../entities/hardware/hardware.entity';
import { Resources } from '../entities/resources.entity';
import { Software } from '../entities/software/software.entity';
import { CreateResourceDto } from '../dtos/resource';
export declare class ResourceService {
    private ResourceRepository;
    constructor(ResourceRepository: Repository<Resources>);
    findAll(query: {
        active: boolean;
    }): Promise<Resources[]>;
    findOne(id: string): Promise<Resources>;
    update(id: string, changes: CreateResourceDto): Promise<Resources>;
    create(hardware?: Hardware, software?: Software): Promise<{
        hardware: Hardware;
    } & Resources>;
}
