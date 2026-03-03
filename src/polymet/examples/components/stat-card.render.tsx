import { BrowserRouter } from "react-router-dom"
import { StatCard } from "@/polymet/components/stat-card"
import { CalendarIcon, UsersIcon, SchoolIcon, BarChart3Icon } from "lucide-react"

export default function StatCardRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-6" style={{ backgroundColor: "#FAFAF8" }}>
        <div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#2A3740" }}>Stat Card Component</h1>
          <p style={{ color: "#5C5955" }}>KPI cards avec bordure gauche colorée — Style CPMSL</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Année active"
            value="2025-2026"
            icon={CalendarIcon}
            accentColor="#5A7085"
            iconBgColor="#F0F4F7"
            iconColor="#5A7085"
          />
          
          <StatCard
            label="Élèves inscrits"
            value={187}
            icon={UsersIcon}
            accentColor="#2D7D46"
            iconBgColor="#E8F5EC"
            iconColor="#2D7D46"
          />
          
          <StatCard
            label="Classes"
            value={9}
            icon={SchoolIcon}
            accentColor="#B0A07A"
            iconBgColor="#FAF8F3"
            iconColor="#B0A07A"
          />
          
          <StatCard
            label="Étape en cours"
            value="Étape 2"
            icon={BarChart3Icon}
            accentColor="#2B6CB0"
            iconBgColor="#E3EFF9"
            iconColor="#2B6CB0"
          />
        </div>
      </div>
    </BrowserRouter>
  )
}