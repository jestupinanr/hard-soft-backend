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
exports.SoftwareController = void 0;
const common_1 = require("@nestjs/common");
const software_1 = require("../dtos/software");
const software_service_1 = require("../services/software.service");
let SoftwareController = class SoftwareController {
    constructor(softwareService) {
        this.softwareService = softwareService;
    }
    findAll() {
        return this.softwareService.findAll();
    }
    create(payload) {
        return this.softwareService.create(payload);
    }
    update(id, payload) {
        return this.softwareService.update(id, payload);
    }
    remove(id) {
        return this.softwareService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SoftwareController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [software_1.CreateSoftwareDto]),
    __metadata("design:returntype", void 0)
], SoftwareController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, software_1.UpdateSoftwareDto]),
    __metadata("design:returntype", void 0)
], SoftwareController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SoftwareController.prototype, "remove", null);
SoftwareController = __decorate([
    common_1.Controller('software'),
    __metadata("design:paramtypes", [software_service_1.SoftwareService])
], SoftwareController);
exports.SoftwareController = SoftwareController;
//# sourceMappingURL=software.controller.js.map