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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../entities/user.entity");
const path_1 = require("path");
const moment_1 = require("moment");
const fs = require("fs-extra");
const xl = require('excel4node');
const process = require("process");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    findAll() {
        return this.usersRepository.find({
            relations: ['role']
        });
    }
    findOne(id) {
        const user = this.usersRepository.findOne({
            where: {
                id
            },
            relations: ['role']
        });
        if (!user) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    async create(data) {
        const olderData = await this.usersRepository.findOne({
            where: {
                email: data.email
            },
        });
        if (olderData)
            throw new common_1.BadRequestException('User already created');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt);
        return await this.usersRepository.save(Object.assign(Object.assign({}, data), { password: hash }));
    }
    async update(id, changes) {
        const user = this.usersRepository.findOne({
            where: {
                id
            }
        });
        if (!user)
            throw new common_1.NotFoundException(`User #${id} not found`);
        const dataSend = Object.assign({}, changes);
        if (changes.password) {
            const salt = bcrypt.genSaltSync(10);
            dataSend.password = bcrypt.hashSync(changes.password, salt);
        }
        await this.usersRepository.update(id, Object.assign({}, dataSend));
        return this.usersRepository.findOne({
            where: {
                id
            },
            relations: ['role']
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
        sheet.cell(1, 1).style(style).string("NIT");
        sheet.cell(1, 2).style(style).string("Nombres");
        sheet.cell(1, 3).style(style).string("Apellidos");
        sheet.cell(1, 4).style(style).string("Correo");
        sheet.cell(1, 5).style(style).string("Telefono");
        sheet.cell(1, 6).style(style).string("Dirección");
        sheet.cell(1, 7).style(style).string("Fecha de nacimiento");
        sheet.cell(1, 8).style(style).string("Rol");
        sheet.cell(1, 9).style(style).string("Fecha de creación");
        const users = await this.usersRepository.find({
            relations: ['role'],
            where: {
                create_at: (0, typeorm_2.Between)(new Date(query.dateStart), new Date(query.dateEnd)),
            }
        });
        users.map((user, index) => {
            const row = index + 2;
            sheet.cell(row, 1).string(user.nit);
            sheet.cell(row, 2).string(user.name);
            sheet.cell(row, 3).string(user.lastName);
            sheet.cell(row, 4).string(user.email);
            sheet.cell(row, 5).string(user.phone1);
            sheet.cell(row, 6).string(user.address);
            sheet.cell(row, 7).string(`${(0, moment_1.default)(user.bornDate).format('YYYY-MM-DD')}`);
            sheet.cell(row, 8).string(`${user.role.name}`);
            sheet.cell(row, 9).string(`${(0, moment_1.default)(user.create_at).format('YYYY-MM-DD')}`);
        });
        const randomID = new Date().getTime();
        const filename = `exported_users_${randomID}.xlsx`;
        fs.ensureDirSync("./temp/", (err) => {
            if (err)
                throw new common_1.NotFoundException("Ha ocurrido un error en nuestro sistema, intenta nuevamente");
        });
        const buffer = await wb.writeToBuffer();
        await fs.writeFileSync(`./temp/${filename}`, buffer, "utf-8");
        return (0, path_1.join)(process.cwd(), `temp/${filename}`);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map