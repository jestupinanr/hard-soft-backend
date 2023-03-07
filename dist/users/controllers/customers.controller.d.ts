import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomerController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(): any;
    get(id: number): any;
    create(payload: CreateCustomerDto): any;
    update(id: number, payload: UpdateCustomerDto): any;
    remove(id: number): any;
}
