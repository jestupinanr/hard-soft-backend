import { Roles } from 'src/roles/entities/role.entity';
export declare class CreateUserDto {
    readonly nit: string;
    readonly name: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly role: Roles;
    readonly phone1: string;
    readonly phone2: string;
    readonly address: string;
    readonly bornDate: string;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
