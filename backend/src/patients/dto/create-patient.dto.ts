import { IsNotEmpty } from 'class-validator';

export class CreatePatientDTO {
  @IsNotEmpty()
  userId: string;
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  sex: string;

  @IsNotEmpty()
  contactNumber: string;
}
