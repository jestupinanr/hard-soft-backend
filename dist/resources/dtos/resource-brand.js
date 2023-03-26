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
exports.UpdateResorceBrandDto = exports.CreateResourceBrandDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateResourceBrandDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 50),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateResourceBrandDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 50),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateResourceBrandDto.prototype, "resource", void 0);
exports.CreateResourceBrandDto = CreateResourceBrandDto;
class UpdateResorceBrandDto extends mapped_types_1.PartialType(CreateResourceBrandDto) {
}
exports.UpdateResorceBrandDto = UpdateResorceBrandDto;
//# sourceMappingURL=resource-brand.js.map