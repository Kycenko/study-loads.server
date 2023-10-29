import { Module } from '@nestjs/common';
import { SpecialitiesService } from './specialities.service';
import { SpecialitiesController } from './specialities.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SpecialitiesController],
  providers: [PrismaService, SpecialitiesService],
})
export class SpecialitiesModule {}
