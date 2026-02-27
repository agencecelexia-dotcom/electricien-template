import {
  Plug,
  RefreshCw,
  Zap,
  ShieldCheck,
  Smartphone,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react'
import { clientConfig } from '@/config/client.config'

export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: LucideIcon
  image: string
  features: string[]
  benefits: string[]
  process: { step: number; title: string; description: string }[]
  cta: string
}

export const services: Service[] = [
  {
    slug: 'installation-electrique',
    title: clientConfig.SERVICE_1_TITRE,
    shortTitle: 'Installation',
    description: clientConfig.SERVICE_1_DESC,
    longDescription:
      'Nous réalisons l\'installation électrique complète de votre habitat neuf ou en extension. Du tableau électrique au dernier interrupteur, chaque détail est pensé pour votre confort et votre sécurité. Nos installations respectent scrupuleusement la norme NF C 15-100 et sont certifiées Consuel.',
    icon: Plug,
    image: '/images/services/installation-electrique.webp',
    cta: 'Planifier mon installation',
    features: [
      'Tableau électrique dernière génération',
      'Câblage structuré et organisé',
      'Prises et interrupteurs design',
      'Certification Consuel incluse',
      'Plan électrique détaillé fourni',
      'Garantie décennale',
    ],
    benefits: [
      'Sécurité maximale pour votre famille',
      'Conformité totale aux normes',
      'Installation évolutive et pérenne',
      'Économies d\'énergie dès le premier jour',
    ],
    process: [
      { step: 1, title: 'Étude & Devis', description: 'Visite technique gratuite et devis détaillé sous 48h.' },
      { step: 2, title: 'Planification', description: 'Plan électrique sur mesure validé ensemble.' },
      { step: 3, title: 'Installation', description: 'Réalisation par nos techniciens certifiés.' },
      { step: 4, title: 'Certification', description: 'Passage Consuel et remise des documents.' },
    ],
  },
  {
    slug: 'renovation-electrique',
    title: clientConfig.SERVICE_2_TITRE,
    shortTitle: 'Rénovation',
    description: clientConfig.SERVICE_2_DESC,
    longDescription:
      'Votre installation date de plus de 15 ans ? Il est temps de la rénover. Nous modernisons votre réseau électrique en minimisant les travaux et en respectant votre intérieur. De la simple mise à niveau du tableau à la rénovation complète, nous adaptons notre intervention à vos besoins.',
    icon: RefreshCw,
    image: '/images/services/renovation-electrique.webp',
    cta: 'Rénover mon installation',
    features: [
      'Diagnostic complet de l\'existant',
      'Remplacement tableau vétuste',
      'Mise en conformité du câblage',
      'Ajout de circuits dédiés',
      'Travaux propres et soignés',
      'Accompagnement administratif',
    ],
    benefits: [
      'Sécurité rétablie dans votre logement',
      'Valeur immobilière augmentée',
      'Assurance habitation conforme',
      'Confort électrique moderne',
    ],
    process: [
      { step: 1, title: 'Diagnostic', description: 'Audit complet de votre installation actuelle.' },
      { step: 2, title: 'Préconisations', description: 'Rapport détaillé avec solutions et devis.' },
      { step: 3, title: 'Rénovation', description: 'Travaux réalisés dans les règles de l\'art.' },
      { step: 4, title: 'Validation', description: 'Tests de conformité et remise en service.' },
    ],
  },
  {
    slug: 'depannage-urgence',
    title: clientConfig.SERVICE_3_TITRE,
    shortTitle: 'Urgence 24/7',
    description: clientConfig.SERVICE_3_DESC,
    longDescription:
      'Panne de courant, court-circuit, disjoncteur qui saute ? Nos techniciens d\'astreinte interviennent 24h/24 et 7j/7 dans un rayon de 50km. En moins de 30 minutes, un expert est chez vous pour diagnostiquer et résoudre votre problème électrique en toute sécurité.',
    icon: Zap,
    image: '/images/services/depannage-urgence.webp',
    cta: 'Appeler maintenant',
    features: [
      'Disponibilité 24h/24, 7j/7',
      'Intervention en moins de 30 min',
      'Diagnostic sur place immédiat',
      'Véhicules équipés en permanence',
      'Tarifs transparents annoncés',
      'Devis avant intervention si réparation lourde',
    ],
    benefits: [
      'Tranquillité d\'esprit totale',
      'Réactivité garantie jour et nuit',
      'Techniciens expérimentés et certifiés',
      'Pas de surprise sur la facture',
    ],
    process: [
      { step: 1, title: 'Appel', description: 'Contactez-nous 24/7, un technicien vous répond immédiatement.' },
      { step: 2, title: 'Intervention', description: 'Arrivée sur site en moins de 30 minutes.' },
      { step: 3, title: 'Diagnostic', description: 'Identification rapide de la panne.' },
      { step: 4, title: 'Réparation', description: 'Résolution du problème et remise en service.' },
    ],
  },
  {
    slug: 'mise-aux-normes',
    title: clientConfig.SERVICE_4_TITRE,
    shortTitle: 'Normes',
    description: clientConfig.SERVICE_4_DESC,
    longDescription:
      'La norme NF C 15-100 évolue régulièrement. Nous vérifions la conformité de votre installation et réalisons les travaux nécessaires pour la mettre aux normes. Indispensable pour votre sécurité, votre assurance et la vente ou location de votre bien immobilier.',
    icon: ShieldCheck,
    image: '/images/services/mise-aux-normes.webp',
    cta: 'Vérifier ma conformité',
    features: [
      'Diagnostic électrique complet',
      'Rapport de conformité détaillé',
      'Mise aux normes NF C 15-100',
      'Attestation de conformité',
      'Accompagnement pour vente/location',
      'Priorité sécurité incendie',
    ],
    benefits: [
      'Conformité légale assurée',
      'Sécurité de votre famille',
      'Assurance habitation valide',
      'Vente immobilière facilitée',
    ],
    process: [
      { step: 1, title: 'Inspection', description: 'Vérification point par point de votre installation.' },
      { step: 2, title: 'Rapport', description: 'Document détaillé des non-conformités.' },
      { step: 3, title: 'Travaux', description: 'Mise en conformité par nos techniciens.' },
      { step: 4, title: 'Certification', description: 'Attestation de conformité délivrée.' },
    ],
  },
  {
    slug: 'domotique-maison-connectee',
    title: clientConfig.SERVICE_5_TITRE,
    shortTitle: 'Domotique',
    description: clientConfig.SERVICE_5_DESC,
    longDescription:
      'Pilotez votre maison du bout des doigts. Nous concevons et installons des systèmes domotiques sur mesure : éclairage intelligent, chauffage connecté, volets automatisés, système de sécurité, gestion de l\'énergie. Compatible avec tous les assistants vocaux du marché.',
    icon: Smartphone,
    image: '/images/services/domotique-maison-connectee.webp',
    cta: 'Connecter ma maison',
    features: [
      'Éclairage intelligent et programmable',
      'Chauffage connecté et économique',
      'Volets roulants automatisés',
      'Système d\'alarme et vidéosurveillance',
      'Compatible Alexa, Google, HomeKit',
      'Application de contrôle centralisé',
    ],
    benefits: [
      'Confort de vie au quotidien',
      'Économies d\'énergie significatives',
      'Sécurité renforcée de votre habitat',
      'Valeur immobilière augmentée',
    ],
    process: [
      { step: 1, title: 'Consultation', description: 'Analyse de vos besoins et habitudes.' },
      { step: 2, title: 'Conception', description: 'Système sur mesure adapté à votre habitat.' },
      { step: 3, title: 'Installation', description: 'Mise en place et configuration complète.' },
      { step: 4, title: 'Formation', description: 'Prise en main et support technique.' },
    ],
  },
  {
    slug: 'eclairage',
    title: clientConfig.SERVICE_6_TITRE,
    shortTitle: 'Éclairage',
    description: clientConfig.SERVICE_6_DESC,
    longDescription:
      'L\'éclairage transforme votre espace de vie. Nos experts conçoivent des plans d\'éclairage sur mesure alliant esthétique, fonctionnalité et efficacité énergétique. Intérieur comme extérieur, nous créons l\'ambiance parfaite pour chaque pièce et chaque usage.',
    icon: Lightbulb,
    image: '/images/services/eclairage.webp',
    cta: 'Éclairer mon intérieur',
    features: [
      'Plan d\'éclairage personnalisé',
      'LED dernière génération',
      'Éclairage architectural intérieur',
      'Illumination extérieure et jardin',
      'Variateurs et scènes d\'ambiance',
      'Éclairage de sécurité',
    ],
    benefits: [
      'Ambiance sur mesure pour chaque pièce',
      'Réduction de la consommation jusqu\'à 80%',
      'Mise en valeur de votre architecture',
      'Sécurité nocturne extérieure',
    ],
    process: [
      { step: 1, title: 'Étude lumière', description: 'Analyse de vos espaces et de vos envies.' },
      { step: 2, title: 'Design', description: 'Plan d\'éclairage 3D et choix des luminaires.' },
      { step: 3, title: 'Installation', description: 'Pose et raccordement par nos spécialistes.' },
      { step: 4, title: 'Mise en scène', description: 'Réglages des ambiances et programmation.' },
    ],
  },
]
