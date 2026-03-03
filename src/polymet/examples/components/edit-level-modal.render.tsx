import { BrowserRouter } from "react-router-dom"
import { EditLevelModal } from "@/polymet/components/edit-level-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function EditLevelModalRender() {
  const [fondamentaleOpen, setFondamentaleOpen] = useState(false)
  const [secondaireOpen, setSecondaireOpen] = useState(false)
  const [withDescriptionOpen, setWithDescriptionOpen] = useState(false)

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

  const levelWithDescription = {
    id: '2',
    name: '8e',
    niveau: 'Fondamentale',
    description: 'Classe de 8ème année fondamentale avec programme enrichi en mathématiques et sciences.'
  }

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Edit Level Modal</h1>
          <p className="text-muted-foreground">Modal pour modifier une classe (parent row)</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Fondamentale - Sans description</h3>
            <EditLevelModal
              open={fondamentaleOpen}
              onOpenChange={setFondamentaleOpen}
              level={fondamentaleLevel}
              onConfirm={(data) => console.log('Update fondamentale level:', data)}
              trigger={
                <Button onClick={() => setFondamentaleOpen(true)}>
                  Modifier 7e
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Secondaire - Sans description</h3>
            <EditLevelModal
              open={secondaireOpen}
              onOpenChange={setSecondaireOpen}
              level={secondaireLevel}
              onConfirm={(data) => console.log('Update secondaire level:', data)}
              trigger={
                <Button onClick={() => setSecondaireOpen(true)}>
                  Modifier NSI
                </Button>
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec description existante</h3>
            <EditLevelModal
              open={withDescriptionOpen}
              onOpenChange={setWithDescriptionOpen}
              level={levelWithDescription}
              onConfirm={(data) => console.log('Update level with description:', data)}
              trigger={
                <Button onClick={() => setWithDescriptionOpen(true)}>
                  Modifier 8e (avec description)
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
