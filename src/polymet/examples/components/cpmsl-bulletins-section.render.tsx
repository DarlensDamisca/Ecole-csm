import { BrowserRouter } from "react-router-dom"
import { CPMSLBulletinsSection } from "@/polymet/components/cpmsl-bulletins-section"
import { levels, students, periods, subjectParents, subjectChildren, grades, classrooms, attitudes } from "@/polymet/data/school-data"

export default function CPMSLBulletinsSectionRender() {
  const yearId = 'ay-2024'
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)
  const yearPeriods = periods.filter(p => p.academicYearId === yearId)
  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === yearId)
  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === yearId)
  const yearGrades = grades.filter(g => g.academicYearId === yearId)
  const yearClassrooms = classrooms.filter(c => c.academicYearId === yearId)
  const yearAttitudes = attitudes.filter(a => a.academicYearId === yearId)

  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <CPMSLBulletinsSection
          levels={yearLevels}
          students={yearStudents}
          periods={yearPeriods}
          subjectParents={yearSubjectParents}
          subjectChildren={yearSubjectChildren}
          grades={yearGrades}
          classrooms={yearClassrooms}
          attitudes={yearAttitudes}
          academicYear="2024-2025"
        />
      </div>
    </BrowserRouter>
  )
}