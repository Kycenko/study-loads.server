import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSubjectsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  hours: number;
}
