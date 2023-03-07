import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    create(payload: CreateUserDto): Promise<CreateUserDto & import("../entities/user.entity").User>;
}
