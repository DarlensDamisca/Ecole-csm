import { BrowserRouter } from "react-router-dom"
import { EditSubjectChildModal } from "@/polymet/components/edit-subject-child-modal"

export default function EditSubjectChildModalRender() {
  const mockParent = {
    id: '1',
    code: 'COM101',
    name: 'Communication',
    coefficient: 60
  }

  const mockChild = {
    id: 'c1',
    code: 'COML01',
    parentId: '1',
    name: 'Communication Française',
    type: 'L' as const,
    coefficient: 30
  }

  const mockExistingChildren = [
    mockChild,
    { id: 'c2', code: 'COML02', parentId: '1', name: 'Communication Créole', type: 'L' as const, coefficient: 30 }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Edit Subject Child Modal</h1>
          <p className="text-muted-foreground">Modal pour modifier une sous-matière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <EditSubjectChildModal
              child={mockChild}
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
