import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSubjectsDto } from './dto/create-subjects.dto';
import { UpdateSubjectsDto } from './dto/update-subjects.dto';
import { SubjectsDto } from './dto/subjects.dto';

@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSubjectsDto) {
    return await this.prisma.subjects.create({ data: dto });
  }
  async getAll(): Promise<SubjectsDto[]> {
    return await this.prisma.subjects.findMany();
  }

  async getById(id: number): Promise<SubjectsDto> {
    const subject = await this.prisma.subjects.findUnique({
      where: { id: Number(id) },
    });
    if (!subject) throw new NotFoundException('Предмет с таким id не найден!');
    return subject;
  }

  async update(id: number, dto: UpdateSubjectsDto): Promise<SubjectsDto> {
    await this.getById(id);
    return await this.prisma.subjects.update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.prisma.subjects.delete({ where: { id: Number(id) } });
  }
}
