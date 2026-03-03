import { BrowserRouter } from "react-router-dom"
import { DeleteSubjectParentModal } from "@/polymet/components/delete-subject-parent-modal"

export default function DeleteSubjectParentModalRender() {
  const mockSubject = {
    id: '1',
    name: 'Communication'
  }

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Delete Subject Parent Modal</h1>
          <p className="text-muted-foreground">Modal pour supprimer une matière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <DeleteSubjectParentModal
              subject={mockSubject}
              childCount={2}
              onConfirm={() => console.log('Confirmed deletion')}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
