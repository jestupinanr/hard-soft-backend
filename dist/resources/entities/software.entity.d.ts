import { baseEntity } from "src/base.entity";
import { StatusResources } from "./status-resources.entity";
export declare class Software extends baseEntity {
    name: string;
    status: StatusResources;
    brand: string;
    licenseNumber: string;
    type: string;
    observations: string;
    acquisitionDate: Date;
}
