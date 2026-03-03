import { BrowserRouter } from "react-router-dom"
import { CPMSLYearConfigTabs } from "@/polymet/components/cpmsl-year-config-tabs"

export default function CPMSLYearConfigTabsRender() {
  const mockPeriods = [
    { id: '1', name: 'Étape 1', status: 'open' as const },
    { id: '2', name: 'Étape 2', status: 'open' as const },
    { id: '3', name: 'Étape 3', status: 'closed' as const },
    { id: '4', name: 'Étape 4', status: 'closed' as const, isBlancExam: true }
  ]

  const mockLevels = [
    { id: '1', name: '7e', niveau: 'Fondamentale', description: 'Classe de 7ème année fondamentale' },
    { id: '2', name: '8e', niveau: 'Fondamentale' },
    { id: '3', name: '9e', niveau: 'Fondamentale' },
    { id: '4', name: 'NSI', niveau: 'Nouveau Secondaire', description: 'Première année du nouveau secondaire avec 4 filières' },
    { id: '5', name: 'NSII', niveau: 'Nouveau Secondaire' },
    { id: '6', name: 'NSIII', niveau: 'Nouveau Secondaire' },
    { id: '7', name: 'NSIV', niveau: 'Nouveau Secondaire' }
  ]

  const mockSubjectParents = [
    { id: '1', code: 'COM101', name: 'Communication', rubrique: 'R1' as const, coefficient: 60 },
    { id: '2', code: 'MAT101', name: 'Mathématiques', rubrique: 'R1' as const, coefficient: 60 },
    { id: '3', code: 'SCI101', name: 'Sciences', rubrique: 'R2' as const, coefficient: 30 },
    { id: '4', code: 'LAN101', name: 'Langues Étrangères', rubrique: 'R3' as const, coefficient: 10 }
  ]

  const mockSubjectChildren = [
    { id: 'c1', code: 'COML01', parentId: '1', name: 'Communication Française', type: 'L' as const, coefficient: 30 },
    { id: 'c2', code: 'COML02', parentId: '1', name: 'Communication Créole', type: 'L' as const, coefficient: 30 },
    { id: 'c3', code: 'MATC01', parentId: '2', name: 'Algèbre', type: 'C' as const, coefficient: 30 },
    { id: 'c4', code: 'MATC02', parentId: '2', name: 'Géométrie', type: 'C' as const, coefficient: 30 },
    { id: 'c5', code: 'SCIN01', parentId: '3', name: 'Sciences Naturelles', type: 'N' as const, coefficient: 15 },
    { id: 'c6', code: 'SCIN02', parentId: '3', name: 'Physique-Chimie', type: 'N' as const, coefficient: 15 },
    { id: 'c7', code: 'LANL01', parentId: '4', name: 'Anglais', type: 'L' as const, coefficient: 5 },
    { id: 'c8', code: 'LANL02', parentId: '4', name: 'Espagnol', type: 'L' as const, coefficient: 5 }
  ]

  const mockClassrooms = [
    // 7e - 2 salles
    { id: 'c1', name: 'A', levelId: '1', capacity: 25, description: 'Salle principale du niveau 7e' },
    { id: 'c2', name: 'B', levelId: '1', capacity: 24 },
    // 8e - 2 salles
    { id: 'c3', name: 'A', levelId: '2', capacity: 26 },
    { id: 'c4', name: 'B', levelId: '2', capacity: 25 },
    // 9e - 1 salle
    { id: 'c5', name: 'A', levelId: '3', capacity: 30 },
    // NSI - 4 filières
    { id: 'c6', name: 'LLA', levelId: '4', capacity: 28, description: 'Filière Lettres, Langues et Arts' },
    { id: 'c7', name: 'SES', levelId: '4', capacity: 25 },
    { id: 'c8', name: 'SMP', levelId: '4', capacity: 30 },
    { id: 'c9', name: 'SVT', levelId: '4', capacity: 22 },
    // NSII - 4 filières (empty for demo)
    // NSIII - 4 filières (empty for demo)
    // NSIV - 4 filières (empty for demo)
  ]

  const mockStudents = [
    // 7e Salle A - 12 élèves
    ...Array.from({ length: 12 }, (_, i) => ({ id: `s${i + 1}`, classroomId: 'c1', levelId: '1' })),
    // 7e Salle B - 15 élèves
    ...Array.from({ length: 15 }, (_, i) => ({ id: `s${i + 13}`, classroomId: 'c2', levelId: '1' })),
    // 8e Salle A - 20 élèves
    ...Array.from({ length: 20 }, (_, i) => ({ id: `s${i + 28}`, classroomId: 'c3', levelId: '2' })),
    // 8e Salle B - 18 élèves
    ...Array.from({ length: 18 }, (_, i) => ({ id: `s${i + 48}`, classroomId: 'c4', levelId: '2' })),
    // 9e Salle A - 25 élèves
    ...Array.from({ length: 25 }, (_, i) => ({ id: `s${i + 66}`, classroomId: 'c5', levelId: '3' })),
    // NSI LLA - 28 élèves
    ...Array.from({ length: 28 }, (_, i) => ({ id: `s${i + 91}`, classroomId: 'c6', levelId: '4' })),
    // NSI SES - 25 élèves
    ...Array.from({ length: 25 }, (_, i) => ({ id: `s${i + 119}`, classroomId: 'c7', levelId: '4' })),
    // NSI SMP - 30 élèves
    ...Array.from({ length: 30 }, (_, i) => ({ id: `s${i + 144}`, classroomId: 'c8', levelId: '4' })),
    // NSI SVT - 22 élèves
    ...Array.from({ length: 22 }, (_, i) => ({ id: `s${i + 174}`, classroomId: 'c9', levelId: '4' }))
  ]

  return (
    <BrowserRouter>
      <div className="p-8" style={{ backgroundColor: "#FAFAF8" }}>
        <CPMSLYearConfigTabs
          yearName="2025-2026"
          periods={mockPeriods}
          levels={mockLevels}
          subjectParents={mockSubjectParents}
          subjectChildren={mockSubjectChildren}
          classrooms={mockClassrooms}
          students={mockStudents}
          onAddPeriod={(data) => console.log('Add period:', data)}
          onClosePeriod={(periodId) => console.log('Close period:', periodId)}
          onReopenPeriod={(periodId, reason) => console.log('Reopen period:', periodId, 'Reason:', reason)}
          onAddLevel={(data) => console.log('Add level:', data)}
          onAddSubjectParent={(data) => console.log('Add subject parent:', data)}
          onAddSubjectChild={(parentId, data) => console.log('Add subject child to parent:', parentId, data)}
          onEditSubjectParent={(parentId, data) => console.log('Edit subject parent:', parentId, data)}
          onDeleteSubjectParent={(parentId) => console.log('Delete subject parent:', parentId)}
          onEditSubjectChild={(childId, data) => console.log('Edit subject child:', childId, data)}
          onDeleteSubjectChild={(childId) => console.log('Delete subject child:', childId)}
          onAddClassroom={(levelId) => console.log('Add classroom to level:', levelId)}
          onEditClassroom={(classroomId) => console.log('Edit classroom:', classroomId)}
          onDeleteClassroom={(classroomId) => console.log('Delete classroom:', classroomId)}
          onEditLevel={(levelId, data) => console.log('Edit level:', levelId, data)}
          onDeleteLevel={(levelId) => console.log('Delete level:', levelId)}
        />
      </div>
    </BrowserRouter>
  )
}