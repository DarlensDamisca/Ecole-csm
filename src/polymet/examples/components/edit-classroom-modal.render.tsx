import { BrowserRouter } from "react-router-dom"
import { EditClassroomModal } from "@/polymet/components/edit-classroom-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function EditClassroomModalRender() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  const fondamentaleClassroom = {
    id: "c1",
    name: "A",
    capacity: 25,
    description: "Salle principale du niveau 7e"
  }

  const secondaireClassroom = {
    id: "c2",
    name: "LLA",
    capacity: 28,
    description: "Filière Lettres, Langues et Arts"
  }

  const fondamentaleLevel = {
    name: "7e",
    niveau: "Fondamentale"
  }

  const secondaireLevel = {
    name: "NSI",
    niveau: "Nouveau Secondaire"
  }

  // Existing classrooms for filtering
  const existingFondamentaleClassrooms = [
    { id: "c1", name: "A" },
    { id: "c2", name: "B" },
    { id: "c3", name: "C" }
  ]

  const existingSecondaireClassrooms = [
    { id: "c1", name: "LLA" },
    { id: "c2", name: "SES" }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Edit Classroom Modal</h1>
          <p className="text-muted-foreground">Modal pour modifier une salle/filière avec détection des changements</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Modifier une salle (Fondamentale)</h3>
            <EditClassroomModal
              classroom={fondamentaleClassroom}
              level={fondamentaleLevel}
              existingClassrooms={existingFondamentaleClassrooms}
              open={open1}
              onOpenChange={setOpen1}
              onConfirm={(data) => console.log('Edit fondamentale classroom:', data)}
              trigger={
                <Button onClick={() => setOpen1(true)}>
                  Modifier Salle A — 7e
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Modifier une filière (Secondaire)</h3>
            <EditClassroomModal
              classroom={secondaireClassroom}
              level={secondaireLevel}
              existingClassrooms={existingSecondaireClassrooms}
              open={open2}
              onOpenChange={setOpen2}
              onConfirm={(data) => console.log('Edit secondaire classroom:', data)}
              trigger={
                <Button onClick={() => setOpen2(true)}>
                  Modifier filière LLA — NSI
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
