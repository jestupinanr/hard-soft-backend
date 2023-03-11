import { baseEntity } from "src/base.entity";
import { Hardware } from "./hardware.entity";
import { Software } from "./software.entity";
export declare class Resources extends baseEntity {
    hardware: Hardware;
    software: Software;
    isAssigned: string;
}
