import { baseEntity } from "src/base.entity";
import { StatusResources } from "src/status-resources/entities/statusResources.entity";
export declare class Hardware extends baseEntity {
    name: string;
    role: StatusResources;
    brand: string;
    password: string;
    model: string;
    type: string;
    observations: string;
    acquisitionDate: Date;
}
