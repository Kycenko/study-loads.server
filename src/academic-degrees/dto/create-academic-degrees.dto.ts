import { IsString, IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class CreateAcademicDegreesDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  educationalInstitution: string;
}
