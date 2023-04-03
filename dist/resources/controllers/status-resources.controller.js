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
exports.StatusResourcesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const status_resources_1 = require("../dtos/status-resources");
const status_resources_service_1 = require("../services/status-resources.service");
let StatusResourcesController = class StatusResourcesController {
    constructor(statusResourcesService) {
        this.statusResourcesService = statusResourcesService;
    }
    findAll() {
        return this.statusResourcesService.findAll();
    }
    create(payload) {
        return this.statusResourcesService.create(payload);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatusResourcesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [status_resources_1.CreateStatusResourceDto]),
    __metadata("design:returntype", void 0)
], StatusResourcesController.prototype, "create", null);
StatusResourcesController = __decorate([
    (0, common_1.Controller)('resources/status'),
    __metadata("design:paramtypes", [status_resources_service_1.StatusResourcesService])
], StatusResourcesController);
exports.StatusResourcesController = StatusResourcesController;
//# sourceMappingURL=status-resources.controller.js.map