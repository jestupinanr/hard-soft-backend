import { Module } from '@nestjs/common';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

import { ProductsModule } from '../products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [ProductsModule, TypeOrmModule.forFeature([User])],
  controllers: [ UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UsersModule {}
