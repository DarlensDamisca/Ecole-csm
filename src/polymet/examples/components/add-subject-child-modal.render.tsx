import { BrowserRouter } from "react-router-dom"
import { AddSubjectChildModal } from "@/polymet/components/add-subject-child-modal"

export default function AddSubjectChildModalRender() {
  const mockParent = {
    id: '1',
    code: 'COM101',
    name: 'Communication',
    rubrique: 'R1' as const,
    coefficient: 60
  }

  const mockExistingChildren = [
    { id: 'c1', code: 'COML01', parentId: '1', coefficient: 30 }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Add Subject Child Modal</h1>
          <p className="text-muted-foreground">Modal pour ajouter une sous-matière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <AddSubjectChildModal
              parent={mockParent}
              existingChildren={mockExistingChildren}
              onSubmit={(data) => console.log('Submitted:', data)}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
