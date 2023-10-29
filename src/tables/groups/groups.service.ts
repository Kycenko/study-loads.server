import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { GroupsDto } from './dto/groups.dto';
import { BaseRepository } from 'src/repositories/base.repository';

@Injectable()
export class GroupsService extends BaseRepository<GroupsDto> {
  constructor(private prisma: PrismaService) {
    super(prisma, 'groups');
  }
}
