# MVP Admin-Only Transformation

## User Request
Transformer l'application en MVP centré uniquement sur l'administrateur. Supprimer tous les rôles (Professeur, Parent, Élève) sauf Admin. Modifier les moyennes pour être sur /10 au lieu de /20, avec seuil de réussite à 7.00/10.

## Related Files
- @/polymet/prototypes/school-report-saas.tsx (to edit) - Supprimer routes Teacher/Student/Parent
- @/polymet/pages/admin-dashboard-page.tsx (to edit) - Remplacer carte Professeurs par Périodes, supprimer Taux d'assiduité
- @/polymet/pages/login-page.tsx (to edit) - Supprimer bloc comptes de test, ajouter lien mot de passe oublié
- @/polymet/layouts/academic-year-layout.tsx (to edit) - Supprimer "Professeurs" du menu
- @/polymet/pages/academic-year-overview-page.tsx (to edit) - Supprimer accès rapide Professeurs
- @/polymet/components/student-statistics.tsx (to edit) - Changer moyennes /20 vers /10
- @/polymet/components/student-report-generator.tsx (to edit) - Changer moyennes /20 vers /10
- @/polymet/components/class-statistics.tsx (to edit) - Changer moyennes /20 vers /10
- @/polymet/components/grades-management.tsx (to edit) - Changer moyennes /20 vers /10

## TODO List
- [x] Supprimer routes Teacher/Student/Parent du prototype
- [x] Supprimer imports inutiles des layouts Teacher/Student/Parent
- [x] Modifier dashboard admin : remplacer carte Professeurs par Périodes ouvertes
- [x] Supprimer métrique "Taux d'assiduité" du dashboard
- [x] Modifier page login : supprimer bloc comptes de test, ajouter lien mot de passe oublié
- [x] Supprimer "Professeurs" du menu de navigation (academic-year-layout)
- [x] Supprimer accès rapide "Professeurs" de la vue d'ensemble
- [x] Changer toutes les moyennes de /20 vers /10 dans student-statistics
- [x] Changer toutes les moyennes de /20 vers /10 dans student-report-generator
- [x] Changer toutes les moyennes de /20 vers /10 dans class-statistics
- [x] Changer toutes les moyennes de /20 vers /10 dans grades-management
- [x] Changer seuil de réussite de 10/20 vers 7.00/10 partout

## Important Notes
- MVP = Admin uniquement, pas de portails Teacher/Student/Parent
- Les élèves existent en base mais pas de portail élève
- Moyennes sur /10 avec seuil de réussite à 7.00/10
- Simplifier la page de connexion (pas de comptes de test visibles)
  
## Plan Information
*This plan is created when the project is at iteration 3, and date 2026-02-20T01:45:02.921Z*
