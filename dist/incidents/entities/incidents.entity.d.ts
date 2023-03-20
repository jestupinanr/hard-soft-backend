import { Assigment } from "src/assigments/entities/assigment.entity";
import { baseEntity } from "src/base.entity";
import { IncidentsStatus } from "./incidentsStatus.entity";
export declare class Incidents extends baseEntity {
    title: string;
    assigment: Assigment;
    incidentStatus: IncidentsStatus;
    description: string;
    solution: string;
}
