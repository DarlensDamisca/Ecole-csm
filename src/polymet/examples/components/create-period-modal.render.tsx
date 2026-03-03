import { BrowserRouter } from "react-router-dom"
import { CreatePeriodModal } from "@/polymet/components/create-period-modal"

export default function CreatePeriodModalRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Period Modal</h1>
          <p className="text-muted-foreground">Modal pour créer une nouvelle étape</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <CreatePeriodModal
              onSubmit={(data) => console.log('Submitted:', data)}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}