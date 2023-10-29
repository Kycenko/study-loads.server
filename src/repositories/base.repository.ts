import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { IBaseRepository } from './base.interface.repository';
import { searchParams } from 'src/utils/searchParams';

export class BaseRepository<T> implements IBaseRepository<T> {
  constructor(
    private prismaService: PrismaService,
    private model: string,
  ) {}

  async create(dto: any): Promise<T> {
    return await this.prismaService[this.model].create({ data: dto });
  }

  async getAll(
    query: string,
    orderByField: string,
    orderBy: 'asc' | 'desc',
  ): Promise<T[]> {
    const params = searchParams(query, orderByField, orderBy);
    return await this.prismaService[this.model].findMany(params);
  }

  async getById(id: number): Promise<T> {
    const entity = await this.prismaService[this.model].findUnique({
      where: { id: Number(id) },
    });
    if (!entity) {
      throw new NotFoundException(`${this.model} with id ${id} not found`);
    }
    return entity;
  }

  async update(id: number, dto: any): Promise<T> {
    await this.getById(id);
    return await this.prismaService[this.model].update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.prismaService[this.model].delete({ where: { id: Number(id) } });
  }
}
