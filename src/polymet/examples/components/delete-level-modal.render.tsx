import { BrowserRouter } from "react-router-dom"
import { DeleteLevelModal } from "@/polymet/components/delete-level-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function DeleteLevelModalRender() {
  const [fondamentaleOpen, setFondamentaleOpen] = useState(false)
  const [secondaireOpen, setSecondaireOpen] = useState(false)
  const [smallClassOpen, setSmallClassOpen] = useState(false)

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

  const smallClassLevel = {
    id: '2',
    name: '8e',
    niveau: 'Fondamentale'
  }

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Delete Level Modal</h1>
          <p className="text-muted-foreground">Modal de confirmation pour supprimer une classe (parent row)</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Fondamentale - 7e (2 salles, 62 élèves)</h3>
            <DeleteLevelModal
              open={fondamentaleOpen}
              onOpenChange={setFondamentaleOpen}
              level={fondamentaleLevel}
              classroomCount={2}
              studentCount={62}
              onConfirm={() => console.log('Delete fondamentale level')}
              trigger={
                <Button variant="destructive" onClick={() => setFondamentaleOpen(true)}>
                  Supprimer 7e
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Secondaire - NSI (4 filières, 105 élèves)</h3>
            <DeleteLevelModal
              open={secondaireOpen}
              onOpenChange={setSecondaireOpen}
              level={secondaireLevel}
              classroomCount={4}
              studentCount={105}
              onConfirm={() => console.log('Delete secondaire level')}
              trigger={
                <Button variant="destructive" onClick={() => setSecondaireOpen(true)}>
                  Supprimer NSI
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Fondamentale - 8e (1 salle, 18 élèves)</h3>
            <DeleteLevelModal
              open={smallClassOpen}
              onOpenChange={setSmallClassOpen}
              level={smallClassLevel}
              classroomCount={1}
              studentCount={18}
              onConfirm={() => console.log('Delete small class level')}
              trigger={
                <Button variant="destructive" onClick={() => setSmallClassOpen(true)}>
                  Supprimer 8e
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
