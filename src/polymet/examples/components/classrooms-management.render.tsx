import { BrowserRouter } from "react-router-dom"
import { ClassroomsManagement } from "@/polymet/components/classrooms-management"
import { classrooms, levels, students } from "@/polymet/data/school-data"

export default function ClassroomsManagementRender() {
  const yearId = 'ay-2024'
  const yearClassrooms = classrooms.filter(c => c.academicYearId === yearId)
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)

  return (
    <BrowserRouter>
      <div className="p-8 bg-background min-h-screen">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Classrooms Management</h1>
          <p className="text-muted-foreground">Gestion des salles par classe</p>
        </div>

        <ClassroomsManagement
          classrooms={yearClassrooms}
          levels={yearLevels}
          students={yearStudents}
          onAddClassroom={(levelId, data) => console.log('Add classroom:', levelId, data)}
          onEditClassroom={(id, data) => console.log('Edit classroom:', id, data)}
          onDeleteClassroom={(id) => console.log('Delete classroom:', id)}
        />
      </div>
    </BrowserRouter>
  )
}
