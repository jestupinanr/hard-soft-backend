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
exports.IncidentsController = void 0;
const common_1 = require("@nestjs/common");
const incidents_1 = require("../dtos/incidents");
const incidents_service_1 = require("../services/incidents.service");
let IncidentsController = class IncidentsController {
    constructor(incidentService) {
        this.incidentService = incidentService;
    }
    findAll() {
        return this.incidentService.findAll();
    }
    create(payload) {
        return this.incidentService.create(payload);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IncidentsController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [incidents_1.CreateIncidentResourceDto]),
    __metadata("design:returntype", void 0)
], IncidentsController.prototype, "create", null);
IncidentsController = __decorate([
    common_1.Controller('incidents'),
    __metadata("design:paramtypes", [incidents_service_1.IncidentsService])
], IncidentsController);
exports.IncidentsController = IncidentsController;
//# sourceMappingURL=incidents.controller.js.map