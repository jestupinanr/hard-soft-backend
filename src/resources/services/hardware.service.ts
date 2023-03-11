import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUIDVersion } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateHardwareDto, UpdateHardwareDto } from '../dtos/hardware';
import { Hardware } from '../entities/hardware.entity';

@Injectable()
export class HardwareService {
  constructor(
    @InjectRepository(Hardware)
    private hardwareRepository: Repository<Hardware>
  ) {}

  findAll():Promise<Hardware[]> {
    return this.hardwareRepository.find({
      relations: ['status']
    });
  }

  async create(data: CreateHardwareDto) {
    try {
      return await this.hardwareRepository.save(data);
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
      }
    });
  }

  async remove(id: string) {
    const hardware = await this.hardwareRepository.findOne({
      where: {
        id
      }
    });
    if (!hardware)
      throw new NotFoundException(`Hardware #${id} not found`);
    
    return this.hardwareRepository.delete(id)
  }
}
