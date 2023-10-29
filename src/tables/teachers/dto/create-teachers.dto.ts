import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTeachersDto {
  @IsNumber()
  @IsNotEmpty()
  academicDegreeId: number;

  @IsNumber()
  @IsNotEmpty()
  workExperience: number;

  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;
}
