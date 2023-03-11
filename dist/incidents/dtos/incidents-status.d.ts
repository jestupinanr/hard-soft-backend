export declare class CreateIncidentStatusResourceDto {
    readonly name: string;
}
declare const UpdateIncidentStatusDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateIncidentStatusResourceDto>>;
export declare class UpdateIncidentStatusDto extends UpdateIncidentStatusDto_base {
}
export {};
