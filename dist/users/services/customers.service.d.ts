import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomersService {
    private counterId;
    private customers;
    findAll(): any[];
    findOne(id: number): any;
    create(data: CreateCustomerDto): any;
    update(id: number, changes: UpdateCustomerDto): any;
    remove(id: number): boolean;
}
