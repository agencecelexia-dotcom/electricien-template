import {
  Plug,
  RefreshCw,
  Zap,
  ShieldCheck,
  Smartphone,
  Lightbulb,
  Shield,
  Clock,
  FileText,
  Award,
  type LucideIcon,
} from 'lucide-react'
import { clientConfig } from '@/config/client.config'

export const COMPANY = {
  name: clientConfig.NOM_ENTREPRISE,
  tagline: clientConfig.SLOGAN,
  phone: clientConfig.TELEPHONE,
  phoneHref: clientConfig.TELEPHONE_HREF,
  email: clientConfig.EMAIL,
  address: `${clientConfig.ADRESSE}, ${clientConfig.CODE_POSTAL} ${clientConfig.VILLE}`,
  whatsapp: clientConfig.WHATSAPP,
  hours: `${clientConfig.HORAIRES_SEMAINE} | Urgences ${clientConfig.URGENCE}`,
  yearsExperience: parseInt(clientConfig.ANNEES_EXPERIENCE),
  projectsCompleted: parseInt(clientConfig.NOMBRE_INTERVENTIONS),
  satisfactionRate: parseInt(clientConfig.TAUX_SATISFACTION),
  responseTime: parseInt(clientConfig.DELAI_INTERVENTION),
  certifications: ['Qualifelec', 'RGE', 'NF C 15-100'],
  socialLinks: {
    facebook: clientConfig.FACEBOOK,
    instagram: clientConfig.INSTAGRAM,
    linkedin: clientConfig.LINKEDIN,
    google: clientConfig.GOOGLE_REVIEWS,
  },
}

export const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À Propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

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

