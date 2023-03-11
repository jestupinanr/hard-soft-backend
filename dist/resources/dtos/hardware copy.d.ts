import { StatusResources } from 'src/status-resources/entities/statusResources.entity';
export declare class CreateHardwareDto {
    readonly name: string;
    readonly status: StatusResources;
    readonly brand: string;
    readonly model: string;
    readonly type: string;
    readonly observations: string;
    readonly acquisitionDate: Date;
}
declare const UpdateHardwareDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateHardwareDto>>;
export declare class UpdateHardwareDto extends UpdateHardwareDto_base {
}
export {};
