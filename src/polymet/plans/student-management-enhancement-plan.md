# Plan d'Amélioration - Gestion des Élèves

## User Request
Améliorer la gestion des élèves avec :
- Nouveaux champs : Filière, Code élève, NISU
- Modal d'ajout/édition d'élève complet
- Génération de bulletins individuels (par période et global)
- Génération de statistiques individuelles
- Génération de bulletins pour toute une classe
- Génération de statistiques de classe

## Related Files
- @/polymet/data/school-data.tsx (to update) - Ajouter champs filière, code élève, NISU
- @/polymet/components/student-table.tsx (to update) - Mettre à jour le tableau avec nouveaux champs
- @/polymet/components/student-form-modal.tsx (to create) - Modal d'ajout/édition d'élève
- @/polymet/components/student-report-generator.tsx (to create) - Générateur de bulletins individuels
- @/polymet/components/class-report-generator.tsx (to create) - Générateur de bulletins de classe
- @/polymet/components/student-statistics.tsx (to create) - Statistiques individuelles
- @/polymet/components/class-statistics.tsx (to create) - Statistiques de classe
- @/polymet/pages/students-management-page.tsx (to update) - Intégrer tous les nouveaux composants

## TODO List
- [x] Mettre à jour le modèle Student dans school-data avec filière, code élève, NISU
- [x] Créer le composant StudentFormModal pour ajouter/éditer un élève
- [x] Créer le composant StudentReportGenerator pour bulletins individuels
- [x] Créer le composant ClassReportGenerator pour bulletins de classe
- [x] Créer le composant StudentStatistics pour statistiques individuelles
- [x] Créer le composant ClassStatistics pour statistiques de classe
- [x] Mettre à jour StudentTable avec nouveaux champs et actions
- [x] Mettre à jour StudentsManagementPage avec toutes les fonctionnalités

## Important Notes
- Filière : Sciences, Littéraire, Technique, etc.
- Code élève : Identifiant unique personnalisé
- NISU : Numéro d'Identification Scolaire Unique
- Bulletins par période : 1ère période, 2ème période, etc.
- Bulletin global : Moyenne annuelle/cumulative
- Statistiques : Moyenne, rang, appréciation, évolution
- Actions de classe : Génération groupée pour toute une classe

  
## Plan Information
*This plan is created when the project is at iteration 2, and date 2026-02-19T17:08:45.529Z*
