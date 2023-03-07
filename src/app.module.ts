import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/entities/role.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345678',
        database: 'hard-soft',
        entities: [User, Roles],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ProductsModule,
    AuthModule,
    RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
