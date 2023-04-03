import { StreamableFile } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    get(id: string): Promise<import("../entities/user.entity").User>;
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
    update(id: string, payload: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    getUsersExcel(query: {
        dateStart: string;
        dateEnd: string;
    }): Promise<StreamableFile>;
}
