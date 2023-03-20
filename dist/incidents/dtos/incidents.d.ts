import { IncidentsStatus } from '../entities/incidentsStatus.entity';
import { Assigment } from 'src/assigments/entities/assigment.entity';
export declare class CreateIncidentResourceDto {
    title: string;
    assigment: Assigment;
    incidentStatus: IncidentsStatus;
    description: string;
    solution: string;
}
declare const UpdateIncidentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateIncidentResourceDto>>;
export declare class UpdateIncidentDto extends UpdateIncidentDto_base {
}
export {};
