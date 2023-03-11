import { Repository } from 'typeorm';
import { CreateStatusResourceDto } from '../dtos/status-resources';
import { StatusResources } from '../entities/statusResources.entity';
export declare class StatusResourcesService {
    private statusResourceRepository;
    constructor(statusResourceRepository: Repository<StatusResources>);
    findAll(): Promise<StatusResources[]>;
    create(data: CreateStatusResourceDto): Promise<any>;
}
