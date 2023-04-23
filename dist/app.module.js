"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const roles_module_1 = require("./roles/roles.module");
const role_entity_1 = require("./roles/entities/role.entity");
const resources_module_1 = require("./resources/resources.module");
const hardware_entity_1 = require("./resources/entities/hardware/hardware.entity");
const software_entity_1 = require("./resources/entities/software/software.entity");
const incidents_module_1 = require("./incidents/incidents.module");
const incidents_entity_1 = require("./incidents/entities/incidents.entity");
const incidentsStatus_entity_1 = require("./incidents/entities/incidentsStatus.entity");
const status_resources_entity_1 = require("./resources/entities/status-resources.entity");
const resources_entity_1 = require("./resources/entities/resources.entity");
const assigments_module_1 = require("./assigments/assigments.module");
const assigment_entity_1 = require("./assigments/entities/assigment.entity");
const brand_entity_1 = require("./resources/entities/brand.entity");
const type_entity_1 = require("./resources/entities/type.entity");
const mailer_1 = require("@nestjs-modules/mailer");
const mail_module_1 = require("./mails/mail.module");
const upload_module_1 = require("./upload/upload.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: '12345678',
                    database: 'hard-soft',
                    entities: [user_entity_1.User, role_entity_1.Roles, status_resources_entity_1.StatusResources, hardware_entity_1.Hardware, brand_entity_1.ResourceBrand, type_entity_1.ResourceType, software_entity_1.Software, incidents_entity_1.Incidents, incidentsStatus_entity_1.IncidentsStatus, resources_entity_1.Resources, assigment_entity_1.Assigment],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    service: 'gmail',
                    auth: {
                        user: 'empresahardsoft2023@gmail.com',
                        pass: 'gkgeegsqoljrkrkx'
                    }
                }
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads', 'profile'),
                serveRoot: '/uploads/profile',
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            resources_module_1.ResourcesModule,
            incidents_module_1.IncidentsModule,
            assigments_module_1.AssigmentsModule,
            mail_module_1.MailModule,
            upload_module_1.UploadModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map