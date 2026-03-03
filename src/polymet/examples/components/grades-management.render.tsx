import { BrowserRouter } from "react-router-dom"
import { GradesManagement } from "@/polymet/components/grades-management"
import { grades, students, subjects, periods } from "@/polymet/data/school-data"

export default function GradesManagementRender() {
  return (
    <BrowserRouter>
      <div className="p-8 bg-[#f7f7f6] min-h-screen">
        <GradesManagement
          grades={grades}
          students={students}
          subjects={subjects}
          periods={periods}
          onAdd={(grade) => console.log("Add grade:", grade)}
          onEdit={(id, grade) => console.log("Edit grade:", id, grade)}
          onDelete={(id) => console.log("Delete grade:", id)}
        />
      </div>
    </BrowserRouter>
  )
}