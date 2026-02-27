import { clientConfig } from '@/config/client.config'

export const company = {
  name: clientConfig.NOM_ENTREPRISE,
  legalName: clientConfig.NOM_LEGAL,
  siret: clientConfig.SIRET,
  founder: clientConfig.FONDATEUR,
  tagline: clientConfig.SLOGAN,
  phone: clientConfig.TELEPHONE,
  phoneHref: clientConfig.TELEPHONE_HREF,
  email: clientConfig.EMAIL,
  address: `${clientConfig.ADRESSE}, ${clientConfig.CODE_POSTAL} ${clientConfig.VILLE}`,
  whatsapp: clientConfig.WHATSAPP,
  hours: clientConfig.HORAIRES_SEMAINE,
  description: clientConfig.DESCRIPTION_ENTREPRISE,
  url: clientConfig.DOMAINE,
  social: {
    facebook: clientConfig.FACEBOOK,
    instagram: clientConfig.INSTAGRAM,
    linkedin: clientConfig.LINKEDIN,
    google: clientConfig.GOOGLE_REVIEWS,
    googleMaps: clientConfig.GOOGLE_MAPS,
  },
} as const
