import { baseEntity } from "src/base.entity";
import { Roles } from "src/roles/entities/role.entity";
export declare class User extends baseEntity {
    nit: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone1: string;
    phone2: string;
    address: string;
    bornDate: Date;
    role: Roles;
}
