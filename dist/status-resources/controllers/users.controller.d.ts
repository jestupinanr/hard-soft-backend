import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): any;
    create(payload: CreateUserDto): any;
}
