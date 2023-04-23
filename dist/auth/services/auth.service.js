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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../../mails/services/mail.service");
let AuthService = class AuthService {
    constructor(usersRepository, jwtAuthService, mailService) {
        this.usersRepository = usersRepository;
        this.jwtAuthService = jwtAuthService;
        this.mailService = mailService;
    }
    findAll() {
        return this.usersRepository.find();
    }
    async login(payload) {
        const user = await this.usersRepository.findOne({
            where: {
                email: payload.email,
            },
            select: ['password']
        });
        if (!user)
            throw new common_1.BadRequestException(`User or password incorrect`);
        const samePassword = bcrypt.compareSync(payload.password, user.password);
        if (samePassword) {
            const res = await this.usersRepository.findOne({
                where: {
                    email: payload.email,
                },
                relations: ['role']
            });
            const dataToken = { id: res.id, email: res.email };
            const token = this.jwtAuthService.sign(dataToken);
            return {
                user: res,
                token: token
            };
        }
        else {
            throw new common_1.BadRequestException(`User or password incorrect`);
        }
    }
    async getTokenRecoveryPassword(payload) {
        const res = await this.usersRepository.findOne({
            where: {
                email: payload.email,
            }
        });
        if (!res)
            throw new common_1.BadRequestException(`User not found`);
        const dataToken = { email: payload.email };
        const token = this.jwtAuthService.sign(dataToken);
        this.mailService.sendEmailRecoveryPassword(token, payload.email);
    }
    async savePassword(payload, token) {
        const dataJwt = this.jwtAuthService.verify(token);
        const res = await this.usersRepository.findOne({
            where: {
                email: dataJwt.email,
            }
        });
        if (!res)
            throw new common_1.BadRequestException(`User not found`);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(payload.password, salt);
        return await this.usersRepository.update(res.id, {
            password: hash
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, common_1.Inject)(jwt_1.JwtService)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map