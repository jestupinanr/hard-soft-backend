export declare class CreateRolDto {
    readonly name: string;
}
declare const UpdateRolDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateRolDto>>;
export declare class UpdateRolDto extends UpdateRolDto_base {
}
export {};
