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
exports.SoftwareService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const software_entity_1 = require("../entities/software.entity");
const resource_service_1 = require("./resource.service");
let SoftwareService = class SoftwareService {
    constructor(softwareRepository, resourceService) {
        this.softwareRepository = softwareRepository;
        this.resourceService = resourceService;
    }
    findAll() {
        return this.softwareRepository.find({
            relations: ['status']
        });
    }
    async create(data) {
        try {
            const res = await this.softwareRepository.save(data);
            if (res) {
                await this.resourceService.create(undefined, res);
                return res;
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error.detail);
        }
    }
    async update(id, changes) {
        const software = this.softwareRepository.findOne({
            where: {
                id
            }
        });
        if (!software)
            throw new common_1.NotFoundException(`Software #${id} not found`);
        await this.softwareRepository.update(id, Object.assign({}, changes));
        return this.softwareRepository.findOne({
            where: {
                id
            }
        });
    }
    async remove(id) {
        const software = await this.softwareRepository.findOne({
            where: {
                id
            }
        });
        if (!software)
            throw new common_1.NotFoundException(`Software #${id} not found`);
        return this.softwareRepository.delete(id);
    }
};
SoftwareService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(software_entity_1.Software)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        resource_service_1.ResourceService])
], SoftwareService);
exports.SoftwareService = SoftwareService;
//# sourceMappingURL=software.service.js.map