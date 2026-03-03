import { BrowserRouter } from "react-router-dom"
import { SchoolLogo } from "@/polymet/components/school-logo"

export default function SchoolLogoRender() {
  return (
    <BrowserRouter>
      <div className="p-8 space-y-8 bg-[#f7f7f6] min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-[#1f1a18] mb-2">School Logo Component</h1>
          <p className="text-[#5b6d77]">Logo de l'application avec différentes tailles</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-[#bebbb4]">
            <h3 className="text-sm font-medium text-[#5b6d77] mb-4">Large avec texte</h3>
            <SchoolLogo size="lg" />
          </div>

          <div className="bg-white p-6 rounded-lg border border-[#bebbb4]">
            <h3 className="text-sm font-medium text-[#5b6d77] mb-4">Medium avec texte (défaut)</h3>
            <SchoolLogo size="md" />
          </div>

          <div className="bg-white p-6 rounded-lg border border-[#bebbb4]">
            <h3 className="text-sm font-medium text-[#5b6d77] mb-4">Small avec texte</h3>
            <SchoolLogo size="sm" />
          </div>

          <div className="bg-white p-6 rounded-lg border border-[#bebbb4]">
            <h3 className="text-sm font-medium text-[#5b6d77] mb-4">Sans texte</h3>
            <div className="flex items-center gap-4">
              <SchoolLogo size="lg" showText={false} />
              <SchoolLogo size="md" showText={false} />
              <SchoolLogo size="sm" showText={false} />
            </div>
          </div>

          <div className="bg-[#1f1a18] p-6 rounded-lg">
            <h3 className="text-sm font-medium text-white mb-4">Sur fond sombre</h3>
            <SchoolLogo size="lg" />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}