import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSpecialitiesDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  faculty: string;

  @IsNumber()
  @IsNotEmpty()
  code: number;
}
