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
exports.Resources = void 0;
const base_entity_1 = require("../../base.entity");
const typeorm_1 = require("typeorm");
const hardware_entity_1 = require("./hardware.entity");
const software_entity_1 = require("./software.entity");
let Resources = class Resources extends base_entity_1.baseEntity {
};
__decorate([
    typeorm_1.ManyToOne(() => hardware_entity_1.Hardware, { nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", hardware_entity_1.Hardware)
], Resources.prototype, "hardware", void 0);
__decorate([
    typeorm_1.ManyToOne(() => software_entity_1.Software, { nullable: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", software_entity_1.Software)
], Resources.prototype, "software", void 0);
__decorate([
    typeorm_1.Column({ type: 'int', default: 0, name: 'is_assigned' }),
    __metadata("design:type", String)
], Resources.prototype, "isAssigned", void 0);
Resources = __decorate([
    typeorm_1.Entity('resources')
], Resources);
exports.Resources = Resources;
//# sourceMappingURL=resources.entity.js.map