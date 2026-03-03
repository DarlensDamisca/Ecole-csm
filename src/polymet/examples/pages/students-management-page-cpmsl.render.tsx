import { BrowserRouter } from "react-router-dom"
import { StudentsManagementPage } from "@/polymet/pages/students-management-page-cpmsl"
import { AdminLayout } from "@/polymet/layouts/admin-layout"

export default function StudentsManagementPageRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <StudentsManagementPage />
      </AdminLayout>
    </BrowserRouter>
  )
}