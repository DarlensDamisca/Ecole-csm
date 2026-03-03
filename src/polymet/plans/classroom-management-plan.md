# Gestion des Salles CPMSL

## User Request
Ajouter la gestion des salles dans la configuration de l'année scolaire avec :
- Onglet "Salles" dans academic-year-config
- Sélecteur de classe pour filtrer les salles
- Tableau des salles avec KPIs (total, capacité, élèves inscrits)
- Modal d'ajout/modification de salle
- Confirmation de suppression avec validation
- Affichage combiné "Classe + Salle" partout dans l'application

## Related Files
- @/polymet/data/school-data (to update) - Vérifier interface Classroom et ajouter données mockées
- @/polymet/components/classrooms-management (to create) - Composant de gestion des salles
- @/polymet/components/create-classroom-modal (to create) - Modal ajout/modification salle
- @/polymet/components/academic-year-config (to update) - Ajouter onglet Salles
- @/polymet/pages/students-management-page (to update) - Affichage combiné classe+salle
- @/polymet/pages/grades-page (to update) - Sélecteur avec classe+salle
- @/polymet/pages/reports-page (to update) - Sélecteur avec classe+salle

## TODO List
- [x] Vérifier et mettre à jour l'interface Classroom dans school-data
- [x] Ajouter les données mockées des salles (7e, 8e, 9e, NSI...)
- [x] Créer le composant classrooms-management avec sélecteur classe, KPIs et tableau
- [x] Créer le modal create-classroom-modal pour ajout/modification
- [x] Ajouter l'onglet "Salles" dans academic-year-config
- [x] Ajouter fonctions utilitaires formatClassroomDisplay et getClassroomOptionsForLevel
- [x] Mettre à jour students-management-page pour affichage combiné (colonne Classe/Salle)
- [x] Mettre à jour grades-page pour sélecteur avec classe+salle
- [x] Mettre à jour reports-page pour sélecteur avec classe+salle

## Important Notes
- Interface Classroom : id, name, levelId, capacity, academicYearId
- Format d'affichage combiné : "NomClasse Salle NomSalle" (ex: "7e Salle A")
- KPIs : Total salles, Capacité totale, Élèves inscrits
- Validation : nom unique par classe, capacité 1-60
- Suppression bloquée si élèves inscrits dans la salle
- Onglets : Étapes | Classes | Salles | Matières
- Fonctions utilitaires : formatClassroomDisplay(levelId, classroomId) et getClassroomOptionsForLevel(levelId)
- Données mockées : 10 salles réparties sur 7e (2), 8e (2), 9e (1), NSI LLA (1), NSI SMP (2), NSI SES (1), NSI SVT (1)
- Niveaux mis à jour : suppression du suffixe A/B dans les noms de levels (7e au lieu de 7e A/B)

  
## Plan Information
*This plan is created when the project is at iteration 92, and date 2026-02-22T21:36:03.515Z*
