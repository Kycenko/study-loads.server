import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GroupsModule } from './groups/groups.module';
import { SpecialitiesModule } from './specialities/specialities.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TeachersModule } from './teachers/teachers.module';
import { AcademicDegreesModule } from './academic-degrees/academic-degrees.module';
import { StudyLoadsModule } from './study-loads/study-loads.module';

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
