import { BrowserRouter } from "react-router-dom"
import { StudentStatistics } from "@/polymet/components/student-statistics"
import { students, periods, grades, subjects } from "@/polymet/data/school-data"

export default function StudentStatisticsRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-[#f7f7f6] min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-[#1f1a18] mb-2">Student Statistics</h1>
          <p className="text-[#5b6d77]">Statistiques détaillées des élèves</p>
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
                <StudentStatistics
                  student={student}
                  allStudents={students}
                  periods={periods}
                  grades={grades}
                  subjects={subjects}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </BrowserRouter>
  )
}