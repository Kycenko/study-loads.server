import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TeachersController],
  providers: [PrismaService, TeachersService],
})
export class TeachersModule {}
