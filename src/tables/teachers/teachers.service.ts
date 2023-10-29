import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BaseRepository } from 'src/repositories/base.repository';
import { TeachersDto } from './dto/teachers.dto';

@Injectable()
export class TeachersService extends BaseRepository<TeachersDto> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma, 'teachers');
  }
}
