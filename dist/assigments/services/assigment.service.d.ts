import { Repository } from 'typeorm';
import { CreateAssigmentDto, UpdateAssigmentDto } from '../dtos/assigment';
import { Assigment } from '../entities/assigment.entity';
export declare class AssigmentService {
    private assigmentRepository;
    constructor(assigmentRepository: Repository<Assigment>);
    findAll(): Promise<Assigment[]>;
    findOne(id: string): Promise<Assigment>;
    findAllByUser(id: string): Promise<Assigment[]>;
    findAllByResource(id: string): Promise<Assigment>;
    create(data: CreateAssigmentDto): Promise<CreateAssigmentDto & Assigment>;
    update(id: string, changes: UpdateAssigmentDto): Promise<Assigment>;
}
