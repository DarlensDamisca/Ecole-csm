export type UserRole = 'admin' | 'teacher' | 'student' | 'parent'

export interface User {
  id: string
  email: string
  password: string
  role: UserRole
  firstName: string
  lastName: string
  avatar?: string
  linkedStudentId?: string // Pour les parents et élèves
}

export const users: User[] = [
  // Administrateurs
  {
    id: 'admin-1',
    email: 'admin@school.com',
    password: 'admin123',
    role: 'admin',
    firstName: 'Marie',
    lastName: 'Dubois',
    avatar: 'https://github.com/yusufhilmi.png'
  },
  
  // Professeurs
  {
    id: 'teacher-1',
    email: 'prof.martin@school.com',
    password: 'prof123',
    role: 'teacher',
    firstName: 'Jean',
    lastName: 'Martin',
    avatar: 'https://github.com/kdrnp.png'
  },
  {
    id: 'teacher-2',
    email: 'prof.bernard@school.com',
    password: 'prof123',
    role: 'teacher',
    firstName: 'Sophie',
    lastName: 'Bernard',
    avatar: 'https://github.com/yahyabedirhan.png'
  },
  
  // Élèves
  {
    id: 'student-1',
    email: 'pierre.dupont@school.com',
    password: 'student123',
    role: 'student',
    firstName: 'Pierre',
    lastName: 'Dupont',
    avatar: 'https://github.com/denizbuyuktas.png',
    linkedStudentId: 'student-1'
  },
  {
    id: 'student-2',
    email: 'julie.moreau@school.com',
    password: 'student123',
    role: 'student',
    firstName: 'Julie',
    lastName: 'Moreau',
    avatar: 'https://github.com/shoaibux1.png',
    linkedStudentId: 'student-2'
  },
  
  // Parents
  {
    id: 'parent-1',
    email: 'parent.dupont@school.com',
    password: 'parent123',
    role: 'parent',
    firstName: 'Michel',
    lastName: 'Dupont',
    avatar: 'https://github.com/polymet-ai.png',
    linkedStudentId: 'student-1'
  }
]

export const authenticateUser = (email: string, password: string): User | null => {
  const user = users.find(u => u.email === email && u.password === password)
  return user || null
}

export const getUserById = (id: string): User | null => {
  return users.find(u => u.id === id) || null
}

export const getCurrentUser = (): User | null => {
  // Simulation de récupération depuis localStorage
  if (typeof window !== 'undefined') {
    const userJson = localStorage.getItem('currentUser')
    return userJson ? JSON.parse(userJson) : null
  }
  return null
}

export const setCurrentUser = (user: User | null): void => {
  if (typeof window !== 'undefined') {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('currentUser')
    }
  }
}

export const logout = (): void => {
  setCurrentUser(null)
}