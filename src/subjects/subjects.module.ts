import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SubjectsController],
  providers: [PrismaService, SubjectsService],
})
export class SubjectsModule {}
