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
import { TeachersService } from './teachers.service';
import { CreateTeachersDto } from './dto/create-teachers.dto';
import { UpdateTeachersDto } from './dto/update-teachers.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateTeachersDto) {
    return this.teachersService.create(dto);
  }

  @Get()
  getAll() {
    return this.teachersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.teachersService.getById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() dto: UpdateTeachersDto) {
    return this.teachersService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.teachersService.delete(id);
  }
}
