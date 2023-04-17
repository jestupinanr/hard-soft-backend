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
exports.Software = void 0;
const base_entity_1 = require("../../../base.entity");
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("../brand.entity");
const status_resources_entity_1 = require("../status-resources.entity");
const type_entity_1 = require("../type.entity");
let Software = class Software extends base_entity_1.baseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], Software.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_resources_entity_1.StatusResources),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", status_resources_entity_1.StatusResources)
], Software.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.ResourceBrand),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", brand_entity_1.ResourceBrand)
], Software.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => type_entity_1.ResourceType),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", type_entity_1.ResourceType)
], Software.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Software.prototype, "licenseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, nullable: false }),
    __metadata("design:type", String)
], Software.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false, name: 'acquisition_date' }),
    __metadata("design:type", Date)
], Software.prototype, "acquisitionDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false, name: 'renovation_date' }),
    __metadata("design:type", Date)
], Software.prototype, "renovationDate", void 0);
Software = __decorate([
    (0, typeorm_1.Entity)('software')
], Software);
exports.Software = Software;
//# sourceMappingURL=software.entity.js.map