import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUIDVersion } from 'class-validator';
import { Repository } from 'typeorm';
import { ResourceController } from '../../controllers/resource.controller';
import { CreateHardwareDto, UpdateHardwareDto } from '../../dtos/hardware';
import { Hardware } from '../../entities/hardware/hardware.entity';
import { Resources } from '../../entities/resources.entity';
import { ResourceService } from '../resource.service';

@Injectable()
export class HardwareService {
  constructor(
    @InjectRepository(Hardware)
    private hardwareRepository: Repository<Hardware>,
    private resourceService: ResourceService
  ) {}

  findAll():Promise<Hardware[]> {
    return this.hardwareRepository.find({
      relations: ['status']
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
  }
}
