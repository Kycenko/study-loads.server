import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AcademicDegreesDto } from './dto/academic-degrees.dto';
import { BaseRepository } from 'src/repositories/base.repository';

@Injectable()
export class AcademicDegreesService extends BaseRepository<AcademicDegreesDto> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma, 'academicDegrees');
  }
}
