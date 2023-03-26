import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/entities/role.entity';
import { ResourcesModule } from './resources/resources.module';
import { Hardware } from './resources/entities/hardware/hardware.entity';
import { Software } from './resources/entities/software/software.entity';
import { IncidentsModule } from './incidents/incidents.module';
import { Incidents } from './incidents/entities/incidents.entity';
import { IncidentsStatus } from './incidents/entities/incidentsStatus.entity';
import { StatusResources } from './resources/entities/status-resources.entity';
import { Resources } from './resources/entities/resources.entity';
import { AssigmentsModule } from './assigments/assigments.module';
import { Assigment } from './assigments/entities/assigment.entity';
import { ResourceBrand } from './resources/entities/brand.entity';
import { ResourceType } from './resources/entities/type.entity';

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
        entities: [User, Roles, StatusResources, Hardware, ResourceBrand,ResourceType, Software, Incidents, IncidentsStatus, Resources, Assigment],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    ResourcesModule,
    IncidentsModule,
    AssigmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
