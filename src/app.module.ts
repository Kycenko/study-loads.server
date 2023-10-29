import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './tables/groups/groups.module';
import { SpecialitiesModule } from './tables/specialities/specialities.module';
import { SubjectsModule } from './tables/subjects/subjects.module';
import { TeachersModule } from './tables/teachers/teachers.module';
import { AcademicDegreesModule } from './tables/academic-degrees/academic-degrees.module';
import { StudyLoadsModule } from './tables/study-loads/study-loads.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GroupsModule,
    SpecialitiesModule,
    SubjectsModule,
    TeachersModule,
    AcademicDegreesModule,
    StudyLoadsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
