export declare class CreateResourceBrandDto {
    readonly name: string;
    readonly resource: string;
}
declare const UpdateResorceBrandDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateResourceBrandDto>>;
export declare class UpdateResorceBrandDto extends UpdateResorceBrandDto_base {
}
export {};
