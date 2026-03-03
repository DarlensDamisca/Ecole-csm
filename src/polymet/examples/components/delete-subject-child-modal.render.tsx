import { BrowserRouter } from "react-router-dom"
import { DeleteSubjectChildModal } from "@/polymet/components/delete-subject-child-modal"

export default function DeleteSubjectChildModalRender() {
  const mockChild = {
    id: 'c1',
    name: 'Communication Française'
  }

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Delete Subject Child Modal</h1>
          <p className="text-muted-foreground">Modal pour supprimer une sous-matière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <DeleteSubjectChildModal
              child={mockChild}
              studentCount={32}
              onConfirm={() => console.log('Confirmed deletion')}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
