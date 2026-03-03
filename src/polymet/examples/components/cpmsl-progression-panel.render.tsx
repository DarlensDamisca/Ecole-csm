import { BrowserRouter } from "react-router-dom"
import { CPMSLProgressionPanel } from "@/polymet/components/cpmsl-progression-panel"
import { levels, classrooms, periods, students, subjectParents, subjectChildren, grades } from "@/polymet/data/school-data"

export default function CPMSLProgressionPanelRender() {
  const yearId = 'ay-2024'
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearClassrooms = classrooms.filter(c => c.academicYearId === yearId)
  const yearPeriods = periods.filter(p => p.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)
  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === yearId)
  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === yearId)
  const yearGrades = grades.filter(g => g.academicYearId === yearId)

  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#2A3740" }}>
            CPMSL Progression Panel
          </h1>
          <p style={{ color: "#78756F" }}>
            Suivi de la progression de la saisie des notes par classe
          </p>
        </div>

        <CPMSLProgressionPanel
          levels={yearLevels}
          classrooms={yearClassrooms}
          periods={yearPeriods}
          students={yearStudents}
          subjectParents={yearSubjectParents}
          subjectChildren={yearSubjectChildren}
          grades={yearGrades}
        />
      </div>
    </BrowserRouter>
  )
}