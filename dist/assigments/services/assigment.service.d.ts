import { Repository } from 'typeorm';
import { CreateAssigmentDto } from '../dtos/assigment';
import { Assigment } from '../entities/assigment.entity';
export declare class AssigmentService {
    private assigmentRepository;
    constructor(assigmentRepository: Repository<Assigment>);
    findAll(): Promise<Assigment[]>;
    create(data: CreateAssigmentDto): Promise<CreateAssigmentDto & Assigment>;
}
