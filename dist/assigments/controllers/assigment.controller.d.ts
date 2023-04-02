import { CreateAssigmentDto, UpdateAssigmentDto } from '../dtos/assigment';
import { AssigmentService } from '../services/assigment.service';
export declare class AssigmentController {
    private assigmentService;
    constructor(assigmentService: AssigmentService);
    findAll(): Promise<import("../entities/assigment.entity").Assigment[]>;
    get(id: string): Promise<import("../entities/assigment.entity").Assigment>;
    getByUser(id: string): Promise<import("../entities/assigment.entity").Assigment[]>;
    getByResource(id: string): Promise<import("../entities/assigment.entity").Assigment>;
    create(payload: CreateAssigmentDto): Promise<CreateAssigmentDto & import("../entities/assigment.entity").Assigment>;
    update(id: string, payload: UpdateAssigmentDto): Promise<import("../entities/assigment.entity").Assigment>;
}
