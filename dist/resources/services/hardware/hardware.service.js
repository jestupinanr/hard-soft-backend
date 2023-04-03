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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardwareService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("moment");
const path_1 = require("path");
const typeorm_2 = require("typeorm");
const hardware_entity_1 = require("../../entities/hardware/hardware.entity");
const resource_service_1 = require("../resource.service");
const fs = require("fs-extra");
const xl = require('excel4node');
const process = require("process");
let HardwareService = class HardwareService {
    constructor(hardwareRepository, resourceService) {
        this.hardwareRepository = hardwareRepository;
        this.resourceService = resourceService;
    }
    findAll() {
        return this.hardwareRepository.find({
            relations: ['status', 'brand', 'type']
        });
    }
    async create(data) {
        try {
            const res = await this.hardwareRepository.save(data);
            if (res) {
                const resource = await this.resourceService.create(res);
                return resource;
            }
        }
        catch (error) {
            throw new common_1.BadRequestException(error.detail);
        }
    }
    async update(id, changes) {
        const hardware = this.hardwareRepository.findOne({
            where: {
                id
            }
        });
        if (!hardware)
            throw new common_1.NotFoundException(`Hardware #${id} not found`);
        await this.hardwareRepository.update(id, Object.assign({}, changes));
        return this.hardwareRepository.findOne({
            where: {
                id
            },
            relations: ['brand', 'type', 'status']
        });
    }
    async remove(id) {
        try {
            const hardware = await this.hardwareRepository.findOne({
                where: {
                    id
                }
            });
            if (!hardware)
                throw new common_1.NotFoundException(`Hardware #${id} not found`);
            const res = await this.hardwareRepository.delete(id);
            return res;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.detail);
        }
    }
    ;
    async createReportExcel(query) {
        let path = '';
        const wb = new xl.Workbook();
        const sheet = wb.addWorksheet("Sheet 1");
        sheet.column(1).setWidth(30);
        sheet.column(2).setWidth(20);
        sheet.column(3).setWidth(25);
        sheet.column(4).setWidth(25);
        sheet.column(5).setWidth(25);
        sheet.column(6).setWidth(50);
        sheet.column(7).setWidth(15);
        sheet.column(8).setWidth(15);
        sheet.column(9).setWidth(25);
        sheet.row(1).setHeight(20);
        const style = wb.createStyle({
            fill: {
                type: "pattern",
                patternType: "solid",
                bgColor: "#F7EBA8",
                fgColor: "#F7EBA8",
            },
            font: {
                bold: false,
                color: "#EC1C35",
            },
        });
        sheet.cell(1, 1).style(style).string("Nombre");
        sheet.cell(1, 2).style(style).string("Estado");
        sheet.cell(1, 3).style(style).string("Marca");
        sheet.cell(1, 4).style(style).string("Tipo");
        sheet.cell(1, 5).style(style).string("Modelo");
        sheet.cell(1, 6).style(style).string("Observaciones");
        sheet.cell(1, 7).style(style).string("Fecha de adquisición");
        sheet.cell(1, 8).style(style).string("Fecha de creación");
        const hardware = await this.hardwareRepository.find({
            relations: ['status', 'brand', 'type'],
            where: {
                create_at: (0, typeorm_2.Between)(new Date(query.dateStart), new Date(query.dateEnd)),
            }
        });
        hardware.map((hardware, index) => {
            const row = index + 2;
            sheet.cell(row, 1).string(hardware.name);
            sheet.cell(row, 2).string(hardware.status.name);
            sheet.cell(row, 3).string(hardware.brand.name);
            sheet.cell(row, 4).string(hardware.type.name);
            sheet.cell(row, 5).string(hardware.model);
            sheet.cell(row, 6).string(hardware.observations);
            sheet.cell(row, 7).string(hardware.acquisitionDate);
            sheet.cell(row, 8).string(`${moment(hardware.create_at).format('YYYY-MM-DD')}`);
        });
        const randomID = new Date().getTime();
        const filename = `exported_hardware_${randomID}.xlsx`;
        fs.ensureDirSync("./temp/", (err) => {
            if (err)
                throw new common_1.NotFoundException("Ha ocurrido un error en nuestro sistema, intenta nuevamente");
        });
        const buffer = await wb.writeToBuffer();
        await fs.writeFileSync(`./temp/${filename}`, buffer, "utf-8");
        return (0, path_1.join)(process.cwd(), `temp/${filename}`);
    }
};
HardwareService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hardware_entity_1.Hardware)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        resource_service_1.ResourceService])
], HardwareService);
exports.HardwareService = HardwareService;
//# sourceMappingURL=hardware.service.js.map