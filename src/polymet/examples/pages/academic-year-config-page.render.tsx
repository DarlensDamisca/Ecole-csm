import { BrowserRouter } from "react-router-dom"
import { AcademicYearConfigPage } from "@/polymet/pages/academic-year-config-page"
import { AdminLayout } from "@/polymet/layouts/admin-layout"

export default function AcademicYearConfigPageRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <AcademicYearConfigPage />
      </AdminLayout>
    </BrowserRouter>
  )
}