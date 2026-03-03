import { BrowserRouter } from "react-router-dom"
import { AcademicYearsPage } from "@/polymet/pages/academic-years-page"
import { AdminLayout } from "@/polymet/layouts/admin-layout"

export default function AcademicYearsPageRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <AcademicYearsPage />
      </AdminLayout>
    </BrowserRouter>
  )
}