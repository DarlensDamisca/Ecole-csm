import { BrowserRouter } from "react-router-dom"
import { CreateClassroomModal } from "@/polymet/components/create-classroom-modal"
import { Button } from "@/components/ui/button"
import { PencilIcon } from "lucide-react"
import { levels, classrooms } from "@/polymet/data/school-data"

export default function CreateClassroomModalRender() {
  const level = levels[0]
  const levelClassrooms = classrooms.filter(c => c.levelId === level.id)
  const sampleClassroom = levelClassrooms[0]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Classroom Modal</h1>
          <p className="text-muted-foreground">Modal pour ajouter ou modifier une salle</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Ajouter une nouvelle salle</h3>
            <CreateClassroomModal
              level={level}
              existingClassrooms={levelClassrooms}
              onSubmit={(data) => console.log('Create classroom:', data)}
            />
          </div>

          {sampleClassroom && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Modifier une salle existante</h3>
              <CreateClassroomModal
                classroom={sampleClassroom}
                level={level}
                existingClassrooms={levelClassrooms}
                onSubmit={(data) => console.log('Update classroom:', data)}
                trigger={
                  <Button variant="outline">
                    <PencilIcon className="mr-2 h-4 w-4" />
                    Modifier Salle {sampleClassroom.name}
                  </Button>
                }
              />
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  )
}
