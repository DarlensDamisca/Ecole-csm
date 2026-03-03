import { BrowserRouter } from "react-router-dom"
import { ArchivedYearBanner } from "@/polymet/components/archived-year-banner"

export default function ArchivedYearBannerRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Archived Year Banner</h1>
          <p className="text-muted-foreground">Bandeau d'avertissement pour les années archivées</p>
        </div>

        <div className="space-y-4 max-w-3xl">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Année 2023-2024</h3>
            <ArchivedYearBanner yearName="2023-2024" />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Année 2022-2023</h3>
            <ArchivedYearBanner yearName="2022-2023" />
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Année 2021-2022</h3>
            <ArchivedYearBanner yearName="2021-2022" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}