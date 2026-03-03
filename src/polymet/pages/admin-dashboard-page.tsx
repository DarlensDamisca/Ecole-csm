import { useNavigate } from "react-router-dom"
import { 
  CalendarIcon, 
  UsersIcon, 
  SchoolIcon, 
  BarChart3Icon,
  ClipboardEditIcon,
  FileTextIcon,
  UserPlusIcon,
  XCircleIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  InfoIcon
} from "lucide-react"
import { 
  students, 
  classrooms, 
  levels, 
  periods, 
  grades, 
  subjectParents, 
  subjectChildren, 
  getActiveAcademicYear, 
  calculateClassMean, 
  isStudentGradeComplete 
} from "@/polymet/data/school-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StatCard } from "@/polymet/components/stat-card"
import { ClassStatistics } from "@/polymet/components/class-statistics"

export function AdminDashboardPage() {
  const navigate = useNavigate()
  const activeYear = getActiveAcademicYear()

  // Statistiques pour l'année active
  const activeYearStudents = students.filter(s => s.academicYearId === activeYear?.id)
  const activeYearLevels = levels.filter(l => l.academicYearId === activeYear?.id)
  const activeYearPeriods = periods.filter(p => p.academicYearId === activeYear?.id)
  const activeYearClassrooms = classrooms.filter(c => c.academicYearId === activeYear?.id)
  
  // Trouver l'étape en cours (première étape ouverte par ordre)
  const openPeriods = activeYearPeriods.filter(p => p.status === 'open').sort((a, b) => a.order - b.order)
  let currentPeriod = openPeriods[0]
  let isPeriodClosed = false
  
  // Si aucune étape ouverte, prendre la dernière étape fermée
  if (!currentPeriod) {
    const closedPeriods = activeYearPeriods.filter(p => p.status === 'closed').sort((a, b) => b.order - a.order)
    currentPeriod = closedPeriods[0]
    isPeriodClosed = !!currentPeriod
  }
  
  // Calculer les statistiques réelles des classes
  const classStatistics = currentPeriod ? activeYearClassrooms
    .map(classroom => {
      const classroomStudents = activeYearStudents.filter(s => s.classroomId === classroom.id)
      const studentCount = classroomStudents.length
      
      if (studentCount === 0) return null
      
      const gradesEntered = classroomStudents.filter(student => 
        isStudentGradeComplete(
          student.id, 
          student.levelId, 
          currentPeriod.id, 
          grades, 
          subjectParents, 
          subjectChildren, 
          currentPeriod.isBlancExam ?? false
        )
      ).length
      
      const averageGrade = calculateClassMean(
        classroomStudents, 
        currentPeriod.id, 
        grades, 
        subjectParents, 
        subjectChildren, 
        currentPeriod.isBlancExam ?? false
      )
      
      let status: 'not-started' | 'in-progress' | 'complete'
      if (gradesEntered === 0) {
        status = 'not-started'
      } else if (gradesEntered === studentCount) {
        status = 'complete'
      } else {
        status = 'in-progress'
      }
      
      return {
        className: classroom.name,
        studentCount,
        gradesEntered,
        totalGrades: studentCount,
        averageGrade: averageGrade ?? undefined,
        status
      }
    })
    .filter((stat): stat is NonNullable<typeof stat> => stat !== null) : []

  // Calculer les alertes réelles
  const alerts: Array<{
    type: 'warning' | 'error' | 'success' | 'info'
    message: string
    IconComponent: typeof AlertTriangleIcon
    iconColor: string
  }> = []
  
  // 1. Élèves sans photo
  const studentsWithoutPhoto = activeYearStudents.filter(s => !s.avatar || s.avatar === '')
  if (studentsWithoutPhoto.length > 0) {
    alerts.push({
      type: 'warning',
      message: `${studentsWithoutPhoto.length} élève(s) sans photo`,
      IconComponent: AlertTriangleIcon,
      iconColor: '#D97706'
    })
  }
  
  // 2. Classes sans aucune note pour la période en cours
  if (currentPeriod && !isPeriodClosed) {
    const classesWithoutGrades = classStatistics.filter(c => c.status === 'not-started' && c.studentCount > 0)
    if (classesWithoutGrades.length > 0) {
      alerts.push({
        type: 'error',
        message: `${classesWithoutGrades.length} classe(s) sans aucune note — ${currentPeriod.name}`,
        IconComponent: XCircleIcon,
        iconColor: '#C43C3C'
      })
    }
  }
  
  // 3. Classes complètes pour la période en cours
  if (currentPeriod && !isPeriodClosed) {
    const completeClasses = classStatistics.filter(c => c.status === 'complete' && c.studentCount > 0)
    if (completeClasses.length > 0) {
      alerts.push({
        type: 'success',
        message: `${completeClasses.length} classe(s) complètes — ${currentPeriod.name}`,
        IconComponent: CheckCircle2Icon,
        iconColor: '#2D7D46'
      })
    }
  }
  
  // 4. Aucune étape ouverte
  if (isPeriodClosed) {
    alerts.push({
      type: 'info',
      message: 'Aucune étape ouverte — configurez l\'année scolaire',
      IconComponent: InfoIcon,
      iconColor: '#2B6CB0'
    })
  }

  return (
    <div className="space-y-6">
      {/* Page title */}
      <h1 
        className="font-serif" 
        style={{ 
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          color: "#2A3740" 
        }}
      >
        Tableau de bord
      </h1>

      {/* A. Ligne de 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Année active"
          value={activeYear?.name || "Aucune année active"}
          icon={CalendarIcon}
          accentColor="#5A7085"
          iconBgColor="#F0F4F7"
          iconColor="#5A7085"
        />
        
        <StatCard
          label="Élèves inscrits"
          value={activeYearStudents.length}
          icon={UsersIcon}
          accentColor="#2D7D46"
          iconBgColor="#E8F5EC"
          iconColor="#2D7D46"
        />
        
        <StatCard
          label="Classes"
          value={activeYearClassrooms.length}
          icon={SchoolIcon}
          accentColor="#B0A07A"
          iconBgColor="#FAF8F3"
          iconColor="#B0A07A"
        />
        
        <StatCard
          label="Étape en cours"
          value={currentPeriod?.name || "Aucune étape active"}
          subtitle={isPeriodClosed ? "(clôturée)" : undefined}
          icon={BarChart3Icon}
          accentColor="#2B6CB0"
          iconBgColor="#E3EFF9"
          iconColor="#2B6CB0"
        />
      </div>

      {/* B. Deux colonnes : Actions rapides + Alertes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Colonne gauche : Actions rapides */}
        <Card 
          className="border border-[#E8E6E3] rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          style={{ backgroundColor: "white" }}
        >
          <CardHeader>
            <CardTitle 
              className="font-serif" 
              style={{ 
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "#3A4A57" 
              }}
            >
              Actions rapides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="outline"
              className="w-full justify-start text-left h-auto py-3 px-4 rounded-lg border"
              style={{ 
                backgroundColor: "#F0F4F7", 
                color: "#5A7085",
                borderColor: "#D9E3EA"
              }}
              onClick={() => navigate(`/admin/academic-year/${activeYear?.id}/grades`)}
            >
              <ClipboardEditIcon className="mr-3 h-5 w-5" />
              <span 
                className="font-sans" 
                style={{ 
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: 1.5 
                }}
              >
                Saisir des notes — {currentPeriod?.name || "Aucune étape"}
              </span>
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start text-left h-auto py-3 px-4 rounded-lg border"
              style={{ 
                backgroundColor: "#F0F4F7", 
                color: "#5A7085",
                borderColor: "#D9E3EA"
              }}
              onClick={() => navigate(`/admin/academic-year/${activeYear?.id}/reports`)}
            >
              <FileTextIcon className="mr-3 h-5 w-5" />
              <span 
                className="font-sans" 
                style={{ 
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: 1.5 
                }}
              >
                Générer bulletins — {currentPeriod?.name || "Aucune étape"}
              </span>
            </Button>
            
            <Button
              variant="outline"
              className="w-full justify-start text-left h-auto py-3 px-4 rounded-lg border"
              style={{ 
                backgroundColor: "#F0F4F7", 
                color: "#5A7085",
                borderColor: "#D9E3EA"
              }}
              onClick={() => navigate(`/admin/academic-year/${activeYear?.id}/students`)}
            >
              <UserPlusIcon className="mr-3 h-5 w-5" />
              <span 
                className="font-sans" 
                style={{ 
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: 1.5 
                }}
              >
                Inscrire un nouvel élève
              </span>
            </Button>
          </CardContent>
        </Card>

        {/* Colonne droite : Alertes & Notifications */}
        <Card 
          className="border border-[#E8E6E3] rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          style={{ backgroundColor: "white" }}
        >
          <CardHeader>
            <CardTitle 
              className="font-serif" 
              style={{ 
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "#3A4A57" 
              }}
            >
              Alertes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {alerts.length === 0 ? (
              <div 
                className="font-sans text-center py-6"
                style={{ 
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "#A8A39C"
                }}
              >
                Aucune alerte en cours
              </div>
            ) : (
              alerts.map((alert, index) => {
                const bgColor = alert.type === 'warning' ? '#FEF6E0' : alert.type === 'error' ? '#FDE8E8' : alert.type === 'success' ? '#E8F5EC' : '#E3EFF9'
                const textColor = alert.type === 'warning' ? '#C48B1A' : alert.type === 'error' ? '#C43C3C' : alert.type === 'success' ? '#2D7D46' : '#2B6CB0'
                
                return (
                  <div
                    key={index}
                    className="font-sans rounded-md p-3 flex items-center gap-2"
                    style={{ 
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      backgroundColor: bgColor,
                      color: textColor
                    }}
                  >
                    {alert.IconComponent && <alert.IconComponent className="h-4 w-4 flex-shrink-0" style={{ color: alert.iconColor }} />}
                    <span>{alert.message}</span>
                  </div>
                )
              })
            )}
          </CardContent>
        </Card>
      </div>

      {/* C. Tableau Aperçu des classes */}
      {!currentPeriod || activeYearClassrooms.length === 0 ? (
        <Card 
          className="border border-[#E8E6E3] rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          style={{ backgroundColor: "white" }}
        >
          <CardContent className="flex flex-col items-center justify-center py-12">
            <SchoolIcon className="h-12 w-12 mb-4" style={{ color: "#A8A39C" }} />
            <h3 
              className="font-serif mb-2"
              style={{ 
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: 1.3,
                color: "#3A4A57"
              }}
            >
              Aucune donnée disponible
            </h3>
            <p 
              className="font-sans mb-6 text-center"
              style={{ 
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#78756F"
              }}
            >
              Configurez l'année scolaire pour voir les statistiques des classes.
            </p>
            <Button
              onClick={() => navigate('/admin/academic-years')}
              style={{ 
                backgroundColor: "#5A7085",
                color: "white"
              }}
            >
              Configurer l'année
            </Button>
          </CardContent>
        </Card>
      ) : (
        <ClassStatistics
          classes={classStatistics}
          periodName={currentPeriod.name}
          academicYear={activeYear?.name || "2024-2025"}
          onViewAll={() => navigate(`/admin/academic-year/${activeYear?.id}/grades`)}
        />
      )}
    </div>
  )
}