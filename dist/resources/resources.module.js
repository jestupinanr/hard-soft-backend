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
const brand_controller_1 = require("./controllers/brand.controller");
const hardware_controller_1 = require("./controllers/hardware/hardware.controller");
const resource_controller_1 = require("./controllers/resource.controller");
const software_controller_1 = require("./controllers/software.controller");
const status_resources_controller_1 = require("./controllers/status-resources.controller");
const types_controller_1 = require("./controllers/types.controller");
const brand_entity_1 = require("./entities/brand.entity");
const hardware_entity_1 = require("./entities/hardware/hardware.entity");
const resources_entity_1 = require("./entities/resources.entity");
const software_entity_1 = require("./entities/software/software.entity");
const status_resources_entity_1 = require("./entities/status-resources.entity");
const type_entity_1 = require("./entities/type.entity");
const brand_service_1 = require("./services/brand.service");
const hardware_service_1 = require("./services/hardware/hardware.service");
const resource_service_1 = require("./services/resource.service");
const software_service_1 = require("./services/software.service");
const status_resources_service_1 = require("./services/status-resources.service");
const types_service_1 = require("./services/types.service");
let ResourcesModule = class ResourcesModule {
};
ResourcesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([hardware_entity_1.Hardware, software_entity_1.Software, status_resources_entity_1.StatusResources, resources_entity_1.Resources, brand_entity_1.ResourceBrand, type_entity_1.ResourceType])],
        controllers: [hardware_controller_1.HardwareController, software_controller_1.SoftwareController, status_resources_controller_1.StatusResourcesController, resource_controller_1.ResourceController, brand_controller_1.HardwareBrandController, types_controller_1.ResourceTypeController],
        providers: [hardware_service_1.HardwareService, software_service_1.SoftwareService, status_resources_service_1.StatusResourcesService, resource_service_1.ResourceService, brand_service_1.HardwareBrandService, types_service_1.ResourceTypesService]
    })
], ResourcesModule);
exports.ResourcesModule = ResourcesModule;
//# sourceMappingURL=resources.module.js.map