import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumber,
  Min,
  Max,
} from 'class-validator';

export class CreateGroupsDto {
  @IsNumber()
  @IsNotEmpty()
  specialityId: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(2)
  @Max(4)
  course: number;
}
