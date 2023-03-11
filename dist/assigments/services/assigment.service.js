"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssigmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const assigment_entity_1 = require("../entities/assigment.entity");
let AssigmentService = class AssigmentService {
    constructor(assigmentRepository) {
        this.assigmentRepository = assigmentRepository;
    }
    findAll() {
        return this.assigmentRepository.find({
            relations: ['user', 'resource', 'resource.hardware', 'resource.software']
        });
    }
    async create(data) {
        try {
            return await this.assigmentRepository.save(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.detail);
        }
    }
};
AssigmentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(assigment_entity_1.Assigment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AssigmentService);
exports.AssigmentService = AssigmentService;
//# sourceMappingURL=assigment.service.js.map