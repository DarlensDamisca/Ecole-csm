# Dashboard Admin CPMSL — Redesign

## User Request
Créer un nouveau tableau de bord administrateur CPMSL avec une palette de couleurs spécifique (Bleu Acier, Or Sable, Gris Chauds) et une interface sobre et professionnelle.

## Related Files
- @/polymet/pages/admin-dashboard-page.tsx (to update) - Page principale du dashboard
- @/polymet/layouts/admin-layout.tsx (to update) - Layout avec sidebar CPMSL
- @/polymet/components/stat-card.tsx (to create) - Composant KPI card
- @/polymet/components/class-statistics.tsx (to create) - Tableau aperçu des classes
- @/polymet/data/school-data.tsx (to view) - Données mockées

## TODO List
- [x] Créer le composant stat-card avec bordure gauche colorée
- [x] Créer le composant class-statistics pour le tableau des classes
- [x] Mettre à jour admin-layout avec la nouvelle sidebar CPMSL (couleurs primary-800)
- [x] Mettre à jour admin-dashboard-page avec les 4 sections demandées
- [x] Ajouter les couleurs CPMSL personnalisées dans le CSS (utilisé inline styles)

## Important Notes
### Palette de couleurs CPMSL (codes HEX exacts)
**Primary (Bleu Acier)**: #2A3740 (800), #5A7085 (500), #D9E3EA (100)
**Secondary (Or Sable)**: #C3B594 (400), #F0EBDF (100), #7A6E50 (700)
**Neutral (Gris Chauds)**: #FAFAF8 (50), #1E1A17 (900), #5C5955 (600)
**Sémantique**: Success #2D7D46, Warning #C48B1A, Error #C43C3C, Info #2B6CB0

### Structure du dashboard
1. **4 KPI Cards** : Année active, Élèves inscrits, Classes, Étape en cours
2. **2 colonnes** : Actions rapides (gauche) + Alertes (droite)
3. **Tableau classes** : Aperçu avec statuts et progression
4. **Sidebar** : Fond primary-800 avec logo CPMSL et menu groupé
  
## Plan Information
*This plan is created when the project is at iteration 94, and date 2026-02-22T22:04:45.839Z*
