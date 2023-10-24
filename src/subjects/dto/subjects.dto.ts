import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class SubjectsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  hours: number;
}
