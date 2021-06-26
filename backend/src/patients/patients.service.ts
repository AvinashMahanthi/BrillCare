import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { PatientsRepository } from './patients.repository';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async getAllPatients(): Promise<Patient[]> {
    const found = await this.patientsRepository.getAllPatients();
    if (!found) {
      throw new InternalServerErrorException();
    }
    return found;
  }

  async getPatientById(id: string): Promise<Patient> {
    const found = await this.patientsRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException(`Patient with ID '${id}' Not Found`);
    }
    return found;
  }
  async getPatientByIdAdmin(id: string): Promise<Patient> {
    const found = await this.patientsRepository.findOne({ id });
    if (!found) {
      throw new NotFoundException(`Patient with ID '${id}' Not Found`);
    }
    return found;
  }

  createPatient(
    user: User,
    createPatientDTO: CreatePatientDTO,
  ): Promise<Patient | string> {
    return this.patientsRepository.createPatient(user, createPatientDTO);
  }

  async deletePatient(id: string): Promise<{ success: boolean }> {
    const result = await this.patientsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Patient with ID '${id}' Not Found`);
    }
    return { success: true };
  }

  async updatePatientData(
    createPatientDTO: CreatePatientDTO,
    patientId: number,
  ): Promise<{ success: boolean }> {
    try {
      await this.patientsRepository.update(patientId, {
        ...createPatientDTO,
      });
      return { success: true };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
