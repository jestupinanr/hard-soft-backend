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
exports.HardwareBrandController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../../auth/jwt-auth.guard");
const hardware_1 = require("../../dtos/hardware");
const hardware_brand_service_1 = require("../../services/hardware/hardware-brand.service");
let HardwareBrandController = class HardwareBrandController {
    constructor(hardwareBrandService) {
        this.hardwareBrandService = hardwareBrandService;
    }
    findAll() {
        return this.hardwareBrandService.findAll();
    }
    create(payload) {
        return this.hardwareBrandService.create(payload);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HardwareBrandController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hardware_1.CreateHardwareBrandDto]),
    __metadata("design:returntype", void 0)
], HardwareBrandController.prototype, "create", null);
HardwareBrandController = __decorate([
    common_1.Controller('resources/hardware/brand'),
    __metadata("design:paramtypes", [hardware_brand_service_1.HardwareBrandService])
], HardwareBrandController);
exports.HardwareBrandController = HardwareBrandController;
//# sourceMappingURL=hardware-brand.controller.js.map