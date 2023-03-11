import { StatusResources } from 'src/status-resources/entities/statusResources.entity';
export declare class CreateSoftwareDto {
    readonly name: string;
    readonly status: StatusResources;
    readonly brand: string;
    readonly licenseNumber: string;
    readonly type: string;
    readonly observations: string;
    readonly acquisitionDate: Date;
}
declare const UpdateSoftwareDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSoftwareDto>>;
export declare class UpdateSoftwareDto extends UpdateSoftwareDto_base {
}
export {};
