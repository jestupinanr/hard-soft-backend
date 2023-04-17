import { baseEntity } from "src/base.entity";
import { ResourceBrand } from "../brand.entity";
import { StatusResources } from "../status-resources.entity";
import { ResourceType } from "../type.entity";
export declare class Software extends baseEntity {
    name: string;
    status: StatusResources;
    brand: ResourceBrand;
    type: ResourceType;
    licenseNumber: string;
    observations: string;
    acquisitionDate: Date;
    renovationDate: Date;
}
