# School Report SaaS Application Plan

## User Request
Créer une application web SaaS professionnelle pour la gestion des bulletins scolaires avec 4 portails distincts (Administrateur, Professeur, Élève, Parent), architecture RBAC, design system académique, et fonctionnalités complètes de gestion académique.

## Related Files
- @/polymet/data/school-data (to create) - Mock data pour utilisateurs, élèves, professeurs, notes, etc.
- @/polymet/data/auth-data (to create) - Données d'authentification et rôles
- @/polymet/components/school-logo (to create) - Logo de l'application
- @/polymet/components/stat-card (to create) - Carte statistique réutilisable
- @/polymet/components/academic-year-card (to create) - Carte année académique
- @/polymet/components/create-academic-year-modal (to create) - Modal création année
- @/polymet/components/student-table (to create) - Tableau élèves avec pagination
- @/polymet/components/teacher-table (to create) - Tableau professeurs
- @/polymet/components/classroom-card (to create) - Carte salle de classe
- @/polymet/components/subject-card (to create) - Carte matière
- @/polymet/components/grade-form (to create) - Formulaire ajout note
- @/polymet/components/report-card-preview (to create) - Aperçu bulletin
- @/polymet/layouts/auth-layout (to create) - Layout authentification
- @/polymet/layouts/admin-layout (to create) - Layout administrateur avec sidebar
- @/polymet/layouts/teacher-layout (to create) - Layout professeur
- @/polymet/layouts/student-layout (to create) - Layout élève
- @/polymet/layouts/parent-layout (to create) - Layout parent
- @/polymet/pages/login-page (to create) - Page connexion
- @/polymet/pages/admin-dashboard-page (to create) - Dashboard administrateur
- @/polymet/pages/academic-year-detail-page (to create) - Détail année académique
- @/polymet/pages/classrooms-page (to create) - Gestion salles
- @/polymet/pages/students-page (to create) - Gestion élèves
- @/polymet/pages/teachers-page (to create) - Gestion professeurs
- @/polymet/pages/subjects-page (to create) - Gestion matières
- @/polymet/pages/grades-page (to create) - Gestion notes
- @/polymet/pages/teacher-dashboard-page (to create) - Dashboard professeur
- @/polymet/pages/student-dashboard-page (to create) - Dashboard élève
- @/polymet/pages/parent-dashboard-page (to create) - Dashboard parent
- @/polymet/prototypes/school-report-saas (to create) - Prototype principal avec routing

## TODO List
- [x] Créer les données mockées (auth, school data)
- [x] Créer les composants UI de base (logo, stat-card, tables)
- [x] Créer les composants de formulaires (academic year, grades)
- [x] Créer les composants de cartes (classroom, subject, academic year)
- [x] Créer le layout d'authentification
- [x] Créer la page de login
- [x] Créer le layout administrateur avec sidebar
- [x] Créer le dashboard administrateur
- [x] Créer la page de détail année académique
- [x] Créer les pages de gestion (salles, élèves, professeurs, matières, notes)
- [x] Créer les layouts et pages pour les autres portails (professeur, élève, parent)
- [x] Créer le prototype avec routing RBAC
- [x] Tester et valider l'architecture complète

## Important Notes
- **Design System**: Palette obligatoire (#f7f7f6, #c3b595, #1f1a18, #5b6d77, #bebbb4)
- **Typographie**: Montserrat (H1), Poppins (H2/H3), Inter (body), Roboto (labels)
- **Architecture**: Feature-based, component-based, RBAC strict
- **4 Portails**: Admin, Professeur, Élève, Parent avec permissions distinctes
- **Multilingue**: FR/EN (prêt pour i18n)
- **Responsive**: Mobile/Tablet/Desktop
- **Qualité**: Production-ready, TypeScript strict, code maintenable
  
## Plan Information
*This plan is created when the project is at iteration 0, and date 2026-02-19T15:53:39.092Z*
