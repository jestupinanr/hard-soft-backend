import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { ProductsService } from './../../products/services/products.service';
export declare class UsersService {
    private productsService;
    constructor(productsService: ProductsService);
    private counterId;
    private users;
    findAll(): any[];
    findOne(id: number): any;
    create(data: CreateUserDto): {
        email: string;
        password: string;
        role: string;
        id: number;
    };
    update(id: number, changes: UpdateUserDto): any;
    remove(id: number): boolean;
}
