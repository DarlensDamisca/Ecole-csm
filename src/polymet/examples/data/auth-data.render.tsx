import { users, type User, type UserRole } from "@/polymet/data/auth-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AuthDataRender() {
  const getRoleBadgeVariant = (role: UserRole) => {
    switch (role) {
      case 'admin': return 'default'
      case 'teacher': return 'secondary'
      case 'student': return 'outline'
      case 'parent': return 'outline'
    }
  }

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case 'admin': return 'Administrateur'
      case 'teacher': return 'Professeur'
      case 'student': return 'Élève'
      case 'parent': return 'Parent'
    }
  }

  return (
    <div className="p-8 space-y-6 bg-[#f7f7f6] min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-[#1f1a18] mb-2">Données d'authentification</h1>
        <p className="text-[#5b6d77]">Utilisateurs de test pour les 4 portails</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Card key={user.id} className="border-[#bebbb4]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg text-[#1f1a18]">
                    {user.firstName} {user.lastName}
                  </CardTitle>
                  <Badge variant={getRoleBadgeVariant(user.role)} className="mt-1">
                    {getRoleLabel(user.role)}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm text-[#5b6d77]">Email</p>
                <p className="text-sm font-medium text-[#1f1a18]">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-[#5b6d77]">Mot de passe</p>
                <p className="text-sm font-mono text-[#1f1a18]">{user.password}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}