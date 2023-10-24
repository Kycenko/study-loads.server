import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateStudyLoadsDto } from './dto/create-study-load.dto';
import { StudyLoadsDto } from './dto/study-load.dto';
import { UpdateStudyLoadsDto } from './dto/update-study-load.dto';

@Injectable()
export class StudyLoadsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStudyLoadsDto) {
    return await this.prisma.studyLoads.create({ data: dto });
  }
  async getAll(): Promise<StudyLoadsDto[]> {
    return await this.prisma.studyLoads.findMany();
  }

  async getById(id: number): Promise<StudyLoadsDto> {
    const studyLoad = await this.prisma.studyLoads.findUnique({
      where: { id: Number(id) },
    });
    if (!studyLoad)
      throw new NotFoundException('Нагрузка с таким id не найдена!');
    return studyLoad;
  }

  async update(id: number, dto: UpdateStudyLoadsDto): Promise<StudyLoadsDto> {
    await this.getById(id);
    return await this.prisma.studyLoads.update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.prisma.studyLoads.delete({ where: { id: Number(id) } });
  }
}
