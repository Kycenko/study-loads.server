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
import { SpecialitiesService } from './specialities.service';
import { CreateSpecialitiesDto } from './dto/create-specialities.dto';
import { UpdateSpecialitiesDto } from './dto/update-specialities.dto';

@Controller('specialities')
export class SpecialitiesController {
  constructor(private readonly specialitiesService: SpecialitiesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateSpecialitiesDto) {
    return this.specialitiesService.create(dto);
  }

  @Get()
  getAll() {
    return this.specialitiesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.specialitiesService.getById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() dto: UpdateSpecialitiesDto) {
    return this.specialitiesService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.specialitiesService.delete(id);
  }
}
