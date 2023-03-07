import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { authUser } from '../entities/auth.entity';
import { LoginDto } from '../dtos/auth.dto';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    private users;
    findAll(): authUser[];
    login(payload: LoginDto): Promise<User>;
}
