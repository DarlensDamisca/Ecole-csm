import { BrowserRouter } from "react-router-dom"
import { DeleteClassroomModal } from "@/polymet/components/delete-classroom-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function DeleteClassroomModalRender() {
  const [fondamentaleOpen, setFondamentaleOpen] = useState(false)
  const [secondaireOpen, setSecondaireOpen] = useState(false)
  const [emptyClassroomOpen, setEmptyClassroomOpen] = useState(false)

  const fondamentaleClassroom = {
    id: 'c1',
    name: 'A'
  }

  const fondamentaleLevel = {
    name: '7e',
    niveau: 'Fondamentale'
  }

  const secondaireClassroom = {
    id: 'c6',
    name: 'LLA'
  }

  const secondaireLevel = {
    name: 'NSI',
    niveau: 'Nouveau Secondaire'
  }

  const emptyClassroom = {
    id: 'c10',
    name: 'B'
  }

  const emptyLevel = {
    name: '8e',
    niveau: 'Fondamentale'
  }

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Delete Classroom Modal</h1>
          <p className="text-muted-foreground">Modal de confirmation pour supprimer une salle ou filière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Fondamentale - Salle avec élèves</h3>
            <DeleteClassroomModal
              open={fondamentaleOpen}
              onOpenChange={setFondamentaleOpen}
              classroom={fondamentaleClassroom}
              level={fondamentaleLevel}
              studentCount={32}
              onConfirm={() => console.log('Delete fondamentale classroom')}
              trigger={
                <Button variant="destructive" onClick={() => setFondamentaleOpen(true)}>
                  Supprimer Salle A — 7e
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Secondaire - Filière avec élèves</h3>
            <DeleteClassroomModal
              open={secondaireOpen}
              onOpenChange={setSecondaireOpen}
              classroom={secondaireClassroom}
              level={secondaireLevel}
              studentCount={28}
              onConfirm={() => console.log('Delete secondaire classroom')}
              trigger={
                <Button variant="destructive" onClick={() => setSecondaireOpen(true)}>
                  Supprimer filière LLA — NSI
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Salle vide (0 élèves)</h3>
            <DeleteClassroomModal
              open={emptyClassroomOpen}
              onOpenChange={setEmptyClassroomOpen}
              classroom={emptyClassroom}
              level={emptyLevel}
              studentCount={0}
              onConfirm={() => console.log('Delete empty classroom')}
              trigger={
                <Button variant="destructive" onClick={() => setEmptyClassroomOpen(true)}>
                  Supprimer Salle B — 8e (vide)
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
