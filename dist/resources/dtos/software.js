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
exports.UpdateSoftwareDto = exports.CreateSoftwareDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const status_resources_entity_1 = require("../entities/status-resources.entity");
class CreateSoftwareDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 200),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsUUID(),
    class_validator_1.Length(1, 50),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", status_resources_entity_1.StatusResources)
], CreateSoftwareDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 100),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "brand", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 100),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "licenseNumber", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 100),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 300),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "observations", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 300),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], CreateSoftwareDto.prototype, "acquisitionDate", void 0);
exports.CreateSoftwareDto = CreateSoftwareDto;
class UpdateSoftwareDto extends mapped_types_1.PartialType(CreateSoftwareDto) {
}
exports.UpdateSoftwareDto = UpdateSoftwareDto;
//# sourceMappingURL=software.js.map