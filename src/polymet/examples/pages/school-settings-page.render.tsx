import { BrowserRouter } from "react-router-dom"
import { SchoolSettingsPage } from "@/polymet/pages/school-settings-page"
import { AdminLayout } from "@/polymet/layouts/admin-layout"

export default function SchoolSettingsPageRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <SchoolSettingsPage />
      </AdminLayout>
    </BrowserRouter>
  )
}