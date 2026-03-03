import { useParams, Link } from "react-router-dom"
import { CPMSLYearConfigTabs } from "@/polymet/components/cpmsl-year-config-tabs"
import { useToast } from "@/components/ui/use-toast"
import { academicYears, periods, levels, subjectParents, subjectChildren, classrooms, students } from "@/polymet/data/school-data"
import { ArrowLeftIcon } from "lucide-react"

export function AcademicYearConfigPage() {
  const { yearId } = useParams<{ yearId: string }>()
  const { toast } = useToast()

  const year = academicYears.find(y => y.id === yearId)

  if (!year) {
    return (
      <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh', padding: '32px' }}>
        <div style={{ color: '#C43C3C', fontSize: '16px' }}>
          Année académique introuvable
        </div>
      </div>
    )
  }

  // Filtrer les périodes pour n'avoir que les 4 premières
  const yearPeriods = periods
    .filter(p => p.academicYearId === year.id)
    .slice(0, 4)
    .map(p => ({
      id: p.id,
      name: p.name,
      status: p.status as 'open' | 'closed'
    }))

  const yearLevels = levels.filter(l => l.academicYearId === year.id).map(l => ({
    id: l.id,
    name: l.name,
    niveau: l.niveau,
    filiere: l.filiere,
    description: l.description
  }))

  const yearSubjectParents = subjectParents.filter(sp => sp.academicYearId === year.id).map(sp => ({
    id: sp.id,
    code: sp.code,
    name: sp.name,
    rubrique: sp.rubrique as 'R1' | 'R2' | 'R3',
    coefficient: sp.coefficients[0]?.valeur || 0
  }))

  const yearSubjectChildren = subjectChildren.filter(sc => sc.academicYearId === year.id).map(sc => ({
    id: sc.id,
    code: sc.code,
    parentId: sc.parentId,
    name: sc.name,
    type: sc.type,
    coefficient: sc.coefficient
  }))

  const yearClassrooms = classrooms.filter(c => c.academicYearId === year.id).map(c => ({
    id: c.id,
    name: c.name,
    levelId: c.levelId,
    capacity: c.capacity,
    description: c.description
  }))

  const yearStudents = students.filter(s => s.academicYearId === year.id).map(s => ({
    id: s.id,
    classroomId: s.classroomId,
    levelId: s.levelId
  }))

  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <div className="space-y-4 p-4 sm:p-6">
        {/* Header avec back button */}
        <div>
          <Link
            to="/admin/academic-years"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{
              color: '#5A7085',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '16px'
            }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Années Scolaires
          </Link>
          
          <h1 
            className="font-serif font-bold" 
            style={{ 
              fontSize: '36px', 
              fontWeight: 700, 
              lineHeight: '1.15', 
              letterSpacing: '-0.03em',
              color: '#2A3740'
            }}
          >
            Configuration — {year.name}
          </h1>
          <p 
            className="font-sans text-muted-foreground mt-1" 
            style={{ 
              fontSize: '13px', 
              fontWeight: 400 
            }}
          >
            Configurez les étapes, classes et matières de l'année
          </p>
        </div>

        {/* Configuration tabs */}
        <CPMSLYearConfigTabs
          yearName={year.name}
          isArchived={year.status === 'archived'}
          periods={yearPeriods}
          levels={yearLevels}
          subjectParents={yearSubjectParents}
          subjectChildren={yearSubjectChildren}
          classrooms={yearClassrooms}
          students={yearStudents}
          onAddPeriod={(data) => {
            toast({ title: "Étape ajoutée", description: "La nouvelle étape a été configurée." })
          }}
          onClosePeriod={(periodId) => {
            toast({ title: "Étape clôturée" })
          }}
          onReopenPeriod={(periodId, reason) => {
            toast({ title: "Étape réouverte" })
          }}
          onAddLevel={(data) => {
            toast({ title: "Niveau ajouté" })
          }}
          onAddSubjectParent={(data) => {
            toast({ title: "Matière ajoutée" })
          }}
          onAddSubjectChild={(parentId, data) => {
            toast({ title: "Sous-matière ajoutée" })
          }}
          onEditSubjectParent={(parentId, data) => {
            toast({ title: "Matière modifiée" })
          }}
          onDeleteSubjectParent={(parentId) => {
            toast({ title: "Matière supprimée", variant: "destructive" })
          }}
          onEditSubjectChild={(childId, data) => {
            toast({ title: "Sous-matière modifiée" })
          }}
          onDeleteSubjectChild={(childId) => {
            toast({ title: "Sous-matière supprimée", variant: "destructive" })
          }}
          onAddClassroom={(levelId) => {
            toast({ title: "Classe ajoutée" })
          }}
          onEditClassroom={(classroomId) => {
            toast({ title: "Classe modifiée" })
          }}
          onDeleteClassroom={(classroomId) => {
            toast({ title: "Classe supprimée", variant: "destructive" })
          }}
          onEditLevel={(levelId, data) => {
            toast({ title: "Niveau modifié" })
          }}
          onDeleteLevel={(levelId) => {
            toast({ title: "Niveau supprimé", variant: "destructive" })
          }}
        />
      </div>
    </div>
  )
}