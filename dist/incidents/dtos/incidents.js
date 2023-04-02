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
exports.UpdateIncidentDto = exports.CreateIncidentResourceDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const incidentsStatus_entity_1 = require("../entities/incidentsStatus.entity");
const assigment_entity_1 = require("../../assigments/entities/assigment.entity");
class CreateIncidentResourceDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 200),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateIncidentResourceDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsUUID(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", assigment_entity_1.Assigment)
], CreateIncidentResourceDto.prototype, "assigment", void 0);
__decorate([
    class_validator_1.IsUUID(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", incidentsStatus_entity_1.IncidentsStatus)
], CreateIncidentResourceDto.prototype, "incidentStatus", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 300),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateIncidentResourceDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], CreateIncidentResourceDto.prototype, "solution", void 0);
exports.CreateIncidentResourceDto = CreateIncidentResourceDto;
class UpdateIncidentDto extends mapped_types_1.PartialType(CreateIncidentResourceDto) {
}
exports.UpdateIncidentDto = UpdateIncidentDto;
//# sourceMappingURL=incidents.js.map