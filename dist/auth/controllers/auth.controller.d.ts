import { AuthService } from '../services/auth.service';
import { LoginDto, getTokenRecoveryPassword } from '../dtos/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    findAll(): Promise<import("../../users/entities/user.entity").User[]>;
    login(payload: LoginDto): Promise<{
        user: import("../../users/entities/user.entity").User;
        token: string;
    }>;
    getTokenRecovery(payload: getTokenRecoveryPassword): Promise<void>;
    savePassword(token: string, payload: getTokenRecoveryPassword): Promise<import("typeorm").UpdateResult>;
}
