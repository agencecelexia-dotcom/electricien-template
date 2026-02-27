import { clientConfig } from '@/config/client.config'

/** Calcule les initiales a partir d'un nom (ex: "Marie D." -> "MD") */
function getInitials(name: string): string {
  return name
    .split(/[\s-]+/)
    .map((part) => part.charAt(0).toUpperCase())
    .filter((char) => /[A-ZÀ-Ü]/.test(char))
    .join('')
}

export interface Testimonial {
  id: number
  name: string
  initials: string
  location: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: clientConfig.TEMOIGNAGE_1_NOM,
    initials: getInitials(clientConfig.TEMOIGNAGE_1_NOM),
    location: clientConfig.TEMOIGNAGE_1_VILLE,
    rating: Number(clientConfig.TEMOIGNAGE_1_NOTE),
    text: clientConfig.TEMOIGNAGE_1_TEXTE,
  },
  {
    id: 2,
    name: clientConfig.TEMOIGNAGE_2_NOM,
    initials: getInitials(clientConfig.TEMOIGNAGE_2_NOM),
    location: clientConfig.TEMOIGNAGE_2_VILLE,
    rating: Number(clientConfig.TEMOIGNAGE_2_NOTE),
    text: clientConfig.TEMOIGNAGE_2_TEXTE,
  },
  {
    id: 3,
    name: clientConfig.TEMOIGNAGE_3_NOM,
    initials: getInitials(clientConfig.TEMOIGNAGE_3_NOM),
    location: clientConfig.TEMOIGNAGE_3_VILLE,
    rating: Number(clientConfig.TEMOIGNAGE_3_NOTE),
    text: clientConfig.TEMOIGNAGE_3_TEXTE,
  },
]
