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
let AuthService = class AuthService {
    constructor(usersRepository, jwtAuthService) {
        this.usersRepository = usersRepository;
        this.jwtAuthService = jwtAuthService;
        this.users = [
            {
                email: 'correo@mail.com',
                password: '12345',
            },
        ];
    }
    findAll() {
        return this.users;
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
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map