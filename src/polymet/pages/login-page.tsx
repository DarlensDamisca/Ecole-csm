import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SchoolLogo } from "@/polymet/components/school-logo"
import { authenticateUser, setCurrentUser, type UserRole } from "@/polymet/data/auth-data"
import { EyeIcon, EyeOffIcon, LoaderIcon } from "lucide-react"

export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getRoleRoute = (role: UserRole): string => {
    switch (role) {
      case 'admin':
        return '/admin/dashboard'
      case 'teacher':
        return '/teacher/dashboard'
      case 'student':
        return '/student/dashboard'
      case 'parent':
        return '/parent/dashboard'
      default:
        return '/'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulation d'un délai réseau
    await new Promise(resolve => setTimeout(resolve, 500))

    const user = authenticateUser(email, password)

    if (user) {
      setCurrentUser(user)
      const route = getRoleRoute(user.role)
      navigate(route)
    } else {
      setError("Email ou mot de passe incorrect")
    }

    setIsLoading(false)
  }

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid #E8E6E3',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          padding: '32px',
          width: '100%'
        }}
      >
      {/* Logo CPMSL (visible uniquement sur mobile) */}
      <div className="flex justify-center lg:hidden" style={{ marginBottom: '24px' }}>
        {/* TODO: Replace with proper logo import method */}
        <SchoolLogo size="md" />
      </div>

      {/* En-tête du formulaire */}
      <div style={{ marginBottom: '24px' }}>
        <h1 
          className="font-serif font-bold" 
          style={{ 
            color: '#2A3740', 
            marginBottom: '8px',
            fontSize: '28px',
            letterSpacing: '-0.025em',
            fontWeight: 700
          }}
        >
          Connexion
        </h1>
        <p 
          className="font-sans text-muted-foreground" 
          style={{ 
            fontSize: '13px',
            fontWeight: 400
          }}
        >
          Connectez-vous à votre espace d'administration
        </p>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Champ Email */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="email"
            className="font-sans"
            style={{
              display: 'block',
              color: '#1E1A17',
              marginBottom: '6px',
              fontSize: '13px',
              fontWeight: 500
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="body-base"
            style={{
              width: '100%',
              backgroundColor: 'white',
              border: '1px solid #D1CECC',
              borderRadius: '8px',
              padding: '12px',
              outline: 'none',
              transition: 'all 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#5A7085'
              e.target.style.boxShadow = '0 0 0 2px rgba(90, 112, 133, 0.2)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#D1CECC'
              e.target.style.boxShadow = 'none'
            }}
          />
        </div>

        {/* Champ Mot de passe */}
        <div style={{ marginBottom: '16px' }}>
          <label
            htmlFor="password"
            className="font-sans"
            style={{
              display: 'block',
              color: '#1E1A17',
              marginBottom: '6px',
              fontSize: '13px',
              fontWeight: 500
            }}
          >
            Mot de passe
          </label>
          <div style={{ position: 'relative' }}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="body-base"
              style={{
                width: '100%',
                backgroundColor: 'white',
                border: '1px solid #D1CECC',
                borderRadius: '8px',
                padding: '12px',
                paddingRight: '40px',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#5A7085'
                e.target.style.boxShadow = '0 0 0 2px rgba(90, 112, 133, 0.2)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#D1CECC'
                e.target.style.boxShadow = 'none'
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector('svg')
                if (icon) (icon as unknown as HTMLElement).style.color = '#1E1A17'
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector('svg')
                if (icon) (icon as unknown as HTMLElement).style.color = '#78756F'
              }}
            >
              {showPassword ? (
                <EyeOffIcon style={{ width: '16px', height: '16px', color: '#78756F' }} />
              ) : (
                <EyeIcon style={{ width: '16px', height: '16px', color: '#78756F' }} />
              )}
            </button>
          </div>
        </div>

        {/* Zone d'erreur - Espace réservé */}
        <div style={{ height: '44px', marginBottom: '16px' }}>
          {error && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span className="font-sans" style={{ color: '#C43C3C', fontSize: '13px', fontWeight: 400 }}>
                {error}
              </span>
            </div>
          )}
        </div>

        {/* Bouton Se connecter */}
        <button
          type="submit"
          disabled={isLoading}
          className="font-sans"
          style={{
            width: '100%',
            backgroundColor: isLoading ? '#4A5D6E' : '#5A7085',
            color: 'white',
            borderRadius: '8px',
            height: '44px',
            border: 'none',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
            fontSize: '15px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => {
            if (!isLoading) e.currentTarget.style.backgroundColor = '#4A5D6E'
          }}
          onMouseLeave={(e) => {
            if (!isLoading) e.currentTarget.style.backgroundColor = '#5A7085'
          }}
        >
          {isLoading && (
            <LoaderIcon style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} />
          )}
          {isLoading ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>

      {/* Pied de page */}
      <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #E8E6E3' }}>
        <p className="caption" style={{ color: '#A8A5A2', textAlign: 'center', marginBottom: '4px' }}>
          © 2026 Cours Privé Mixte Saint Léonard
        </p>
        <p className="caption" style={{ color: '#A8A5A2', textAlign: 'center' }}>
          Port-au-Prince, Haïti
        </p>
      </div>
    </div>
    </>
  )
}