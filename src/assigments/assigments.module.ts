import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssigmentController } from './controllers/assigment.controller';
import { Assigment } from './entities/assigment.entity';
import { AssigmentService } from './services/assigment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Assigment])],
  providers: [AssigmentService],
  controllers: [AssigmentController],
})
export class AssigmentsModule {}
