import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateGroupsDto } from './dto/create-groups.dto';
import { UpdateGroupsDto } from './dto/update-groups.dto';
import { GroupsDto } from './dto/groups.dto';

@Injectable()
export class GroupsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGroupsDto) {
    return await this.prisma.groups.create({ data: dto });
  }
  async getAll(): Promise<GroupsDto[]> {
    return await this.prisma.groups.findMany();
  }

  async getById(id: number): Promise<GroupsDto> {
    const group = await this.prisma.groups.findUnique({
      where: { id: Number(id) },
    });
    if (!group) throw new NotFoundException('Группа с таким id не найдена!');
    return group;
  }

  async update(id: number, dto: UpdateGroupsDto): Promise<GroupsDto> {
    await this.getById(id);
    return await this.prisma.groups.update({
      where: { id: Number(id) },
      data: dto,
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    await this.prisma.groups.delete({ where: { id: Number(id) } });
  }
}
