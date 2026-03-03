import { BrowserRouter } from "react-router-dom"
import { CreateLevelModal } from "@/polymet/components/create-level-modal"

export default function CreateLevelModalRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Level Modal</h1>
          <p className="text-muted-foreground">Modal pour créer une nouvelle classe</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <CreateLevelModal
              onSubmit={(data) => console.log('Submitted:', data)}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}