import { User } from 'src/users/entities/user.entity';
import { IncidentsStatus } from '../entities/incidentsStatus.entity';
import { Resources } from 'src/resources/entities/resources.entity';
export declare class CreateIncidentResourceDto {
    user: User;
    resource: Resources;
    incidentStatus: IncidentsStatus;
    description: string;
}
declare const UpdateIncidentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateIncidentResourceDto>>;
export declare class UpdateIncidentDto extends UpdateIncidentDto_base {
}
export {};
