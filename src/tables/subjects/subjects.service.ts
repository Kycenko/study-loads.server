import { Injectable } from '@nestjs/common'
import { PrismaService } from 'prisma/prisma.service'
import { BaseRepository } from 'src/repositories/base.repository'
import { SubjectsDto } from './dto/subjects.dto'

@Injectable()
export class SubjectsService extends BaseRepository<SubjectsDto> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma, 'subjects')
  }
}
