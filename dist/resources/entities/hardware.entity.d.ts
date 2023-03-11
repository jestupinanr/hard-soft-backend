import { baseEntity } from "src/base.entity";
import { StatusResources } from "src/status-resources/entities/statusResources.entity";
export declare class Hardware extends baseEntity {
    name: string;
    status: StatusResources;
    brand: string;
    model: string;
    type: string;
    observations: string;
    acquisitionDate: Date;
}
