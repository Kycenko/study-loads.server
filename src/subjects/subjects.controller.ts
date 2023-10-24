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
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectsDto } from './dto/create-subjects.dto';
import { UpdateSubjectsDto } from './dto/update-subjects.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateSubjectsDto) {
    return this.subjectsService.create(dto);
  }

  @Get()
  getAll() {
    return this.subjectsService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.subjectsService.getById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() dto: UpdateSubjectsDto) {
    return this.subjectsService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subjectsService.delete(id);
  }
}
