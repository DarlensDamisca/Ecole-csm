import { BrowserRouter } from "react-router-dom"
import { ClassStatistics } from "@/polymet/components/class-statistics"

export default function ClassStatisticsRender() {
  const mockClasses = [
    {
      className: "9ème AF",
      studentCount: 24,
      gradesEntered: 24,
      totalGrades: 24,
      averageGrade: 7.32,
      status: 'complete' as const
    },
    {
      className: "8ème AF",
      studentCount: 22,
      gradesEntered: 20,
      totalGrades: 22,
      averageGrade: 6.85,
      status: 'in-progress' as const
    },
    {
      className: "7ème AF",
      studentCount: 28,
      gradesEntered: 0,
      totalGrades: 28,
      status: 'not-started' as const
    },
    {
      className: "6ème AF",
      studentCount: 25,
      gradesEntered: 25,
      totalGrades: 25,
      averageGrade: 7.68,
      status: 'complete' as const
    },
    {
      className: "5ème AF",
      studentCount: 20,
      gradesEntered: 15,
      totalGrades: 20,
      averageGrade: 6.12,
      status: 'in-progress' as const
    },
    {
      className: "NSI",
      studentCount: 18,
      gradesEntered: 0,
      totalGrades: 18,
      status: 'not-started' as const
    }
  ]

  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#2A3740" }}>
            Class Statistics Component
          </h1>
          <p style={{ color: "#5C5955" }}>
            Tableau d'aperçu des classes avec statuts — Style CPMSL
          </p>
        </div>

        <ClassStatistics
          classes={mockClasses}
          periodName="Étape 2"
          onViewAll={() => console.log("View all classes")}
        />
      </div>
    </BrowserRouter>
  )
}