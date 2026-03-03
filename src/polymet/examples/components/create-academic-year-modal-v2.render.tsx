import { BrowserRouter } from "react-router-dom"
import { CreateAcademicYearModalV2 } from "@/polymet/components/create-academic-year-modal-v2"
import { academicYears } from "@/polymet/data/school-data"

export default function CreateAcademicYearModalV2Render() {
  const activeYear = academicYears.find(y => y.status === 'active')
  const archivedYears = academicYears.filter(y => y.status === 'archived')

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Create Academic Year Modal V2</h1>
          <p className="text-muted-foreground">Modal pour créer une nouvelle année avec auto-génération du nom</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec bouton par défaut</h3>
            <CreateAcademicYearModalV2
              activeYear={activeYear}
              archivedYears={archivedYears}
              onSubmit={(data) => console.log('Submitted:', data)}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}