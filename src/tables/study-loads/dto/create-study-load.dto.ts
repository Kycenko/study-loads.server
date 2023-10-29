import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudyLoadsDto {
  @IsNumber()
  @IsNotEmpty()
  groupId: number;

  @IsNumber()
  @IsNotEmpty()
  subjectId: number;

  @IsNumber()
  @IsNotEmpty()
  teacherId: number;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  numberOfHours: number;

  @IsNumber()
  @IsNotEmpty()
  numberOfLectures: number;

  @IsNumber()
  @IsNotEmpty()
  numberOfLaboratoryWorks: number;
}
