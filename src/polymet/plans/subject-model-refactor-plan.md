# Refonte du modèle des matières CPMSL

## User Request
Refondre complètement le modèle des matières pour refléter la réalité métier de l'école CPMSL avec :
- Matières parent (MENFP) et sous-matières (CPMSL)
- Coefficients par filière pour le Nouveau Secondaire
- Évaluation en blanc pour 9e et NSIV
- Adaptation de la grille de saisie et des bulletins

## Related Files
- @/polymet/data/school-data (to update) - Interfaces Subject → SubjectParent/SubjectChild + données mockées
- @/polymet/components/create-subject-modal (to update) - Modal en 2 sections avec coefficients par filière
- @/polymet/components/subjects-management (to update) - Affichage hiérarchique parent/enfant
- @/polymet/components/academic-year-config (to view) - Intégration du modal
- @/polymet/components/grades-grid (to update) - Sélecteur groupé + mode évaluation en blanc
- @/polymet/components/cpmsl-report-template (to update) - Affichage conditionnel parent/enfant
- @/polymet/pages/grades-page (to view) - Utilisation de grades-grid
- @/polymet/pages/reports-page (to view) - Utilisation du template

## TODO List
- [x] Mettre à jour school-data.tsx avec les nouvelles interfaces SubjectParent/SubjectChild
- [x] Ajouter le champ isBlancExam à l'interface Period
- [x] Créer les données mockées complètes (Primaire + Nouveau Secondaire)
- [x] Refondre create-subject-modal avec 2 sections et coefficients par filière
- [x] Mettre à jour subjects-management pour affichage hiérarchique
- [x] Modifier grades-grid pour sélecteur groupé et mode évaluation en blanc
- [x] Adapter cpmsl-report-template pour affichage conditionnel
- [x] Mettre à jour academic-year-config pour toggle évaluation en blanc (9e/NSIV)

## Important Notes
- SubjectParent = matière MENFP avec coefficients ministère
- SubjectChild = sous-matière CPMSL avec coefficient interne
- Primaire (7e/8e/9e) : coefficient unique (tronc commun)
- Nouveau Secondaire (NSI/NSII) : 4 coefficients (LLA/SES/SMP/SVT)
- Évaluation en blanc : uniquement 9e et NSIV, un seul toggle actif à la fois
- Mode évaluation en blanc : saisie directe sur SubjectParent (pas de sous-matières)
- subjects-management : affichage hiérarchique avec expand/collapse, coefficients par filière visibles
- grades-grid : sélecteur groupé (parent > enfants), mode évaluation en blanc (saisie sur parent uniquement)
- cpmsl-report-template : affichage conditionnel (mode normal = sous-matières, mode blanc = matières parent), coefficients adaptés par filière
- academic-year-config : toggle évaluation en blanc dans l'onglet Étapes, un seul toggle actif à la fois (9e OU NSIV), badge visuel pour identifier les étapes en mode blanc

  
## Plan Information
*This plan is created when the project is at iteration 88, and date 2026-02-22T20:34:55.184Z*
