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
exports.UpdateIncidentStatusDto = exports.CreateIncidentStatusResourceDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
class CreateIncidentStatusResourceDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(1, 50),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateIncidentStatusResourceDto.prototype, "name", void 0);
exports.CreateIncidentStatusResourceDto = CreateIncidentStatusResourceDto;
class UpdateIncidentStatusDto extends mapped_types_1.PartialType(CreateIncidentStatusResourceDto) {
}
exports.UpdateIncidentStatusDto = UpdateIncidentStatusDto;
//# sourceMappingURL=incidents-status%20copy.js.map