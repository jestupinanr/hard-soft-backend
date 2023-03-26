import { baseEntity } from "src/base.entity";
import { ResourceBrand } from "../brand.entity";
import { StatusResources } from "../status-resources.entity";
import { ResourceType } from "../type.entity";
export declare class Hardware extends baseEntity {
    name: string;
    status: StatusResources;
    brand: ResourceBrand;
    type: ResourceType;
    model: string;
    observations: string;
    acquisitionDate: Date;
}
