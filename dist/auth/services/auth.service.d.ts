import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { authUser } from '../entities/auth.entity';
import { LoginDto } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersRepository;
    private jwtAuthService;
    constructor(usersRepository: Repository<User>, jwtAuthService: JwtService);
    private users;
    findAll(): authUser[];
    login(payload: LoginDto): Promise<{
        user: User;
        token: string;
    }>;
}
