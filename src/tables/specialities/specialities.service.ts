import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SpecialitiesDto } from './dto/specialities.dto';
import { BaseRepository } from 'src/repositories/base.repository';

@Injectable()
export class SpecialitiesService extends BaseRepository<SpecialitiesDto> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma, 'specialities');
  }
}
