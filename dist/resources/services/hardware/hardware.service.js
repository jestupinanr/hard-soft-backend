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
exports.HardwareService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hardware_entity_1 = require("../../entities/hardware/hardware.entity");
const resource_service_1 = require("../resource.service");
let HardwareService = class HardwareService {
    constructor(hardwareRepository, resourceService) {
        this.hardwareRepository = hardwareRepository;
        this.resourceService = resourceService;
    }
    findAll() {
        return this.hardwareRepository.find({
            relations: ['status']
        });
    }
    async create(data) {
        try {
            const res = await this.hardwareRepository.save(data);
            if (res) {
                const resource = await this.resourceService.create(res);
                return resource;
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error.detail);
        }
    }
    async update(id, changes) {
        const hardware = this.hardwareRepository.findOne({
            where: {
                id
            }
        });
        if (!hardware)
            throw new common_1.NotFoundException(`Hardware #${id} not found`);
        await this.hardwareRepository.update(id, Object.assign({}, changes));
        return this.hardwareRepository.findOne({
            where: {
                id
            }
        });
    }
    async remove(id) {
        try {
            const hardware = await this.hardwareRepository.findOne({
                where: {
                    id
                }
            });
            if (!hardware)
                throw new common_1.NotFoundException(`Hardware #${id} not found`);
            const res = await this.hardwareRepository.delete(id);
            return res;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.detail);
        }
    }
};
HardwareService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(hardware_entity_1.Hardware)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        resource_service_1.ResourceService])
], HardwareService);
exports.HardwareService = HardwareService;
//# sourceMappingURL=hardware.service.js.map