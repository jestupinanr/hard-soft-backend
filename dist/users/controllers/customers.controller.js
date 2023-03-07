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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customers_service_1 = require("../services/customers.service");
const customer_dto_1 = require("../dtos/customer.dto");
let CustomerController = class CustomerController {
    constructor(customersService) {
        this.customersService = customersService;
    }
    findAll() {
        return this.customersService.findAll();
    }
    get(id) {
        return this.customersService.findOne(id);
    }
    create(payload) {
        return this.customersService.create(payload);
    }
    update(id, payload) {
        return this.customersService.update(id, payload);
    }
    remove(id) {
        return this.customersService.remove(+id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "get", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof customer_dto_1.CreateCustomerDto !== "undefined" && customer_dto_1.CreateCustomerDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_b = typeof customer_dto_1.UpdateCustomerDto !== "undefined" && customer_dto_1.UpdateCustomerDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "remove", null);
CustomerController = __decorate([
    common_1.Controller('customers'),
    __metadata("design:paramtypes", [typeof (_c = typeof customers_service_1.CustomersService !== "undefined" && customers_service_1.CustomersService) === "function" ? _c : Object])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customers.controller.js.map