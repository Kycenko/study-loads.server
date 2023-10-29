-- CreateTable
CREATE TABLE "Groups" (
    "id" SERIAL NOT NULL,
    "specialityId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "course" INTEGER NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyLoads" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "numberOfHours" INTEGER NOT NULL,
    "numberOfLectures" INTEGER NOT NULL,
    "numberOfLaboratoryWorks" INTEGER NOT NULL,

    CONSTRAINT "StudyLoads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subjects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,

    CONSTRAINT "Subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" SERIAL NOT NULL,
    "academicDegreeId" INTEGER NOT NULL,
    "workExperience" INTEGER NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,

    CONSTRAINT "Teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "Specialities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicDegrees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "educationalInstitution" TEXT NOT NULL,

    CONSTRAINT "AcademicDegrees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Groups" ADD CONSTRAINT "Groups_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Specialities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyLoads" ADD CONSTRAINT "StudyLoads_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyLoads" ADD CONSTRAINT "StudyLoads_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyLoads" ADD CONSTRAINT "StudyLoads_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teachers" ADD CONSTRAINT "Teachers_academicDegreeId_fkey" FOREIGN KEY ("academicDegreeId") REFERENCES "AcademicDegrees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
