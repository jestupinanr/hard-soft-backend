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
exports.AssigmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const moment = require("moment");
const path_1 = require("path");
const typeorm_2 = require("typeorm");
const assigment_entity_1 = require("../entities/assigment.entity");
const fs = require("fs-extra");
const xl = require('excel4node');
const process = require("process");
let AssigmentService = class AssigmentService {
    constructor(assigmentRepository) {
        this.assigmentRepository = assigmentRepository;
    }
    findAll() {
        return this.assigmentRepository.find({
            relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
        });
    }
    findOne(id) {
        const assigment = this.assigmentRepository.findOne({
            where: {
                id
            },
            relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
        });
        if (!assigment) {
            throw new common_1.NotFoundException(`Assigmente #${id} not found`);
        }
        return assigment;
    }
    findAllByUser(id) {
        const assigment = this.assigmentRepository.find({
            where: {
                user: {
                    id
                }
            },
            relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
        });
        if (!assigment) {
            throw new common_1.NotFoundException(`Assigmente #${id} not found`);
        }
        return assigment;
    }
    findAllByResource(id) {
        const assigment = this.assigmentRepository.findOne({
            where: {
                resource: {
                    id
                }
            },
            relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
        });
        if (!assigment) {
            throw new common_1.NotFoundException(`Assigment #${id} not found`);
        }
        return assigment;
    }
    async create(data) {
        try {
            return await this.assigmentRepository.save(data);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error.detail);
        }
    }
    async update(id, changes) {
        const software = this.assigmentRepository.findOne({
            where: {
                id
            }
        });
        if (!software)
            throw new common_1.NotFoundException(`Assigment #${id} not found`);
        await this.assigmentRepository.update(id, Object.assign({}, changes));
        return this.assigmentRepository.findOne({
            where: {
                id
            },
            relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
        });
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
        sheet.cell(1, 1).style(style).string("Id");
        sheet.cell(1, 2).style(style).string("Descripción");
        sheet.cell(1, 3).style(style).string("Asignado a");
        sheet.cell(1, 4).style(style).string("Tipo de recurso");
        sheet.cell(1, 5).style(style).string("Nombre de recurso");
        sheet.cell(1, 6).style(style).string("Fecha de asignación");
        const assigment = await this.assigmentRepository.find({
            relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software'],
            where: {
                create_at: (0, typeorm_2.Between)(new Date(query.dateStart), new Date(query.dateEnd)),
            }
        });
        assigment.map((assigment, index) => {
            var _a, _b;
            const row = index + 2;
            sheet.cell(row, 1).string(assigment.id);
            sheet.cell(row, 2).string(assigment.description);
            sheet.cell(row, 3).string(`${assigment.user.name} ${assigment.user.lastName}`);
            sheet.cell(row, 4).string(((_a = assigment.resource) === null || _a === void 0 ? void 0 : _a.hardware) ? 'Hardware' : 'Software');
            sheet.cell(row, 5).string(((_b = assigment.resource) === null || _b === void 0 ? void 0 : _b.hardware) ? assigment.resource.hardware.name : assigment.resource.software.name);
            sheet.cell(row, 6).string(`${moment(assigment.create_at).format('YYYY-MM-DD')}`);
        });
        const randomID = new Date().getTime();
        const filename = `exported_assigment_${randomID}.xlsx`;
        fs.ensureDirSync("./temp/", (err) => {
            if (err)
                throw new common_1.NotFoundException("Ha ocurrido un error en nuestro sistema, intenta nuevamente");
        });
        const buffer = await wb.writeToBuffer();
        await fs.writeFileSync(`./temp/${filename}`, buffer, "utf-8");
        return (0, path_1.join)(process.cwd(), `temp/${filename}`);
    }
};
AssigmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(assigment_entity_1.Assigment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AssigmentService);
exports.AssigmentService = AssigmentService;
//# sourceMappingURL=assigment.service.js.map