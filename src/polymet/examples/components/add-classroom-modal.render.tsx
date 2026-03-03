import { BrowserRouter } from "react-router-dom"
import { AddClassroomModal } from "@/polymet/components/add-classroom-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AddClassroomModalRender() {
  const [fondamentaleOpen, setFondamentaleOpen] = useState(false)
  const [secondaireOpen, setSecondaireOpen] = useState(false)

  const fondamentaleLevel = {
    id: '1',
    name: '7e',
    niveau: 'Fondamentale'
  }

  const secondaireLevel = {
    id: '4',
    name: 'NSI',
    niveau: 'Nouveau Secondaire'
  }

  const fondamentaleClassrooms = [
    { id: 'c1', name: 'A', levelId: '1', capacity: 25 },
    { id: 'c2', name: 'B', levelId: '1', capacity: 24 }
  ]

  const secondaireClassrooms = [
    { id: 'c6', name: 'LLA', levelId: '4', capacity: 28 },
    { id: 'c7', name: 'SES', levelId: '4', capacity: 25 }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Add Classroom Modal</h1>
          <p className="text-muted-foreground">Modal pour ajouter une salle ou filière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Fondamentale - Ajouter une salle</h3>
            <AddClassroomModal
              open={fondamentaleOpen}
              onOpenChange={setFondamentaleOpen}
              level={fondamentaleLevel}
              existingClassrooms={fondamentaleClassrooms}
              onSubmit={(data) => console.log('Create fondamentale classroom:', data)}
              trigger={
                <Button>
                  Ajouter salle — 7e
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Secondaire - Ajouter une filière</h3>
            <AddClassroomModal
              open={secondaireOpen}
              onOpenChange={setSecondaireOpen}
              level={secondaireLevel}
              existingClassrooms={secondaireClassrooms}
              onSubmit={(data) => console.log('Create secondaire classroom:', data)}
              trigger={
                <Button>
                  Ajouter filière — NSI
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
