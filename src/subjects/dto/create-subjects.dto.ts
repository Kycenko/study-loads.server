import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSubjectsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  hours: number;
}
