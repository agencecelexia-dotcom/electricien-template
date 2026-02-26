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

export const COMPANY = {
  name: 'ÉlectroPro',
  tagline: 'Votre Expert Électricien',
  phone: '01 23 45 67 89',
  phoneHref: 'tel:+33123456789',
  email: 'contact@electropro.fr',
  address: '15 Rue Voltaire, 75011 Paris',
  whatsapp: 'https://wa.me/33123456789',
  hours: 'Lun-Ven: 8h-19h | Urgences 24/7',
  yearsExperience: 15,
  projectsCompleted: 2500,
  satisfactionRate: 98,
  responseTime: 30,
  certifications: ['Qualifelec', 'RGE', 'NF C 15-100'],
  socialLinks: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    google: '#',
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
}

export const SERVICES: Service[] = [
  {
    slug: 'installation-electrique',
    title: 'Installation Électrique',
    shortTitle: 'Installation',
    description: 'Installation électrique complète pour constructions neuves et extensions. Câblage aux normes NF C 15-100.',
    longDescription: 'Nous réalisons l\'installation électrique complète de votre habitat neuf ou en extension. Du tableau électrique au dernier interrupteur, chaque détail est pensé pour votre confort et votre sécurité. Nos installations respectent scrupuleusement la norme NF C 15-100 et sont certifiées Consuel.',
    icon: Plug,
    image: '/images/services/installation-electrique.webp',
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
    title: 'Rénovation Électrique',
    shortTitle: 'Rénovation',
    description: 'Modernisez votre installation électrique. Mise à niveau complète avec respect de votre intérieur.',
    longDescription: 'Votre installation date de plus de 15 ans ? Il est temps de la rénover. Nous modernisons votre réseau électrique en minimisant les travaux et en respectant votre intérieur. De la simple mise à niveau du tableau à la rénovation complète, nous adaptons notre intervention à vos besoins.',
    icon: RefreshCw,
    image: '/images/services/renovation-electrique.webp',
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
    title: 'Dépannage & Urgence',
    shortTitle: 'Urgence 24/7',
    description: 'Intervention d\'urgence 24h/24, 7j/7. Dépannage rapide en moins de 30 minutes dans votre secteur.',
    longDescription: 'Panne de courant, court-circuit, disjoncteur qui saute ? Nos techniciens d\'astreinte interviennent 24h/24 et 7j/7 dans un rayon de 50km. En moins de 30 minutes, un expert est chez vous pour diagnostiquer et résoudre votre problème électrique en toute sécurité.',
    icon: Zap,
    image: '/images/services/depannage-urgence.webp',
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
    title: 'Mise aux Normes',
    shortTitle: 'Normes',
    description: 'Mise en conformité NF C 15-100 de votre installation. Diagnostic, rapport et travaux de remise aux normes.',
    longDescription: 'La norme NF C 15-100 évolue régulièrement. Nous vérifions la conformité de votre installation et réalisons les travaux nécessaires pour la mettre aux normes. Indispensable pour votre sécurité, votre assurance et la vente ou location de votre bien immobilier.',
    icon: ShieldCheck,
    image: '/images/services/mise-aux-normes.webp',
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
    title: 'Domotique & Maison Connectée',
    shortTitle: 'Domotique',
    description: 'Transformez votre habitat en maison intelligente. Éclairage, chauffage, volets et sécurité connectés.',
    longDescription: 'Pilotez votre maison du bout des doigts. Nous concevons et installons des systèmes domotiques sur mesure : éclairage intelligent, chauffage connecté, volets automatisés, système de sécurité, gestion de l\'énergie. Compatible avec tous les assistants vocaux du marché.',
    icon: Smartphone,
    image: '/images/services/domotique-maison-connectee.webp',
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
    title: 'Éclairage',
    shortTitle: 'Éclairage',
    description: 'Conception et installation d\'éclairage intérieur et extérieur. Design, ambiance et performance énergétique.',
    longDescription: 'L\'éclairage transforme votre espace de vie. Nos experts conçoivent des plans d\'éclairage sur mesure alliant esthétique, fonctionnalité et efficacité énergétique. Intérieur comme extérieur, nous créons l\'ambiance parfaite pour chaque pièce et chaque usage.',
    icon: Lightbulb,
    image: '/images/services/eclairage.webp',
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
    name: 'Marie Dupont',
    location: 'Paris 11e',
    service: 'Rénovation Électrique',
    rating: 5,
    text: 'Travail impeccable ! L\'équipe a rénové toute l\'installation de notre appartement haussmannien en une semaine. Propre, rapide et professionnel. Je recommande les yeux fermés.',
    image: '/images/testimonials/temoignage-1.webp',
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    location: 'Boulogne-Billancourt',
    service: 'Installation Électrique',
    rating: 5,
    text: 'Pour la construction de notre maison, ÉlectroPro a réalisé toute l\'installation. Du premier contact à la certification Consuel, tout était parfait. Un vrai partenaire de confiance.',
    image: '/images/testimonials/temoignage-2.webp',
  },
  {
    id: 3,
    name: 'Sophie & Thomas Laurent',
    location: 'Vincennes',
    service: 'Domotique',
    rating: 5,
    text: 'Notre maison est devenue intelligente grâce à eux. Éclairage, volets, chauffage : tout se pilote depuis notre téléphone. Le confort au quotidien a complètement changé.',
    image: '/images/testimonials/temoignage-3.webp',
  },
  {
    id: 4,
    name: 'Isabelle Moreau',
    location: 'Saint-Mandé',
    service: 'Éclairage',
    rating: 5,
    text: 'La conception lumière de notre salon est magnifique. Ils ont su créer des ambiances différentes pour chaque moment de la journée. Un vrai travail d\'artiste !',
    image: '/images/testimonials/temoignage-4.webp',
  },
  {
    id: 5,
    name: 'Robert Petit',
    location: 'Montreuil',
    service: 'Dépannage Urgence',
    rating: 5,
    text: 'Panne générale un dimanche soir. J\'ai appelé et en 25 minutes le technicien était là. Problème résolu en une heure. Tarif correct et travail sérieux. Merci !',
    image: '/images/testimonials/temoignage-5.webp',
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
    question: 'Intervenez-vous pour la domotique ?',
    answer: 'Oui, nous sommes spécialisés en domotique et maison connectée. Nous installons des systèmes compatibles avec Alexa, Google Home et Apple HomeKit. Éclairage intelligent, chauffage connecté, volets automatisés, alarme : nous concevons un système adapté à votre mode de vie.',
  },
  {
    question: 'Quelle garantie offrez-vous sur vos travaux ?',
    answer: 'Tous nos travaux bénéficient de la garantie décennale (10 ans) couvrant les dommages compromettant la solidité de l\'ouvrage. De plus, nous offrons une garantie de parfait achèvement d\'1 an et une garantie biennale de 2 ans sur les équipements.',
  },
]

