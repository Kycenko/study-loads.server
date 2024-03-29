import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { StudyLoadsService } from './study-loads.service';
import { CreateStudyLoadsDto } from './dto/create-study-load.dto';
import { UpdateStudyLoadsDto } from './dto/update-study-load.dto';

@Controller('study-loads')
export class StudyLoadsController {
  constructor(private readonly studyLoadsService: StudyLoadsService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateStudyLoadsDto) {
    return this.studyLoadsService.create(dto);
  }

  @Get()
  getAll(
    @Query('search') search: string,
    @Query('orderByField') orderByField: string,
    @Query('orderBy') orderBy: 'asc' | 'desc',
  ) {
    const orderByFieldToUse = orderByField || 'id';
    return this.studyLoadsService.getAll(search, orderByFieldToUse, orderBy);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.studyLoadsService.getById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() dto: UpdateStudyLoadsDto) {
    return this.studyLoadsService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.studyLoadsService.delete(id);
  }
}
