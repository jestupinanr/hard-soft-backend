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
exports.Hardware = void 0;
const base_entity_1 = require("../../base.entity");
const statusResources_entity_1 = require("../../status-resources/entities/statusResources.entity");
const typeorm_1 = require("typeorm");
let Hardware = class Hardware extends base_entity_1.baseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], Hardware.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToOne(() => statusResources_entity_1.StatusResources),
    typeorm_1.JoinColumn(),
    __metadata("design:type", statusResources_entity_1.StatusResources)
], Hardware.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Hardware.prototype, "brand", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Hardware.prototype, "model", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Hardware.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 300, nullable: false }),
    __metadata("design:type", String)
], Hardware.prototype, "observations", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Hardware.prototype, "acquisitionDate", void 0);
Hardware = __decorate([
    typeorm_1.Entity('hardware')
], Hardware);
exports.Hardware = Hardware;
//# sourceMappingURL=hardware.entity.js.map