import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { join } from 'path';
import { Between, Repository } from 'typeorm';
import { CreateAssigmentDto, UpdateAssigmentDto } from '../dtos/assigment';
import { Assigment } from '../entities/assigment.entity';

const fs = require("fs-extra");
const xl = require('excel4node');
const process = require("process");

@Injectable()
export class AssigmentService {
  constructor(
    @InjectRepository(Assigment)
    private assigmentRepository: Repository<Assigment>
  ) {}


  findAll():Promise<Assigment[]> {
    return this.assigmentRepository.find({
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
  }

  findOne(id: string) {
    const assigment = this.assigmentRepository.findOne({
      where: {
        id
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
    if (!assigment) {
      throw new NotFoundException(`Assigmente #${id} not found`);
    }
    return assigment;
  }

  findAllByUser(id: string) {
    const assigment = this.assigmentRepository.find({
      where: {
        user: {
          id
        }
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
    if (!assigment) {
      throw new NotFoundException(`Assigmente #${id} not found`);
    }
    return assigment;
  }

  findAllByResource(id: string) {
    const assigment = this.assigmentRepository.findOne({
      where: {
        resource: {
          id
        }
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
    });
    if (!assigment) {
      throw new NotFoundException(`Assigment #${id} not found`);
    }
    return assigment;
  }

  async create(data: CreateAssigmentDto) {
    try {
      return await this.assigmentRepository.save(data);
    } catch(error) {
      console.log(error);
      
      throw new BadRequestException(error.detail);
    }
  }

  async update(id: string, changes: UpdateAssigmentDto) {
    const software = this.assigmentRepository.findOne({
      where: {
        id
      }
    });

    if (!software)
      throw new NotFoundException(`Assigment #${id} not found`);
    
    // Update
    await this.assigmentRepository.update(id,
      {
        ...changes
      });

    return this.assigmentRepository.findOne({
      where: {
        id
      },
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software']
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
    sheet.cell(1, 1).style(style).string("Id");
    sheet.cell(1, 2).style(style).string("Descripción");
    sheet.cell(1, 3).style(style).string("Asignado a");
    sheet.cell(1, 4).style(style).string("Tipo de recurso");
    sheet.cell(1, 5).style(style).string("Nombre de recurso");
    sheet.cell(1, 6).style(style).string("Fecha de asignación");

    const assigment = await this.assigmentRepository.find({
      relations: ['user', 'user.role', 'resource', 'resource.hardware', 'resource.software'],
      where: {
        create_at: Between(
          new Date(query.dateStart), 
          new Date(query.dateEnd)
        ),
      }
    });

    assigment.map((assigment, index) => {
      const row = index + 2;
      sheet.cell(row, 1).string(assigment.id); // id
      sheet.cell(row, 2).string(assigment.description); // descripcion
      sheet.cell(row, 3).string(`${assigment.user.name} ${assigment.user.lastName}`); // asignado a 
      sheet.cell(row, 4).string(assigment.resource?.hardware ? 'Hardware' : 'Software'); // tipo de recurso
      sheet.cell(row, 5).string(assigment.resource?.hardware ? assigment.resource.hardware.name : assigment.resource.software.name); // nombre del recurso
      sheet.cell(row, 6).string(`${moment(assigment.create_at).format('YYYY-MM-DD')}`); // fecha de asignacion
    });

    // Create buffer
    const randomID = new Date().getTime();
    const filename = `exported_assigment_${randomID}.xlsx`;
    fs.ensureDirSync("./temp/", (err: any) => {
      if (err)
        throw new NotFoundException("Ha ocurrido un error en nuestro sistema, intenta nuevamente");
    });

    // Dir created
    const buffer = await wb.writeToBuffer();

    await fs.writeFileSync(`./temp/${filename}`, buffer, "utf-8");

    return join(process.cwd(), `temp/${filename}`)
  }
}
