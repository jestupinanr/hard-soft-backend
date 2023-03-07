import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { ProductsService } from './../../products/services/products.service';
export declare class UsersService {
    private usersRepository;
    private productsService;
    constructor(usersRepository: Repository<User>, productsService: ProductsService);
    private counterId;
    findAll(): Promise<User[]>;
    create(data: CreateUserDto): Promise<CreateUserDto & User>;
}
