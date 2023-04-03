"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const incidents_status_controller_1 = require("./controllers/incidents-status.controller");
const incidents_controller_1 = require("./controllers/incidents.controller");
const incidents_entity_1 = require("./entities/incidents.entity");
const incidentsStatus_entity_1 = require("./entities/incidentsStatus.entity");
const incidents_status_service_1 = require("./services/incidents-status.service");
const incidents_service_1 = require("./services/incidents.service");
let IncidentsModule = class IncidentsModule {
};
IncidentsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([incidentsStatus_entity_1.IncidentsStatus, incidents_entity_1.Incidents])],
        providers: [incidents_status_service_1.IncidentStatusService, incidents_service_1.IncidentsService],
        controllers: [incidents_status_controller_1.IncidentsStatusController, incidents_controller_1.IncidentsController],
    })
], IncidentsModule);
exports.IncidentsModule = IncidentsModule;
//# sourceMappingURL=incidents.module.js.map