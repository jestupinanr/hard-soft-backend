import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    create(payload: CreateUserDto): Promise<{
        password: string;
        nit: string;
        name: string;
        lastName: string;
        email: string;
        role: import("../../roles/entities/role.entity").Roles;
        phone1: string;
        phone2: string;
        address: string;
        bornDate: string;
    } & import("../entities/user.entity").User>;
}
