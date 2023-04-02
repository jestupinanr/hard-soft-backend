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
exports.IncidentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const incidents_entity_1 = require("../entities/incidents.entity");
let IncidentsService = class IncidentsService {
    constructor(incidentsRepository) {
        this.incidentsRepository = incidentsRepository;
    }
    findAll() {
        return this.incidentsRepository.find({
            relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
                'assigment.resource.software.brand', 'assigment.resource.software.type']
        });
    }
    findOne(id) {
        const assigment = this.incidentsRepository.findOne({
            where: {
                id
            },
            relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
                'assigment.resource.software.brand', 'assigment.resource.software.type']
        });
        if (!assigment) {
            throw new common_1.NotFoundException(`Incident #${id} not found`);
        }
        return assigment;
    }
    async create(data) {
        try {
            return await this.incidentsRepository.save(data);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.detail);
        }
    }
    async update(id, changes) {
        const incident = this.incidentsRepository.findOne({
            where: {
                id
            }
        });
        if (!incident)
            throw new common_1.NotFoundException(`Incident #${id} not found`);
        await this.incidentsRepository.update(id, Object.assign({}, changes));
        return this.incidentsRepository.findOne({
            where: {
                id
            },
            relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
                'assigment.resource.software.brand', 'assigment.resource.software.type']
        });
    }
};
IncidentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(incidents_entity_1.Incidents)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IncidentsService);
exports.IncidentsService = IncidentsService;
//# sourceMappingURL=incidents.service.js.map