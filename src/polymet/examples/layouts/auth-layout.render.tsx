import { BrowserRouter } from "react-router-dom"
import { AuthLayout } from "@/polymet/layouts/auth-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthLayoutRender() {
  return (
    <BrowserRouter>
      <AuthLayout>
        <Card className="border-[#bebbb4]">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f1a18]">Contenu de la page</CardTitle>
            <CardDescription className="text-[#5b6d77]">
              Le formulaire de connexion apparaîtra ici
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-10 bg-[#f7f7f6] rounded" />
              <div className="h-10 bg-[#f7f7f6] rounded" />
              <div className="h-10 bg-[#c3b595] rounded" />
            </div>
          </CardContent>
        </Card>
      </AuthLayout>
    </BrowserRouter>
  )
}