export const SERVICE_AREAS = [
  {
    department: 'Paris',
    cities: ['Paris 1er - 20e', 'Tous arrondissements'],
  },
  {
    department: 'Hauts-de-Seine (92)',
    cities: ['Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Levallois-Perret', 'Issy-les-Moulineaux', 'Nanterre'],
  },
  {
    department: 'Seine-Saint-Denis (93)',
    cities: ['Montreuil', 'Saint-Denis', 'Bobigny', 'Pantin', 'Aubervilliers'],
  },
  {
    department: 'Val-de-Marne (94)',
    cities: ['Créteil', 'Vincennes', 'Saint-Mandé', 'Charenton-le-Pont', 'Maisons-Alfort'],
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
    title: 'Éclairage Salon Design',
    category: 'eclairage',
    description: 'Transformation complète de l\'éclairage d\'un salon avec création d\'ambiances LED et variateurs intelligents.',
    beforeImage: '/images/realisations/projet-2-avant.webp',
    afterImage: '/images/realisations/projet-2-apres.webp',
    tags: ['Éclairage', 'Domotique'],
  },
  {
    id: 3,
    title: 'Installation Cuisine Moderne',
    category: 'installation',
    description: 'Installation électrique complète d\'une cuisine rénovée avec circuits dédiés et éclairage sous meuble.',
    beforeImage: '/images/realisations/projet-3-avant.webp',
    afterImage: '/images/realisations/projet-3-apres.webp',
    tags: ['Installation', 'Éclairage'],
  },
  {
    id: 4,
    title: 'Éclairage Extérieur Résidentiel',
    category: 'eclairage',
    description: 'Mise en lumière complète de l\'extérieur d\'une maison : allées, façade, jardin et sécurité.',
    beforeImage: '/images/realisations/projet-4-avant.webp',
    afterImage: '/images/realisations/projet-4-apres.webp',
    tags: ['Éclairage', 'Sécurité'],
  },
]

export const TEAM_MEMBERS = [
  {
    name: 'Marc Durand',
    role: 'Fondateur & Maître Électricien',
    description: '15 ans d\'expérience dans l\'électricité résidentielle et commerciale. Certifié Qualifelec et formateur.',
    image: '/images/team/equipe-fondateur.webp',
  },
  {
    name: 'Alexandre Bertrand',
    role: 'Technicien Senior',
    description: 'Spécialiste en domotique et installations complexes. 8 ans d\'expérience et passionné d\'innovation.',
    image: '/images/team/equipe-technicien-1.webp',
  },
  {
    name: 'Claire Lefebvre',
    role: 'Technicienne Spécialisée',
    description: 'Experte en mise aux normes et diagnostic électrique. Formatrice certifiée en sécurité électrique.',
    image: '/images/team/equipe-technicien-2.webp',
  },
]

export const STATS = [
  { value: 15, suffix: '+', label: 'Années d\'Expérience', icon: 'Calendar' as const },
  { value: 2500, suffix: '+', label: 'Projets Réalisés', icon: 'Briefcase' as const },
  { value: 98, suffix: '%', label: 'Clients Satisfaits', icon: 'Star' as const },
  { value: 24, suffix: '/7', label: 'Disponibilité Urgences', icon: 'Clock' as const },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Expertise Certifiée',
    description: 'Certifiés Qualifelec et RGE, nos techniciens sont formés aux dernières normes et technologies.',
    icon: Shield,
  },
  {
    title: 'Intervention Rapide',
    description: 'En cas d\'urgence, nous intervenons en moins de 30 minutes dans votre secteur, 24h/24.',
    icon: Clock,
  },
  {
    title: 'Devis Transparent',
    description: 'Devis gratuit et détaillé sans surprise. Vous savez exactement ce que vous payez.',
    icon: FileText,
  },
  {
    title: 'Garantie Décennale',
    description: 'Tous nos travaux sont couverts par une garantie décennale pour votre tranquillité.',
    icon: Award,
  },
]
