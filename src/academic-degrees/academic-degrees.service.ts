import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAcademicDegreesDto } from './dto/create-academic-degrees.dto';
import { AcademicDegreesDto } from './dto/academic-degrees.dto';
import { UpdateAcademicDegreesDto } from './dto/update-academic-degrees.dto';

@Injectable()
export class AcademicDegreesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAcademicDegreesDto) {
    return await this.prisma.academicDegrees.create({ data: dto });
  }
  async getAll(): Promise<AcademicDegreesDto[]> {
    return await this.prisma.academicDegrees.findMany();
  }

  async getById(id: number): Promise<AcademicDegreesDto> {
    const academicDegree = await this.prisma.academicDegrees.findUnique({
      where: { id: Number(id) },
    });
    if (!academicDegree)
      throw new NotFoundException('Ученая степень с таким id не найдена!');
    return academicDegree;
  }

  async update(
    id: number,
    dto: UpdateAcademicDegreesDto,
  ): Promise<AcademicDegreesDto> {
    await this.getById(id);
    return await this.prisma.academicDegrees.update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.prisma.academicDegrees.delete({ where: { id: Number(id) } });
  }
}
