import { BrowserRouter } from "react-router-dom"
import { CreatePeriodModalV2 } from "@/polymet/components/create-period-modal-v2"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CreatePeriodModalV2Render() {
  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Period Modal V2</h1>
          <p className="text-muted-foreground">Modal pour créer une nouvelle étape avec validation complète</p>
        </div>

        <div className="space-y-4">
          <Button onClick={() => setOpen(true)}>
            Ouvrir le modal
          </Button>

          <CreatePeriodModalV2
            open={open}
            onOpenChange={setOpen}
            existingPeriodsCount={4}
            onSubmit={(data) => console.log('Create period:', data)}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}
