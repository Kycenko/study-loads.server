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
import { GroupsService } from './groups.service';
import { CreateGroupsDto } from './dto/create-groups.dto';
import { UpdateGroupsDto } from './dto/update-groups.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateGroupsDto) {
    return this.groupsService.create(dto);
  }

  @Get()
  getAll(
    @Query('search') search: string,
    @Query('orderByField') orderByField: string,
    @Query('orderBy') orderBy: 'asc' | 'desc',
  ) {
    const orderByFieldToUse = orderByField || 'id';
    return this.groupsService.getAll(search, orderByFieldToUse, orderBy);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.groupsService.getById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: number, @Body() dto: UpdateGroupsDto) {
    return this.groupsService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.groupsService.delete(id);
  }
}
