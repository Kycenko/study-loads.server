import { Module } from '@nestjs/common';
import { AcademicDegreesService } from './academic-degrees.service';
import { AcademicDegreesController } from './academic-degrees.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AcademicDegreesController],
  providers: [PrismaService, AcademicDegreesService],
})
export class AcademicDegreesModule {}
