import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { join } from 'path';
import { Between, Repository } from 'typeorm';
import { CreateIncidentResourceDto, UpdateIncidentDto } from '../dtos/incidents';
import { Incidents } from '../entities/incidents.entity';

const fs = require("fs-extra");
const xl = require('excel4node');
const process = require("process");

@Injectable()
export class IncidentsService {
  constructor(
    @InjectRepository(Incidents)
    private incidentsRepository: Repository<Incidents>
  ) {}

  findAll():Promise<Incidents[]> {
    return this.incidentsRepository.find({
      relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
      'assigment.resource.software.brand', 'assigment.resource.software.type' ]
    });
  }

  findOne(id: string) {
    const assigment = this.incidentsRepository.findOne({
      where: {
        id
      },
      relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
      'assigment.resource.software.brand', 'assigment.resource.software.type' ]
    });
    if (!assigment) {
      throw new NotFoundException(`Incident #${id} not found`);
    }
    return assigment;
  }

  async create(data: CreateIncidentResourceDto) {
    try {
      return await this.incidentsRepository.save(data);
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }

  async update(id: string, changes: UpdateIncidentDto) {
    const incident = this.incidentsRepository.findOne({
      where: {
        id
      }
    });

    if (!incident)
      throw new NotFoundException(`Incident #${id} not found`);
    
    // Update
    await this.incidentsRepository.update(id,
      {
        ...changes
      });

    return this.incidentsRepository.findOne({
      where: {
        id
      },
      relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
      'assigment.resource.software.brand', 'assigment.resource.software.type' ]
    });
  }

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
    sheet.cell(1, 1).style(style).string("Titulo");
    sheet.cell(1, 2).style(style).string("Descripción");
    sheet.cell(1, 3).style(style).string("Solución");
    sheet.cell(1, 4).style(style).string("Estatus");
    sheet.cell(1, 5).style(style).string("Asignado a");
    sheet.cell(1, 6).style(style).string("Tipo de recurso");
    sheet.cell(1, 7).style(style).string("Nombre del recurso");
    sheet.cell(1, 8).style(style).string("Fecha de creación");

    const incident = await this.incidentsRepository.find({
      relations: ['incidentStatus', 'assigment', 'assigment.user', 'assigment.user.role', 'assigment.resource', 'assigment.resource.hardware', 'assigment.resource.hardware.brand', 'assigment.resource.hardware.type',
      'assigment.resource.software.brand', 'assigment.resource.software.type' ],
      where: {
        create_at: Between(
          new Date(query.dateStart), 
          new Date(query.dateEnd)
        ),
      }
    });

    incident.map((incident, index) => {
      const row = index + 2;
      sheet.cell(row, 1).string(incident.title); // title
      sheet.cell(row, 2).string(incident.description); // description
      sheet.cell(row, 3).string(incident.solution); // Solucion
      sheet.cell(row, 4).string(incident.incidentStatus.name); // estado
      sheet.cell(row, 5).string(`${incident.assigment.user.name} ${incident.assigment.user.lastName}` ); // asignado a
      sheet.cell(row, 6).string(incident.assigment.resource?.hardware ? 'Hardware' : 'Software'); // tipo de recurso
      sheet.cell(row, 7).string(incident.assigment.resource?.hardware ? incident.assigment.resource.hardware.name : incident.assigment.resource.software.name); // Nombre del recurso
      sheet.cell(row, 8).string(`${incident.create_at}`); // fecha de creación
    });

    // Create buffer
    const randomID = new Date().getTime();
    const filename = `exported_incidents_${randomID}.xlsx`;
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
