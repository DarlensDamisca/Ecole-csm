import { BrowserRouter } from "react-router-dom"
import { CreateSubjectParentModal } from "@/polymet/components/create-subject-parent-modal"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export default function CreateSubjectParentModalRender() {
  const mockExistingSubjects = [
    { code: 'COM101' },
    { code: 'MAT101' },
    { code: 'SCI101' }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Subject Parent Modal</h1>
          <p className="text-muted-foreground">Modal pour créer une nouvelle matière</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <CreateSubjectParentModal
              yearName="2024-2025"
              existingSubjects={mockExistingSubjects}
              onSubmit={(data) => console.log('Submitted:', data)}
              trigger={
                <Button style={{ backgroundColor: '#5A7085', color: '#FFFFFF' }}>
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Nouvelle matière
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
