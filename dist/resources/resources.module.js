"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hardware_controller_1 = require("./controllers/hardware.controller");
const software_controller_1 = require("./controllers/software.controller");
const hardware_entity_1 = require("./entities/hardware.entity");
const software_entity_1 = require("./entities/software.entity");
const hardware_service_1 = require("./services/hardware.service");
const software_service_1 = require("./services/software.service");
let ResourcesModule = class ResourcesModule {
};
ResourcesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([hardware_entity_1.Hardware, software_entity_1.Software])],
        controllers: [hardware_controller_1.HardwareController, software_controller_1.SoftwareController],
        providers: [hardware_service_1.HardwareService, software_service_1.SoftwareService]
    })
], ResourcesModule);
exports.ResourcesModule = ResourcesModule;
//# sourceMappingURL=resources.module.js.map