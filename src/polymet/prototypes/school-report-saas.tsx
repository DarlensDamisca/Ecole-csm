import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { AuthLayout } from "@/polymet/layouts/auth-layout"
import { AdminLayout } from "@/polymet/layouts/admin-layout"
import { LoginPage } from "@/polymet/pages/login-page"
import { AdminDashboardPage } from "@/polymet/pages/admin-dashboard-page"
import { SchoolSettingsPage } from "@/polymet/pages/school-settings-page"
import { AcademicYearsPage } from "@/polymet/pages/academic-years-page"
import { AcademicYearConfigPage } from "@/polymet/pages/academic-year-config-page"
import { StudentsManagementPage } from "@/polymet/pages/students-management-page-cpmsl"
import { GradesPage } from "@/polymet/pages/grades-page"
import { ReportsPage } from "@/polymet/pages/reports-page-clean"

// Auto-login component for demo purposes
function AutoLogin() {
  const location = useLocation()
  
  useEffect(() => {
    // Auto-login for demo if accessing admin routes
    if (location.pathname.startsWith('/admin') && typeof window !== 'undefined') {
      const currentUser = localStorage.getItem('currentUser')
      if (!currentUser) {
        const defaultAdmin = {
          id: 'admin-1',
          email: 'admin@school.com',
          password: 'admin123',
          role: 'admin',
          firstName: 'Marie',
          lastName: 'Dubois',
          avatar: 'https://github.com/yusufhilmi.png'
        }
        localStorage.setItem('currentUser', JSON.stringify(defaultAdmin))
      }
    }
  }, [location.pathname])
  
  return null
}

export default function SchoolReportSaas() {
  return (
    <Router>
      <AutoLogin />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><SchoolSettingsPage /></AdminLayout>} />
        <Route path="/admin/academic-years" element={<AdminLayout><AcademicYearsPage /></AdminLayout>} />
        <Route path="/admin/academic-year/:yearId/config" element={<AdminLayout><AcademicYearConfigPage /></AdminLayout>} />
        
        {/* Academic Year Management Routes */}
        <Route path="/admin/academic-year/:yearId/students" element={<AdminLayout><StudentsManagementPage /></AdminLayout>} />
        <Route path="/admin/academic-year/:yearId/grades" element={<AdminLayout><GradesPage /></AdminLayout>} />
        <Route path="/admin/academic-year/:yearId/reports" element={<AdminLayout><ReportsPage /></AdminLayout>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}