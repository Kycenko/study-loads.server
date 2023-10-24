import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class TeachersDto {
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
