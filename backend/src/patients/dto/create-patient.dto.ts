<<<<<<< HEAD
import { IsNotEmpty } from 'class-validator';

export class CreatePatientDTO {
  @IsNotEmpty()
  outPatientId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  sex: string;

  @IsNotEmpty()
  occupation: string;

  @IsNotEmpty()
  contactNumber: string;

  @IsNotEmpty()
  residentialAddress: string;
}
=======
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
>>>>>>> e69bf408f72bae21a1f856095045c902092c7150
