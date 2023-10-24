import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSpecialitiesDto } from './dto/create-specialities.dto';
import { UpdateSpecialitiesDto } from './dto/update-specialities.dto';
import { SpecialitiesDto } from './dto/specialities.dto';

@Injectable()
export class SpecialitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSpecialitiesDto) {
    return await this.prisma.specialities.create({ data: dto });
  }
  async getAll(): Promise<SpecialitiesDto[]> {
    return await this.prisma.specialities.findMany();
  }

  async getById(id: number): Promise<SpecialitiesDto> {
    const speciality = await this.prisma.specialities.findUnique({
      where: { id: Number(id) },
    });
    if (!speciality)
      throw new NotFoundException('Специальность с таким id не найдена!');
    return speciality;
  }

  async update(
    id: number,
    dto: UpdateSpecialitiesDto,
  ): Promise<SpecialitiesDto> {
    await this.getById(id);
    return await this.prisma.specialities.update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.prisma.specialities.delete({ where: { id: Number(id) } });
  }
}
