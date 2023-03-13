import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dtos/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    findAll(): import("../entities/auth.entity").authUser[];
    login(payload: LoginDto): Promise<{
        user: import("../../users/entities/user.entity").User;
        token: string;
    }>;
}
