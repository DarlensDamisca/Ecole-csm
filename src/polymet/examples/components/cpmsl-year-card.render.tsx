import { BrowserRouter } from "react-router-dom"
import { CPMSLYearCard } from "@/polymet/components/cpmsl-year-card"

export default function CPMSLYearCardRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-4" style={{ backgroundColor: "#FAFAF8" }}>
        <h1 className="text-2xl font-bold mb-6" style={{ color: "#2A3740" }}>
          CPMSL Year Card Component
        </h1>

        <CPMSLYearCard
          year={{ id: '1', name: '2025-2026', status: 'active' }}
          stats={{
            periods: { current: 4, total: 4, complete: true },
            classes: { current: 9, complete: true },
            subjects: { current: 24, complete: true }
          }}
          onConfigure={(id) => console.log('Configure:', id)}
        />

        <CPMSLYearCard
          year={{ id: '2', name: '2026-2027', status: 'preparation' }}
          stats={{
            periods: { current: 2, total: 4, complete: false },
            classes: { current: 5, complete: true },
            subjects: { current: 12, complete: true }
          }}
          onConfigure={(id) => console.log('Configure:', id)}
        />

        <CPMSLYearCard
          year={{ id: '3', name: '2024-2025', status: 'archived' }}
          onConfigure={(id) => console.log('Configure:', id)}
        />
      </div>
    </BrowserRouter>
  )
}