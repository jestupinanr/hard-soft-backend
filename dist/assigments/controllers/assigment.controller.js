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
exports.AssigmentController = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const assigment_1 = require("../dtos/assigment");
const assigment_service_1 = require("../services/assigment.service");
let AssigmentController = class AssigmentController {
    constructor(assigmentService) {
        this.assigmentService = assigmentService;
    }
    findAll() {
        return this.assigmentService.findAll();
    }
    get(id) {
        return this.assigmentService.findOne(id);
    }
    getByUser(id) {
        return this.assigmentService.findAllByUser(id);
    }
    getByResource(id) {
        return this.assigmentService.findAllByResource(id);
    }
    create(payload) {
        return this.assigmentService.create(payload);
    }
    update(id, payload) {
        return this.assigmentService.update(id, payload);
    }
    async getUsersExcel(query) {
        const path = await this.assigmentService.createReportExcel(query);
        return new common_1.StreamableFile((0, fs_1.createReadStream)(path));
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AssigmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssigmentController.prototype, "get", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssigmentController.prototype, "getByUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/resource/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssigmentController.prototype, "getByResource", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assigment_1.CreateAssigmentDto]),
    __metadata("design:returntype", void 0)
], AssigmentController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assigment_1.UpdateAssigmentDto]),
    __metadata("design:returntype", void 0)
], AssigmentController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('report/assigment'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AssigmentController.prototype, "getUsersExcel", null);
AssigmentController = __decorate([
    (0, common_1.Controller)('assigment'),
    __metadata("design:paramtypes", [assigment_service_1.AssigmentService])
], AssigmentController);
exports.AssigmentController = AssigmentController;
//# sourceMappingURL=assigment.controller.js.map