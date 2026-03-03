import { BrowserRouter } from "react-router-dom"
import { ReopenPeriodModal } from "@/polymet/components/reopen-period-modal"
import { Button } from "@/components/ui/button"

export default function ReopenPeriodModalRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Reopen Period Modal</h1>
          <p className="text-muted-foreground">Modal de confirmation pour réouvrir une étape</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <ReopenPeriodModal
              periodName="1ère Étape"
              onConfirm={(reason) => console.log('Reopen with reason:', reason)}
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec trigger personnalisé</h3>
            <ReopenPeriodModal
              periodName="2ème Étape"
              onConfirm={(reason) => console.log('Reopen with reason:', reason)}
              trigger={
                <Button variant="outline" size="sm">
                  Réouvrir l'étape
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}