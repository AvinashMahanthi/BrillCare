import { ConflictException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { v4 as uuid } from 'uuid';
@EntityRepository(Patient)
export class PatientsRepository extends Repository<Patient> {
  async getAllPatients(): Promise<Patient[]> {
    const patients = await this.find({ relations: ['patientDOneData'] });
    console.log(patients);

    return patients;
  }
  async createPatient(
    user: User,
    createPatientDTO: CreatePatientDTO,
  ): Promise<Patient | string> {
    try {
      const { name, sex, contactNumber } = createPatientDTO;
      const url = `https://localhost:3000/meet/${uuid}`;
      const patient = this.create({
        userId: user.id,
        name,
        sex,
        contactNumber,
        url,
      });
      await this.save(patient);
      return patient;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(`${error.detail}`);
      }
      return `${error.column} should not be empty`;
    }
  }
}
