export interface Project {
  id: string
  title: string
  description: string
  category: 'plugin' | 'library' | 'utility' | 'opensource'
  technologies: string[]
  image?: string
  github?: string
  demo?: string
  featured?: boolean
  details?: string[]
}

export interface Skill {
  name: string
  icon: string
  category: 'language' | 'framework' | 'database' | 'tool' | 'devops' | 'other'
}


