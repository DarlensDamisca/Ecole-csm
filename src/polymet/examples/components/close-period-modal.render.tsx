import { BrowserRouter } from "react-router-dom"
import { ClosePeriodModal } from "@/polymet/components/close-period-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ClosePeriodModalRender() {
  const [open, setOpen] = useState(false)

  const mockClassroomStatuses = [
    {
      className: '7e',
      classroomName: 'Salle A',
      gradesEntered: 24,
      totalGrades: 24,
      status: 'complete' as const
    },
    {
      className: '7e',
      classroomName: 'Salle B',
      gradesEntered: 20,
      totalGrades: 24,
      status: 'incomplete' as const
    },
    {
      className: '8e',
      classroomName: 'Salle A',
      gradesEntered: 24,
      totalGrades: 24,
      status: 'complete' as const
    },
    {
      className: 'NSI',
      classroomName: 'LLA',
      gradesEntered: 0,
      totalGrades: 28,
      status: 'not-started' as const
    }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Close Period Modal</h1>
          <p className="text-muted-foreground">Modal de confirmation pour clôturer une étape avec résumé des notes</p>
        </div>

        <div className="space-y-4">
          <Button onClick={() => setOpen(true)}>
            Ouvrir le modal
          </Button>

          <ClosePeriodModal
            open={open}
            onOpenChange={setOpen}
            periodName="2ème Étape"
            classroomStatuses={mockClassroomStatuses}
            onConfirm={() => console.log('Period closed')}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}
