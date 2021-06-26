<<<<<<< HEAD
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PatientDOneData } from '../department1/patientDOneData.entity';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  outPatientId: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  sex: string;

  @Column()
  occupation: string;

  @Column()
  contactNumber: string;

  @Column()
  residentialAddress: string;

  @OneToOne(
    (_type) => PatientDOneData,
    (patientDOneData) => patientDOneData.patient,
    { eager: true },
  )
  patientDOneData: PatientDOneData;
}
=======
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  contactNumber: string;

  @Column()
  url: string;
}
>>>>>>> e69bf408f72bae21a1f856095045c902092c7150
