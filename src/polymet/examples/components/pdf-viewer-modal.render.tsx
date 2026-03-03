import { BrowserRouter } from "react-router-dom"
import { PDFViewerModal } from "@/polymet/components/pdf-viewer-modal"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { students, levels, periods, subjectParents, subjectChildren, grades } from "@/polymet/data/school-data"
import { EyeIcon } from "lucide-react"

export default function PDFViewerModalRender() {
  const [open, setOpen] = useState(false)

  const yearId = 'ay-2024'
  const yearStudents = students.filter(s => s.academicYearId === yearId).slice(0, 5)
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearPeriods = periods.filter(p => p.academicYearId === yearId)
  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === yearId)
  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === yearId)
  const yearGrades = grades.filter(g => g.academicYearId === yearId)

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">PDF Viewer Modal</h1>
          <p className="text-muted-foreground">Modal plein écran pour visionner les bulletins PDF</p>
        </div>

        <div className="space-y-4">
          <Button onClick={() => setOpen(true)}>
            <EyeIcon className="mr-2 h-4 w-4" />
            Voir les bulletins
          </Button>

          <PDFViewerModal
            open={open}
            onOpenChange={setOpen}
            students={yearStudents}
            level={yearLevels[0]}
            period={yearPeriods[0]}
            subjectParents={yearSubjectParents}
            subjectChildren={yearSubjectChildren}
            grades={yearGrades}
            academicYear="2024-2025"
            onDownload={() => console.log('Download PDF')}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}