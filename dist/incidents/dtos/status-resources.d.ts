export declare class CreateStatusResourceDto {
    readonly name: string;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStatusResourceDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
