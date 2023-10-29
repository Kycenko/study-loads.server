import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BaseRepository } from 'src/repositories/base.repository';
import { StudyLoadsDto } from './dto/study-load.dto';

@Injectable()
export class StudyLoadsService extends BaseRepository<StudyLoadsDto> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma, 'studyLoads');
  }
}
