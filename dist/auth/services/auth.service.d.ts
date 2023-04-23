import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto, getTokenRecoveryPassword } from '../dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mails/services/mail.service';
export declare class AuthService {
    private usersRepository;
    private readonly jwtAuthService;
    private mailService;
    constructor(usersRepository: Repository<User>, jwtAuthService: JwtService, mailService: MailService);
    findAll(): Promise<User[]>;
    login(payload: LoginDto): Promise<{
        user: User;
        token: string;
    }>;
    getTokenRecoveryPassword(payload: getTokenRecoveryPassword): Promise<void>;
    savePassword(payload: getTokenRecoveryPassword, token: string): Promise<import("typeorm").UpdateResult>;
}
