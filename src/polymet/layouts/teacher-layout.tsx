import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { SchoolLogo } from "@/polymet/components/school-logo"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutDashboardIcon,
  FileTextIcon,
  UsersIcon,
  LogOutIcon,
  MenuIcon,
  XIcon,
  UserIcon,
  SettingsIcon,
  BellIcon
} from "lucide-react"
import { getCurrentUser, logout } from "@/polymet/data/auth-data"
import { cn } from "@/lib/utils"

interface TeacherLayoutProps {
  children: React.ReactNode
}

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboardIcon },
  { label: "Mes Classes", href: "/teacher/classes", icon: UsersIcon },
  { label: "Saisie des Notes", href: "/teacher/grades", icon: FileTextIcon },
]

export function TeacherLayout({ children }: TeacherLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const currentUser = getCurrentUser()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-[#f7f7f6]">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col h-full bg-white border-r border-[#bebbb4]">
          <div className="flex items-center justify-center h-20 px-6 border-b border-[#bebbb4]">
            <SchoolLogo size="md" />
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/')
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-[#c3b595] to-[#5b6d77] text-white shadow-md"
                      : "text-[#5b6d77] hover:bg-[#f7f7f6] hover:text-[#1f1a18]"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t border-[#bebbb4]">
            <div className="flex items-center gap-3 px-4 py-3 bg-[#f7f7f6] rounded-lg">
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser?.avatar} />
                <AvatarFallback>
                  {currentUser?.firstName[0]}{currentUser?.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#1f1a18] truncate">
                  {currentUser?.firstName} {currentUser?.lastName}
                </p>
                <p className="text-xs text-[#5b6d77] truncate">Professeur</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-72 bg-white border-r border-[#bebbb4] z-50">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between h-20 px-6 border-b border-[#bebbb4]">
                <SchoolLogo size="md" />
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)} className="h-8 w-8 p-0">
                  <XIcon className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                  
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                        isActive
                          ? "bg-gradient-to-r from-[#c3b595] to-[#5b6d77] text-white shadow-md"
                          : "text-[#5b6d77] hover:bg-[#f7f7f6] hover:text-[#1f1a18]"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>

              <div className="p-4 border-t border-[#bebbb4]">
                <div className="flex items-center gap-3 px-4 py-3 bg-[#f7f7f6] rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={currentUser?.avatar} />
                    <AvatarFallback>
                      {currentUser?.firstName[0]}{currentUser?.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1f1a18] truncate">
                      {currentUser?.firstName} {currentUser?.lastName}
                    </p>
                    <p className="text-xs text-[#5b6d77] truncate">Professeur</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 bg-white border-b border-[#bebbb4] h-20">
          <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>

            <div className="flex-1 lg:flex-none" />

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <BellIcon className="h-5 w-5 text-[#5b6d77]" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={currentUser?.avatar} />
                      <AvatarFallback>
                        {currentUser?.firstName[0]}{currentUser?.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline text-sm font-medium text-[#1f1a18]">
                      {currentUser?.firstName}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <UserIcon className="mr-2 h-4 w-4" />
                    Profil
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Paramètres
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 dark:text-red-400">
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}