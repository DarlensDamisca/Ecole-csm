import { BrowserRouter } from "react-router-dom"
import { LoginPage } from "@/polymet/pages/login-page"
import { AuthLayout } from "@/polymet/layouts/auth-layout"

export default function LoginPageRender() {
  return (
    <BrowserRouter>
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    </BrowserRouter>
  )
}