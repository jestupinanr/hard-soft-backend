import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from './../../products/services/products.service';
export declare class UsersService {
    private productsService;
    constructor(productsService: ProductsService);
    private counterId;
    private users;
    findAll(): User[];
    findOne(id: number): User;
    create(data: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, changes: UpdateUserDto): User;
    remove(id: number): boolean;
}
