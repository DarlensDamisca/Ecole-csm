import { BrowserRouter } from "react-router-dom"
import { CPMSLRapportsSection } from "@/polymet/components/cpmsl-rapports-section"
import { levels, students, periods, subjectParents, subjectChildren, grades } from "@/polymet/data/school-data"

export default function CPMSLRapportsSectionRender() {
  const yearId = 'ay-2024'
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)
  const yearPeriods = periods.filter(p => p.academicYearId === yearId)
  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === yearId)
  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === yearId)
  const yearGrades = grades.filter(g => g.academicYearId === yearId)

  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <CPMSLRapportsSection
          levels={yearLevels}
          students={yearStudents}
          periods={yearPeriods}
          subjectParents={yearSubjectParents}
          subjectChildren={yearSubjectChildren}
          grades={yearGrades}
        />
      </div>
    </BrowserRouter>
  )
}