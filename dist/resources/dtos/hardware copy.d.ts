import { StatusResources } from '../entities/status-resources.entity';
import { ResourceType } from '../entities/type.entity';
import { ResourceBrand } from '../entities/brand.entity';
export declare class CreateHardwareDto {
    readonly name: string;
    readonly status: StatusResources;
    readonly brand: ResourceBrand;
    readonly model: string;
    readonly type: ResourceType;
    readonly observations: string;
    readonly acquisitionDate: Date;
    readonly renovationDate: Date;
}
declare const UpdateHardwareDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateHardwareDto>>;
export declare class UpdateHardwareDto extends UpdateHardwareDto_base {
}
export {};
