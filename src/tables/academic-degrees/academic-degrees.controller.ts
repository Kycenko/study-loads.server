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
import { AcademicDegreesService } from './academic-degrees.service';
import { CreateAcademicDegreesDto } from './dto/create-academic-degrees.dto';
import { UpdateAcademicDegreesDto } from './dto/update-academic-degrees.dto';

@Controller('academic-degrees')
export class AcademicDegreesController {
  constructor(
    private readonly academicDegreesService: AcademicDegreesService,
  ) {}
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateAcademicDegreesDto) {
    return this.academicDegreesService.create(dto);
  }

  @Get()
  getAll(
    @Query('search') search: string,
    @Query('orderByField') orderByField: string,
    @Query('orderBy') orderBy: 'asc' | 'desc',
  ) {
    const orderByFieldToUse = orderByField || 'id';
    return this.academicDegreesService.getAll(
      search,
      orderByFieldToUse,
      orderBy,
    );
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.academicDegreesService.getById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() dto: UpdateAcademicDegreesDto) {
    return this.academicDegreesService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.academicDegreesService.delete(id);
  }
}
