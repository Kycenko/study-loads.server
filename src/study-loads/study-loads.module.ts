import { Module } from '@nestjs/common';
import { StudyLoadsService } from './study-loads.service';
import { StudyLoadsController } from './study-loads.controller';
import { PrismaService } from './../../prisma/prisma.service';

@Module({
  controllers: [StudyLoadsController],
  providers: [PrismaService, StudyLoadsService],
})
export class StudyLoadsModule {}
