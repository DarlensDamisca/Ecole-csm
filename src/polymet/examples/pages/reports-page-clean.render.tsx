import { BrowserRouter } from "react-router-dom"
import { ReportsPage } from "@/polymet/pages/reports-page-clean"
import { AdminLayout } from "@/polymet/layouts/admin-layout"

export default function ReportsPageRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <ReportsPage />
      </AdminLayout>
    </BrowserRouter>
  )
}