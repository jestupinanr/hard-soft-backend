import { CreateRolDto } from '../dtos/roles.dto';
import { RolesService } from '../services/roles.service';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    findAll(): Promise<import("../entities/role.entity").Roles[]>;
    create(payload: CreateRolDto): Promise<CreateRolDto & import("../entities/role.entity").Roles>;
}
