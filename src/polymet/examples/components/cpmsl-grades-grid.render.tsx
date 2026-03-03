import { BrowserRouter } from "react-router-dom"
import { CPMSLGradesGrid } from "@/polymet/components/cpmsl-grades-grid"
import { levels, periods, students, subjectParents, subjectChildren, grades, classrooms } from "@/polymet/data/school-data"

export default function CPMSLGradesGridRender() {
  const yearId = 'ay-2024'
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearPeriods = periods.filter(p => p.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)
  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === yearId)
  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === yearId)
  const yearGrades = grades.filter(g => g.academicYearId === yearId)
  const yearClassrooms = classrooms.filter(c => c.academicYearId === yearId)

  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <CPMSLGradesGrid
          levels={yearLevels}
          periods={yearPeriods}
          students={yearStudents}
          subjectParents={yearSubjectParents}
          subjectChildren={yearSubjectChildren}
          grades={yearGrades}
          classrooms={yearClassrooms}
          onSaveGrades={(grades) => console.log('Save grades:', grades)}
          onClosePeriod={(periodId, reason) => console.log('Close period:', periodId, reason)}
        />
      </div>
    </BrowserRouter>
  )
}