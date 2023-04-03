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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incidents = void 0;
const assigment_entity_1 = require("../../assigments/entities/assigment.entity");
const base_entity_1 = require("../../base.entity");
const typeorm_1 = require("typeorm");
const incidentsStatus_entity_1 = require("./incidentsStatus.entity");
let Incidents = class Incidents extends base_entity_1.baseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], Incidents.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => assigment_entity_1.Assigment, {}),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", assigment_entity_1.Assigment)
], Incidents.prototype, "assigment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => incidentsStatus_entity_1.IncidentsStatus, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", incidentsStatus_entity_1.IncidentsStatus)
], Incidents.prototype, "incidentStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, nullable: false }),
    __metadata("design:type", String)
], Incidents.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, nullable: true }),
    __metadata("design:type", String)
], Incidents.prototype, "solution", void 0);
Incidents = __decorate([
    (0, typeorm_1.Entity)('incidents')
], Incidents);
exports.Incidents = Incidents;
//# sourceMappingURL=incidents.entity.js.map