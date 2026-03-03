import { academicYears, levels, classrooms, subjects, subjectParents, subjectChildren, students, teachers, grades, periods, schoolInfo, holidays, schoolEvents } from "@/polymet/data/school-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchoolDataRender() {
  return (
    <div className="p-8 space-y-6 bg-[#f7f7f6] min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-[#1f1a18] mb-2">Données Scolaires</h1>
        <p className="text-[#5b6d77]">Données mockées complètes pour l'application</p>
      </div>

      <Tabs defaultValue="years" className="w-full">
        <TabsList className="bg-white border border-[#bebbb4]">
          <TabsTrigger value="years">Années</TabsTrigger>
          <TabsTrigger value="levels">Niveaux</TabsTrigger>
          <TabsTrigger value="classrooms">Salles</TabsTrigger>
          <TabsTrigger value="subjects">Matières</TabsTrigger>
          <TabsTrigger value="students">Élèves</TabsTrigger>
          <TabsTrigger value="teachers">Professeurs</TabsTrigger>
          <TabsTrigger value="grades">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="years" className="space-y-4">
          {academicYears.map(year => (
            <Card key={year.id} className="border-[#bebbb4]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#1f1a18]">{year.name}</CardTitle>
                  {year.isActive && <Badge className="bg-[#c3b595]">Active</Badge>}
                </div>
                <CardDescription>{year.startDate} - {year.endDate}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="levels" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {levels.map(level => (
            <Card key={level.id} className="border-[#bebbb4]">
              <CardHeader>
                <CardTitle className="text-[#1f1a18] text-base">{level.name}</CardTitle>
                <CardDescription>Ordre: {level.order}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="classrooms" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classrooms.map(classroom => (
            <Card key={classroom.id} className="border-[#bebbb4]">
              <CardHeader>
                <CardTitle className="text-[#1f1a18] text-base">{classroom.name}</CardTitle>
                <CardDescription>Capacité: {classroom.capacity} élèves</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="subjects" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map(subject => (
            <Card key={subject.id} className="border-[#bebbb4]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[#1f1a18] text-base">{subject.name}</CardTitle>
                  <Badge variant="outline">{subject.code}</Badge>
                </div>
                <CardDescription>Coefficient: {subject.coefficient}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {students.map(student => (
              <Card key={student.id} className="border-[#bebbb4]">
                <CardHeader>
                  <CardTitle className="text-[#1f1a18] text-base">
                    {student.firstName} {student.lastName}
                  </CardTitle>
                  <CardDescription>Matricule: {student.matricule}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teachers" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teachers.map(teacher => (
              <Card key={teacher.id} className="border-[#bebbb4]">
                <CardHeader>
                  <CardTitle className="text-[#1f1a18] text-base">
                    {teacher.firstName} {teacher.lastName}
                  </CardTitle>
                  <CardDescription>{teacher.email}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="grades" className="space-y-4">
          <p className="text-[#5b6d77]">Total: {grades.length} notes enregistrées</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}