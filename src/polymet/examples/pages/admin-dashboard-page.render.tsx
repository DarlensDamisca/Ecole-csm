import { BrowserRouter } from "react-router-dom"
import { AdminDashboardPage } from "@/polymet/pages/admin-dashboard-page"
import { AdminLayout } from "@/polymet/layouts/admin-layout"

export default function AdminDashboardPageRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <AdminDashboardPage />
      </AdminLayout>
    </BrowserRouter>
  )
}