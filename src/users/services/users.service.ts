import { BadRequestException, HttpException, HttpStatus, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';
import { join } from 'path';
import moment from 'moment';
const fs = require("fs-extra");
const xl = require('excel4node');
const process = require("process");

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User> ) {}

  findAll():Promise<User[]> {
    return this.usersRepository.find({
      relations: ['role']
    });
  }

  findOne(id: string) {
    const user = this.usersRepository.findOne({
      where: {
        id
      },
      relations: ['role']
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto) {
    const olderData = await this.usersRepository.findOne({
      where: {
        email: data.email
      },
    });

    if (olderData)
      throw new BadRequestException('User already created');

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    return await this.usersRepository.save({
      ...data,
      password: hash
    });
  }

  async update(id: string, changes: UpdateUserDto) {
    const user = this.usersRepository.findOne({
      where: {
        id
      }
    });

    if (!user)
      throw new NotFoundException(`User #${id} not found`);

    const dataSend = { ...changes };
    // Update password?
    if (changes.password) {
      const salt = bcrypt.genSaltSync(10);
      dataSend.password = bcrypt.hashSync(changes.password, salt);
    }

    // Update
    await this.usersRepository.update(id,
      {
        ...dataSend
      });

    return this.usersRepository.findOne({
      where: {
        id
      },
      relations: ['role']
    });
  };

  async createReportExcel(query: {dateStart: string, dateEnd: string}) {
    let path = '';
    // Create a new instance of a Workbook class
    const wb = new xl.Workbook();

    // Add worksheet (page)
    const sheet = wb.addWorksheet("Sheet 1");

    // Define columns width
    sheet.column(1).setWidth(30); // nit
    sheet.column(2).setWidth(20); // nombres
    sheet.column(3).setWidth(25); // apellidos
    sheet.column(4).setWidth(25); // correo
    sheet.column(5).setWidth(25); // telefono
    sheet.column(6).setWidth(50); // Direccion
    sheet.column(7).setWidth(15); // fecha de nacimiento
    sheet.column(8).setWidth(15); // rol
    sheet.column(9).setWidth(25); // fecha de creación

    // Define headers height
    sheet.row(1).setHeight(20);

    // Define headers style
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

    // Define headers
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
        create_at: Between(
          new Date(query.dateStart), 
          new Date(query.dateEnd)
        ),
      }
    });

    users.map((user, index) => {
      const row = index + 2;
      sheet.cell(row, 1).string(user.nit); // NIT
      sheet.cell(row, 2).string(user.name); // Nombres
      sheet.cell(row, 3).string(user.lastName); // Apellidos
      sheet.cell(row, 4).string(user.email); // Correo
      sheet.cell(row, 5).string(user.phone1); // Telefono
      sheet.cell(row, 6).string(user.address); // Dirección
      sheet.cell(row, 7).string(`${moment(user.bornDate).format('YYYY-MM-DD')}`); // Fecha de nacimiento
      sheet.cell(row, 8).string(`${user.role.name}`); // rol
      sheet.cell(row, 9).string(`${moment(user.create_at).format('YYYY-MM-DD')}`); // fecha de creación
    });

    // Create buffer
    const randomID = new Date().getTime();
    const filename = `exported_users_${randomID}.xlsx`;
    fs.ensureDirSync("./temp/", (err: any) => {
      if (err)
        throw new NotFoundException("Ha ocurrido un error en nuestro sistema, intenta nuevamente");
    });

    // Dir created
    const buffer = await wb.writeToBuffer();

    await fs.writeFileSync(`./temp/${filename}`, buffer, "utf-8");

    return join(process.cwd(), `temp/${filename}`)
  }

  // remove(id: number) {
  //   const index = this.users.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`User #${id} not found`);
  //   }
  //   this.users.splice(index, 1);
  //   return true;
  // }
}
