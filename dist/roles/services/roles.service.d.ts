import { Repository } from 'typeorm';
import { CreateRolDto } from '../dtos/roles.dto';
import { Roles } from '../entities/role.entity';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Roles>);
    findAll(): Promise<Roles[]>;
    create(payload: CreateRolDto): Promise<CreateRolDto & Roles>;
}
