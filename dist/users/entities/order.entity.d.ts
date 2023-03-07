import { User } from './user.entity';
import { Product } from './../../products/entities/product.entity';
export declare class Order {
    date: Date;
    user: User;
    products: Product[];
}
