import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTeachersDto } from './dto/create-teachers.dto';
import { TeachersDto } from './dto/teachers.dto';
import { UpdateTeachersDto } from './dto/update-teachers.dto';

@Injectable()
export class TeachersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTeachersDto) {
    return await this.prisma.teachers.create({ data: dto });
  }
  async getAll(): Promise<TeachersDto[]> {
    return await this.prisma.teachers.findMany();
  }

  async getById(id: number): Promise<TeachersDto> {
    const teacher = await this.prisma.teachers.findUnique({
      where: { id: Number(id) },
    });
    if (!teacher)
      throw new NotFoundException('Преподаватель с таким id не найден!');
    return teacher;
  }

  async update(id: number, dto: UpdateTeachersDto): Promise<TeachersDto> {
    await this.getById(id);
    return await this.prisma.teachers.update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.prisma.teachers.delete({ where: { id: Number(id) } });
  }
}
