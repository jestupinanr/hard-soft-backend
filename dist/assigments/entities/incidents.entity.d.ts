import { baseEntity } from "src/base.entity";
import { Resources } from "src/resources/entities/resources.entity";
import { User } from "src/users/entities/user.entity";
export declare class Assigments extends baseEntity {
    user: User;
    resource: Resources;
    description: string;
}
