import { useParams } from "react-router-dom"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArchivedYearBanner } from "@/polymet/components/archived-year-banner"
import { CPMSLBulletinsSection } from "@/polymet/components/cpmsl-bulletins-section"
import { CPMSLRapportsSection } from "@/polymet/components/cpmsl-rapports-section"
import { 
  academicYears, 
  levels, 
  students, 
  periods, 
  grades,
  subjectParents,
  subjectChildren,
  classrooms,
  studentBehaviors,
  attitudes,
} from "@/polymet/data/school-data"

export function ReportsPage() {
  const { yearId } = useParams()
  const academicYear = academicYears.find(y => y.id === yearId)
  const activeYear = academicYears.find(y => y.isActive)
  
  // Filter data for current year
  const yearLevels = levels.filter(l => l.academicYearId === yearId)
  const yearStudents = students.filter(s => s.academicYearId === yearId)
  const yearPeriods = periods.filter(p => p.academicYearId === yearId)
  const yearGrades = grades.filter(g => g.academicYearId === yearId)
  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === yearId)
  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === yearId)
  const yearClassrooms = classrooms.filter(c => c.academicYearId === yearId)
  const yearBehaviors = studentBehaviors.filter(b => b.academicYearId === yearId)
  const yearAttitudes = attitudes.filter(a => a.academicYearId === yearId)

  const isArchived = academicYear?.status === 'archived'

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", fontWeight: 700, letterSpacing: "-0.03em", color: "#2A3740" }}>
          Bulletins
        </h1>
        <p style={{ fontSize: "13px", fontFamily: "Inter", fontWeight: 400, color: "hsl(var(--muted-foreground))" }}>
          Année {activeYear?.name}
        </p>
      </div>

      {/* Archived Year Banner */}
      {isArchived && <ArchivedYearBanner yearName={academicYear?.name || ''} />}

      {/* Tabs */}
      <Tabs defaultValue="bulletins" className="space-y-6">
        <TabsList style={{ backgroundColor: "#F0F4F7", borderRadius: "8px", padding: "4px" }}>
          <TabsTrigger value="bulletins" className="label-ui data-[state=active]:bg-white data-[state=active]:shadow-sm" style={{ borderRadius: "6px" }}>
            <span className="data-[state=active]:text-[#3A4A57] text-[#78756F]">Bulletins</span>
          </TabsTrigger>
          <TabsTrigger value="rapports" className="label-ui data-[state=active]:bg-white data-[state=active]:shadow-sm" style={{ borderRadius: "6px" }}>
            <span className="data-[state=active]:text-[#3A4A57] text-[#78756F]">Rapports</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Bulletins */}
        <TabsContent value="bulletins">
          <CPMSLBulletinsSection
            levels={yearLevels}
            students={yearStudents}
            periods={yearPeriods}
            subjectParents={yearSubjectParents}
            subjectChildren={yearSubjectChildren}
            grades={yearGrades}
            classrooms={yearClassrooms}
            behaviors={yearBehaviors}
            attitudes={yearAttitudes}
            isArchived={isArchived}
            academicYear={academicYear?.name}
          />
        </TabsContent>

        {/* Tab 2: Rapports */}
        <TabsContent value="rapports">
          <CPMSLRapportsSection
            levels={yearLevels}
            students={yearStudents}
            periods={yearPeriods}
            subjectParents={yearSubjectParents}
            subjectChildren={yearSubjectChildren}
            grades={yearGrades}
            isArchived={isArchived}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}