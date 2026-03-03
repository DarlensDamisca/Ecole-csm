import { BrowserRouter } from "react-router-dom"
import { EditSubjectParentModal } from "@/polymet/components/edit-subject-parent-modal"

export default function EditSubjectParentModalRender() {
  const mockSubject = {
    id: '1',
    code: 'COM101',
    name: 'Communication',
    rubrique: 'R1' as const,
    coefficient: 60
  }

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Edit Subject Parent Modal</h1>
          <p className="text-muted-foreground">Modal pour modifier une matière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <EditSubjectParentModal
              subject={mockSubject}
              onSubmit={(data) => console.log('Submitted:', data)}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
