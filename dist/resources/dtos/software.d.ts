import { StatusResources } from '../entities/status-resources.entity';
import { ResourceBrand } from '../entities/brand.entity';
import { ResourceType } from '../entities/type.entity';
export declare class CreateSoftwareDto {
    readonly name: string;
    readonly status: StatusResources;
    readonly brand: ResourceBrand;
    readonly licenseNumber: string;
    readonly type: ResourceType;
    readonly observations: string;
    readonly acquisitionDate: Date;
    readonly renovationDate: Date;
}
declare const UpdateSoftwareDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSoftwareDto>>;
export declare class UpdateSoftwareDto extends UpdateSoftwareDto_base {
}
export {};