export const SERVICES: Service[] = [
  {
    slug: 'installation-electrique',
    title: clientConfig.SERVICE_1_TITRE,
    shortTitle: 'Installation',
    description: clientConfig.SERVICE_1_DESC,
    longDescription: 'Nous réalisons l\'installation électrique complète de votre habitat neuf ou en extension. Du tableau électrique au dernier interrupteur, chaque détail est pensé pour votre confort et votre sécurité. Nos installations respectent scrupuleusement la norme NF C 15-100 et sont certifiées Consuel.',
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
    longDescription: 'Votre installation date de plus de 15 ans ? Il est temps de la rénover. Nous modernisons votre réseau électrique en minimisant les travaux et en respectant votre intérieur. De la simple mise à niveau du tableau à la rénovation complète, nous adaptons notre intervention à vos besoins.',
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
    longDescription: 'Panne de courant, court-circuit, disjoncteur qui saute ? Nos techniciens d\'astreinte interviennent 24h/24 et 7j/7 dans un rayon de 50km. En moins de 30 minutes, un expert est chez vous pour diagnostiquer et résoudre votre problème électrique en toute sécurité.',
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
    longDescription: 'La norme NF C 15-100 évolue régulièrement. Nous vérifions la conformité de votre installation et réalisons les travaux nécessaires pour la mettre aux normes. Indispensable pour votre sécurité, votre assurance et la vente ou location de votre bien immobilier.',
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
    longDescription: 'Pilotez votre maison du bout des doigts. Nous concevons et installons des systèmes domotiques sur mesure : éclairage intelligent, chauffage connecté, volets automatisés, système de sécurité, gestion de l\'énergie. Compatible avec tous les assistants vocaux du marché.',
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
    longDescription: 'L\'éclairage transforme votre espace de vie. Nos experts conçoivent des plans d\'éclairage sur mesure alliant esthétique, fonctionnalité et efficacité énergétique. Intérieur comme extérieur, nous créons l\'ambiance parfaite pour chaque pièce et chaque usage.',
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

export const TESTIMONIALS = [
  {
    id: 1,
    name: clientConfig.TEMOIGNAGE_1_NOM,
    initials: clientConfig.TEMOIGNAGE_1_NOM.split(' ').map(n => n[0]).join(''),
    location: clientConfig.TEMOIGNAGE_1_VILLE,
    service: 'Rénovation',
    rating: parseInt(clientConfig.TEMOIGNAGE_1_NOTE),
    text: clientConfig.TEMOIGNAGE_1_TEXTE,
  },
  {
    id: 2,
    name: clientConfig.TEMOIGNAGE_2_NOM,
    initials: clientConfig.TEMOIGNAGE_2_NOM.split(' ').map(n => n[0]).join(''),
    location: clientConfig.TEMOIGNAGE_2_VILLE,
    service: 'Installation',
    rating: parseInt(clientConfig.TEMOIGNAGE_2_NOTE),
    text: clientConfig.TEMOIGNAGE_2_TEXTE,
  },
  {
    id: 3,
    name: clientConfig.TEMOIGNAGE_3_NOM,
    initials: clientConfig.TEMOIGNAGE_3_NOM.split(' ').map(n => n[0]).join(''),
    location: clientConfig.TEMOIGNAGE_3_VILLE,
    service: 'Domotique',
    rating: parseInt(clientConfig.TEMOIGNAGE_3_NOTE),
    text: clientConfig.TEMOIGNAGE_3_TEXTE,
  },
]

export const FAQ_ITEMS = [
  {
    question: 'Combien coûte une installation électrique complète ?',
    answer: 'Le coût dépend de la surface et de la complexité du projet. Pour un appartement de 60m², comptez entre 8 000€ et 12 000€. Pour une maison de 120m², entre 15 000€ et 25 000€. Nous établissons un devis détaillé gratuit après visite technique.',
  },
  {
    question: 'Êtes-vous disponible pour les urgences le week-end ?',
    answer: 'Oui, notre service d\'urgence fonctionne 24h/24 et 7j/7, y compris les week-ends et jours fériés. Un technicien d\'astreinte est toujours disponible et intervient en moins de 30 minutes dans notre zone de couverture.',
  },
  {
    question: 'Quelles certifications possédez-vous ?',
    answer: 'Nous sommes certifiés Qualifelec (qualification des entreprises d\'électricité), RGE (Reconnu Garant de l\'Environnement) et nous respectons la norme NF C 15-100. Nos techniciens suivent des formations continues pour rester à jour.',
  },
  {
    question: 'Combien de temps dure une rénovation électrique ?',
    answer: 'Pour un appartement, comptez 3 à 5 jours ouvrés. Pour une maison complète, 1 à 2 semaines selon l\'ampleur des travaux. Nous planifions chaque intervention pour minimiser la gêne et vous informons du planning précis avant le début des travaux.',
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer: 'Absolument ! Tous nos devis sont gratuits et sans engagement. Nous réalisons une visite technique sur site pour évaluer précisément vos besoins et vous remettons un devis détaillé sous 48h.',
  },
  {
    question: 'Qu\'est-ce que la mise aux normes NF C 15-100 ?',
    answer: 'La norme NF C 15-100 définit les règles de sécurité des installations électriques résidentielles en France. Elle couvre la protection des personnes contre les chocs électriques, la protection contre les incendies et le dimensionnement des circuits. Une installation conforme est obligatoire pour toute vente ou location.',
  },
  {
    question: 'Quelle garantie offrez-vous sur vos travaux ?',
    answer: 'Tous nos travaux bénéficient de la garantie décennale (10 ans) couvrant les dommages compromettant la solidité de l\'ouvrage. De plus, nous offrons une garantie de parfait achèvement d\'1 an et une garantie biennale de 2 ans sur les équipements.',
  },
]

export const SERVICE_AREAS = [
  {
    department: clientConfig.DEPARTEMENT,
    cities: clientConfig.ZONES_LISTE.split(','),
  },
]

export const REALISATIONS = [
  {
    id: 1,
    title: 'Rénovation Tableau Électrique',
    category: 'renovation',
    description: 'Remplacement complet d\'un tableau électrique vétuste des années 70 par une installation moderne NF C 15-100.',
    beforeImage: '/images/realisations/projet-1-avant.webp',
    afterImage: '/images/realisations/projet-1-apres.webp',
    tags: ['Rénovation', 'Mise aux Normes'],
  },
  {
    id: 2,
    title: 'Éclairage Extérieur Résidentiel',
    category: 'eclairage',
    description: 'Mise en lumière complète de l\'extérieur d\'une maison : allées, façade, jardin et sécurité.',
    beforeImage: '/images/realisations/projet-2-avant.webp',
    afterImage: '/images/realisations/projet-2-apres.webp',
    tags: ['Éclairage', 'Sécurité'],
  },
  {
    id: 3,
    title: 'Installation Maison Neuve 150m²',
    category: 'installation',
    description: 'Installation complète d\'une maison neuve sur deux niveaux, incluant domotique et pré-câblage solaire.',
    beforeImage: '/images/realisations/projet-3-avant.webp',
    afterImage: '/images/realisations/projet-3-apres.webp',
    tags: ['Installation', 'Neuf', 'Consuel'],
  },
  {
    id: 4,
    title: 'Domotique Villa Contemporaine',
    category: 'domotique',
    description: 'Système KNX complet : 32 circuits d\'éclairage, 12 volets motorisés, vidéosurveillance et Apple HomeKit.',
    beforeImage: '/images/realisations/projet-4-avant.webp',
    afterImage: '/images/realisations/projet-4-apres.webp',
    tags: ['Domotique', 'Maison Connectée'],
  },
  {
    id: 5,
    title: 'Mise aux Normes Immeuble 12 Lots',
    category: 'normes',
    description: 'Mise en conformité électrique des parties communes : terre générale, BAES, tableau rénové.',
    beforeImage: '/images/realisations/projet-5-avant.webp',
    afterImage: '/images/realisations/projet-5-apres.webp',
    tags: ['Mise aux Normes', 'Copropriété'],
  },
  {
    id: 6,
    title: 'Dépannage Urgent Boulangerie',
    category: 'urgence',
    description: 'Intervention nocturne d\'urgence suite à un court-circuit. Remise sous tension en 1h.',
    beforeImage: '/images/realisations/projet-6-avant.webp',
    afterImage: '/images/realisations/projet-6-apres.webp',
    tags: ['Urgence', 'Commerce'],
  },
]

export const TEAM_MEMBERS = [
  {
    name: clientConfig.FONDATEUR,
    role: 'Fondateur & Maître Électricien',
    description: `${clientConfig.ANNEES_EXPERIENCE} ans d'expérience dans l'électricité résidentielle et commerciale. Certifié Qualifelec et formateur.`,
    image: '/images/team/equipe-fondateur.webp',
  },
]

export const STATS = [
  { value: parseInt(clientConfig.ANNEES_EXPERIENCE), suffix: '+', label: "Années d'expérience", icon: 'Calendar' as const },
  { value: parseInt(clientConfig.NOMBRE_INTERVENTIONS), suffix: '+', label: 'Projets réalisés', icon: 'Briefcase' as const },
  { value: parseInt(clientConfig.TAUX_SATISFACTION), suffix: '%', label: 'Clients satisfaits', icon: 'Star' as const },
  { value: 24, suffix: '/7', label: 'Disponibilité urgences', icon: 'Clock' as const },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Certifiés Qualifelec & RGE',
    description: 'Nos techniciens sont formés et certifiés aux dernières normes. Pas de sous-traitance, jamais.',
    icon: Shield,
    metric: '100%',
    metricLabel: 'certifié',
  },
  {
    title: 'Intervention < 30 min',
    description: 'En urgence, on arrive en moins de 30 minutes dans votre secteur. 24h/24, week-ends inclus.',
    icon: Clock,
    metric: '30',
    metricLabel: 'minutes',
  },
  {
    title: 'Devis transparent',
    description: 'Devis gratuit, détaillé, sans surprise. Vous validez avant qu\'on touche un fil.',
    icon: FileText,
    metric: '0€',
    metricLabel: 'le devis',
  },
  {
    title: 'Garantie décennale',
    description: 'Tous nos travaux sont couverts 10 ans. Votre tranquillité, c\'est notre engagement.',
    icon: Award,
    metric: '10',
    metricLabel: 'ans',
  },
]
