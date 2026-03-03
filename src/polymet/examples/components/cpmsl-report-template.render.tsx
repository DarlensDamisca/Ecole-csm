import { BrowserRouter } from "react-router-dom"
import { CPMSLReportTemplate } from "@/polymet/components/cpmsl-report-template"
import { students, levels, periods, subjectParents, subjectChildren, grades, academicYears, attitudes } from "@/polymet/data/school-data"

export default function CPMSLReportTemplateRender() {
  const student = students[0]
  const level = levels.find(l => l.id === student.levelId)!
  const period = periods[0]
  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === student.academicYearId)
  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === student.academicYearId)
  const studentGrades = grades.filter(g => g.studentId === student.id)
  const academicYear = academicYears.find(y => y.id === student.academicYearId)!

  return (
    <BrowserRouter>
      <div className="p-8 bg-muted min-h-screen">
        <div className="max-w-[8.5in] mx-auto">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-foreground">CPMSL Report Template</h1>
            <p className="text-muted-foreground">Gabarit de bulletin conforme CPMSL</p>
          </div>
          
          <div className="bg-white shadow-lg" style={{ aspectRatio: '8.5 / 11' }}>
            <CPMSLReportTemplate
              student={student}
              level={level}
              period={period}
              subjectParents={yearSubjectParents}
              subjectChildren={yearSubjectChildren}
              grades={studentGrades}
              attitudes={attitudes}
              academicYear={academicYear.name}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}