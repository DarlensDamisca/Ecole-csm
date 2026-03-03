import { BrowserRouter } from "react-router-dom"
import { StudentFormDialog } from "@/polymet/components/student-form-dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon, PencilIcon } from "lucide-react"
import { levels, students } from "@/polymet/data/school-data"
import { useState } from "react"

export default function StudentFormDialogRender() {
  const [createOpen, setCreateOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  
  const yearId = 'ay-2024'
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)
  const sampleStudent = yearStudents[0]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Student Form Dialog</h1>
          <p className="text-muted-foreground">Modal pour inscrire ou modifier un élève</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Inscrire un nouvel élève</h3>
            <StudentFormDialog
              open={createOpen}
              onOpenChange={setCreateOpen}
              levels={yearLevels}
              yearId={yearId}
              existingStudents={yearStudents}
              onSubmit={(data) => console.log('Create student:', data)}
              trigger={
                <Button>
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Inscrire un élève
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Modifier un élève existant</h3>
            <StudentFormDialog
              open={editOpen}
              onOpenChange={setEditOpen}
              student={sampleStudent}
              levels={yearLevels}
              yearId={yearId}
              existingStudents={yearStudents}
              onSubmit={(data) => console.log('Update student:', data)}
              trigger={
                <Button variant="outline">
                  <PencilIcon className="mr-2 h-4 w-4" />
                  Modifier {sampleStudent.firstName} {sampleStudent.lastName}
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}