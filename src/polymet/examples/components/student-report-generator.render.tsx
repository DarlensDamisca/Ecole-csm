import { BrowserRouter } from "react-router-dom"
import { StudentReportGenerator } from "@/polymet/components/student-report-generator"
import { students, periods, grades, subjects } from "@/polymet/data/school-data"

export default function StudentReportGeneratorRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-[#f7f7f6] min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-[#1f1a18] mb-2">Student Report Generator</h1>
          <p className="text-[#5b6d77]">Générateur de bulletins individuels</p>
        </div>

        <div className="space-y-4">
          {students.slice(0, 3).map(student => (
            <div key={student.id} className="bg-white p-4 rounded-lg border border-[#bebbb4]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#1f1a18]">
                    {student.firstName} {student.lastName}
                  </h3>
                  <p className="text-sm text-[#5b6d77]">{student.matricule}</p>
                </div>
                <StudentReportGenerator
                  student={student}
                  periods={periods}
                  grades={grades}
                  subjects={subjects}
                  onGenerate={(id, periodId) => console.log('Generate report:', id, periodId)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  )
}