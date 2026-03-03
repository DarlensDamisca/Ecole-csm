import { BrowserRouter } from "react-router-dom"
import { ReopenPeriodModalV2 } from "@/polymet/components/reopen-period-modal-v2"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ReopenPeriodModalV2Render() {
  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Reopen Period Modal V2</h1>
          <p className="text-muted-foreground">Modal de confirmation pour réouvrir une étape clôturée avec sélection de raison</p>
        </div>

        <div className="space-y-4">
          <Button onClick={() => setOpen(true)}>
            Ouvrir le modal
          </Button>

          <ReopenPeriodModalV2
            open={open}
            onOpenChange={setOpen}
            periodName="1ère Étape"
            onConfirm={(reason) => console.log('Reopen with reason:', reason)}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}
