import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment';
import { join } from 'path';
import { Between, Repository } from 'typeorm';
import { CreateHardwareDto, UpdateHardwareDto } from '../../dtos/hardware';
import { Hardware } from '../../entities/hardware/hardware.entity';
import { ResourceService } from '../resource.service';

const fs = require("fs-extra");
const xl = require('excel4node');
const process = require("process");

@Injectable()
export class HardwareService {
  constructor(
    @InjectRepository(Hardware)
    private hardwareRepository: Repository<Hardware>,
    private resourceService: ResourceService
  ) {}

  findAll():Promise<Hardware[]> {
    return this.hardwareRepository.find({
      relations: ['status', 'brand', 'type']
    });
  }

  async create(data: CreateHardwareDto) {
    try {
      const res = await this.hardwareRepository.save(data);
      if (res) {
        const resource = await this.resourceService.create(res);
        return resource;
      }
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
  }

  async update(id: string, changes: UpdateHardwareDto) {
    const hardware = this.hardwareRepository.findOne({
      where: {
        id
      }
    });

    if (!hardware)
      throw new NotFoundException(`Hardware #${id} not found`);
    
    // Update
    await this.hardwareRepository.update(id,
      {
        ...changes
      });

    return this.hardwareRepository.findOne({
      where: {
        id
      },
      relations: ['brand', 'type', 'status']
    });
  }

  async remove(id: string) {
    try {
      const hardware = await this.hardwareRepository.findOne({
        where: {
          id
        }
      });
      if (!hardware)
        throw new NotFoundException(`Hardware #${id} not found`);
      
      const res = await this.hardwareRepository.delete(id)
      return res;
    } catch(error) {
      throw new BadRequestException(error.detail);
    }
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
        create_at: Between(
          new Date(query.dateStart), 
          new Date(query.dateEnd)
        ),
      }
    });

    hardware.map((hardware, index) => {
      const row = index + 2;
      sheet.cell(row, 1).string(hardware.name); // nombre
      sheet.cell(row, 2).string(hardware.status.name); // estado
      sheet.cell(row, 3).string(hardware.brand.name); // marca
      sheet.cell(row, 4).string(hardware.type.name); // tipo 
      sheet.cell(row, 5).string(hardware.model); // modelo
      sheet.cell(row, 6).string(hardware.observations); // observaciones
      sheet.cell(row, 7).string(hardware.acquisitionDate); // fecha de adquisición
      sheet.cell(row, 8).string(`${moment(hardware.create_at).format('YYYY-MM-DD')}`); // fecha de creación
    });

    // Create buffer
    const randomID = new Date().getTime();
    const filename = `exported_hardware_${randomID}.xlsx`;
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
