import { User } from 'src/users/entities/user.entity';
import { Resources } from 'src/resources/entities/resources.entity';
export declare class CreateAssigmentDto {
    readonly user: User;
    readonly resource: Resources;
    readonly description: string;
}
declare const UpdateAssigmentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAssigmentDto>>;
export declare class UpdateAssigmentDto extends UpdateAssigmentDto_base {
}
export {};
