import { baseEntity } from "src/base.entity";
import { Resources } from "src/resources/entities/resources.entity";
import { User } from "src/users/entities/user.entity";
import { IncidentsStatus } from "./incidentsStatus.entity";
export declare class Incidents extends baseEntity {
    user: User;
    resource: Resources;
    incidentStatus: IncidentsStatus;
    description: string;
}
