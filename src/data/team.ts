import { clientConfig } from '@/config/client.config'

export interface TeamMember {
  name: string
  role: string
  description: string
  image: string
}

export const team: TeamMember[] = [
  {
    name: clientConfig.FONDATEUR,
    role: 'Fondateur & Maître Électricien',
    description: `${clientConfig.ANNEES_EXPERIENCE} ans d'expérience dans l'électricité résidentielle et commerciale. Certifié Qualifelec et formateur.`,
    image: '/images/team/equipe-fondateur.webp',
  },
]
