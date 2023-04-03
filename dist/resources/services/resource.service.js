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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const resources_entity_1 = require("../entities/resources.entity");
let ResourceService = class ResourceService {
    constructor(ResourceRepository) {
        this.ResourceRepository = ResourceRepository;
    }
    findAll() {
        return this.ResourceRepository.find({
            relations: ['hardware', 'hardware.status', 'hardware.brand', 'hardware.type', 'software', 'software.status', 'software.brand', 'software.type']
        });
    }
    async findOne(id) {
        const resource = await this.ResourceRepository.findOne({
            where: {
                id
            },
            relations: ['hardware', 'hardware.status', 'hardware.brand', 'hardware.type', 'software', 'software.status', 'software.brand', 'software.type']
        });
        if (!resource)
            throw new common_1.NotFoundException(`Resource #${id} not found`);
        return resource;
    }
    async create(hardware, software) {
        if (hardware)
            return await this.ResourceRepository.save({
                hardware: hardware
            });
        else
            return await this.ResourceRepository.save({
                software: software
            });
    }
    ;
};
ResourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resources_entity_1.Resources)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map