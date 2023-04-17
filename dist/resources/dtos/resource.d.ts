import { Hardware } from '../entities/hardware/hardware.entity';
import { Software } from '../entities/software/software.entity';
export declare class CreateResourceDto {
    hardware: Hardware;
    software: Software;
    isAssigned: string;
}
declare const UpdateHardwareDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateResourceDto>>;
export declare class UpdateHardwareDto extends UpdateHardwareDto_base {
}
export {};
