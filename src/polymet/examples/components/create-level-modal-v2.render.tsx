import { BrowserRouter } from "react-router-dom"
import { CreateLevelModalV2 } from "@/polymet/components/create-level-modal-v2"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CreateLevelModalV2Render() {
  const [open, setOpen] = useState(false)

  const mockExistingLevels = [
    { id: '1', name: '7e', niveau: 'Fondamentale' },
    { id: '2', name: '8e', niveau: 'Fondamentale' },
    { id: '4', name: 'NSI', niveau: 'Nouveau Secondaire' },
    { id: '5', name: 'NSII', niveau: 'Nouveau Secondaire' }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Level Modal V2</h1>
          <p className="text-muted-foreground">Modal pour créer une nouvelle classe avec filières</p>
        </div>

        <div className="space-y-4">
          <Button onClick={() => setOpen(true)}>
            Ouvrir le modal
          </Button>

          <CreateLevelModalV2
            open={open}
            onOpenChange={setOpen}
            existingLevels={mockExistingLevels}
            yearName="2024-2025"
            onSubmit={(data) => console.log('Create level:', data)}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}
