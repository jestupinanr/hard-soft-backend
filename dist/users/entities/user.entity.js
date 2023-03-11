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
exports.User = void 0;
const base_entity_1 = require("../../base.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const typeorm_1 = require("typeorm");
let User = class User extends base_entity_1.baseEntity {
};
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 25, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "nit", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50, nullable: false, name: 'last_name' }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50, nullable: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false, select: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 30, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "phone1", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 30, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone2", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: true, name: 'born_date' }),
    __metadata("design:type", Date)
], User.prototype, "bornDate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => role_entity_1.Roles),
    typeorm_1.JoinColumn(),
    __metadata("design:type", role_entity_1.Roles)
], User.prototype, "role", void 0);
User = __decorate([
    typeorm_1.Entity('users')
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map