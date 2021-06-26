<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Department1Module } from './department1/department1.module';

@Module({
  imports: [
    PatientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'sdh',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.js'],
    }),
    AuthModule,
    Department1Module,
  ],
})
export class AppModule {}
=======
import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Department1Module } from './department1/department1.module';

@Module({
  imports: [
    PatientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'brill-care',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.js'],
    }),
    AuthModule,
    Department1Module,
  ],
})
export class AppModule {}
>>>>>>> e69bf408f72bae21a1f856095045c902092c7150
