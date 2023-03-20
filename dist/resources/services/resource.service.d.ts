import { Repository } from 'typeorm';
import { Hardware } from '../entities/hardware.entity';
import { Resources } from '../entities/resources.entity';
import { Software } from '../entities/software.entity';
export declare class ResourceService {
    private ResourceRepository;
    constructor(ResourceRepository: Repository<Resources>);
    findAll(): Promise<Resources[]>;
    findOne(id: string): Promise<Resources>;
    create(hardware?: Hardware, software?: Software): Promise<{
        hardware: Hardware;
    } & Resources>;
}
