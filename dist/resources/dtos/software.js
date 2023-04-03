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
const brand_entity_1 = require("../entities/brand.entity");
const type_entity_1 = require("../entities/type.entity");
class CreateSoftwareDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 200),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", status_resources_entity_1.StatusResources)
], CreateSoftwareDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", brand_entity_1.ResourceBrand)
], CreateSoftwareDto.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "licenseNumber", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", type_entity_1.ResourceType)
], CreateSoftwareDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 300),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSoftwareDto.prototype, "observations", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 300),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateSoftwareDto.prototype, "acquisitionDate", void 0);
exports.CreateSoftwareDto = CreateSoftwareDto;
class UpdateSoftwareDto extends (0, mapped_types_1.PartialType)(CreateSoftwareDto) {
}
exports.UpdateSoftwareDto = UpdateSoftwareDto;
//# sourceMappingURL=software.js.map