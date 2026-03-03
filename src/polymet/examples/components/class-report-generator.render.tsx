import { BrowserRouter } from "react-router-dom"
import { ClassReportGenerator } from "@/polymet/components/class-report-generator"
import { classrooms, students, periods, grades, subjects } from "@/polymet/data/school-data"

export default function ClassReportGeneratorRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-[#f7f7f6] min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-[#1f1a18] mb-2">Class Report Generator</h1>
          <p className="text-[#5b6d77]">Générateur de bulletins de classe</p>
        </div>

        <div className="space-y-4">
          {classrooms.slice(0, 3).map(classroom => {
            const classStudents = students.filter(s => s.classroomId === classroom.id)
            return (
              <div key={classroom.id} className="bg-white p-4 rounded-lg border border-[#bebbb4]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#1f1a18]">{classroom.name}</h3>
                    <p className="text-sm text-[#5b6d77]">{classStudents.length} élèves</p>
                  </div>
                  <ClassReportGenerator
                    classroom={classroom}
                    students={students}
                    periods={periods}
                    grades={grades}
                    subjects={subjects}
                    onGenerate={(id, periodId, studentIds) => 
                      console.log('Generate class reports:', id, periodId, studentIds)
                    }
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </BrowserRouter>
  )
}