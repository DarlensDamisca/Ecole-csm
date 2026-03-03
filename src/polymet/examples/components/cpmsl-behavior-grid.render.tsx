import { BrowserRouter } from "react-router-dom"
import { CPMSLBehaviorGrid } from "@/polymet/components/cpmsl-behavior-grid"
import { levels, classrooms, periods, students, attitudes, studentBehaviors } from "@/polymet/data/school-data"

export default function CPMSLBehaviorGridRender() {
  const yearId = 'ay-2024'
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearClassrooms = classrooms.filter(c => c.academicYearId === yearId)
  const yearPeriods = periods.filter(p => p.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)
  const yearAttitudes = attitudes.filter(a => a.academicYearId === yearId)
  const yearBehaviors = studentBehaviors.filter(b => b.academicYearId === yearId)

  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <CPMSLBehaviorGrid
          levels={yearLevels}
          classrooms={yearClassrooms}
          periods={yearPeriods}
          students={yearStudents}
          attitudes={yearAttitudes}
          behaviors={yearBehaviors}
          onSaveBehaviors={(behaviors) => console.log('Save behaviors:', behaviors)}
        />
      </div>
    </BrowserRouter>
  )
}