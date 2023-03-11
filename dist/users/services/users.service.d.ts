import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    create(data: CreateUserDto): Promise<{
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
    } & User>;
}
