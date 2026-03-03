import { BrowserRouter } from "react-router-dom"
import { GradesPage } from "@/polymet/pages/grades-page"
import { AdminLayout } from "@/polymet/layouts/admin-layout"

export default function GradesPageRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <GradesPage />
      </AdminLayout>
    </BrowserRouter>
  )
}