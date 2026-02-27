export interface Project {
  id: number
  title: string
  slug: string
  category: string
  description: string
  challenge: string
  solution: string
  beforeImage: string
  afterImage: string
  tags: string[]
  featured: boolean
  location: string
  duration: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rénovation Tableau Électrique',
    slug: 'renovation-tableau-electrique',
    category: 'renovation',
    description:
      'Remplacement complet d\'un tableau électrique vétuste des années 70 par une installation moderne NF C 15-100 dans un appartement haussmannien.',
    challenge:
      'L\'ancien tableau à fusibles ne comportait aucun différentiel et les circuits n\'étaient pas identifiés. Des fils en coton côtoyaient du câblage plus récent, créant un risque d\'incendie.',
    solution:
      'Installation d\'un tableau Legrand 4 rangées avec disjoncteurs différentiels, repérage complet des circuits, remplacement des départs vétustes et mise en conformité du câblage principal.',
    beforeImage: '/images/realisations/projet-1-avant.webp',
    afterImage: '/images/realisations/projet-1-apres.webp',
    tags: ['Rénovation', 'Mise aux Normes', 'NF C 15-100'],
    featured: true,
    location: 'Paris 11e',
    duration: '2 jours',
  },
  {
    id: 2,
    title: 'Éclairage Extérieur Résidentiel',
    slug: 'eclairage-exterieur-residentiel',
    category: 'eclairage',
    description:
      'Mise en lumière complète de l\'extérieur d\'une maison : allées, façade, jardin et éclairage de sécurité avec détecteurs de présence.',
    challenge:
      'Le jardin et les abords de la maison étaient plongés dans le noir la nuit, posant des problèmes de sécurité et privant les propriétaires de leur espace extérieur en soirée.',
    solution:
      'Création de 5 circuits extérieurs étanches IP65, installation de bornes LED le long des allées, projecteurs pour la façade, spots encastrés dans la terrasse et détecteurs crépusculaires automatiques.',
    beforeImage: '/images/realisations/projet-2-avant.webp',
    afterImage: '/images/realisations/projet-2-apres.webp',
    tags: ['Éclairage', 'LED', 'Sécurité'],
    featured: true,
    location: 'Vincennes',
    duration: '3 jours',
  },
  {
    id: 3,
    title: 'Installation Maison Neuve',
    slug: 'installation-maison-neuve',
    category: 'installation',
    description:
      'Installation électrique complète d\'une maison neuve de 150m2 sur deux niveaux, du tableau général aux finitions.',
    challenge:
      'Construction neuve nécessitant une installation électrique complète intégrant domotique, bornes de recharge véhicule électrique et pré-câblage pour panneaux solaires futurs.',
    solution:
      'Pose de 45 circuits répartis sur un tableau 6 rangées, câblage structuré Cat6 dans chaque pièce, pré-câblage domotique KNX, installation d\'une borne de recharge 7kW et passage Consuel sans réserve.',
    beforeImage: '/images/realisations/projet-3-avant.webp',
    afterImage: '/images/realisations/projet-3-apres.webp',
    tags: ['Installation', 'Neuf', 'Consuel'],
    featured: true,
    location: 'Boulogne-Billancourt',
    duration: '2 semaines',
  },
  {
    id: 4,
    title: 'Domotique Villa Contemporaine',
    slug: 'domotique-villa-contemporaine',
    category: 'domotique',
    description:
      'Intégration domotique complète d\'une villa contemporaine : éclairage, volets, chauffage, sécurité et multimédia pilotés depuis une seule application.',
    challenge:
      'Les propriétaires souhaitaient centraliser le contrôle de tous les équipements de leur villa de 200m2 tout en conservant la possibilité d\'utiliser les interrupteurs traditionnels.',
    solution:
      'Déploiement d\'un système KNX avec serveur Loxone, 32 circuits d\'éclairage variés, 12 volets motorisés, thermostat connecté par zone, vidéosurveillance IP et intégration Apple HomeKit.',
    beforeImage: '/images/realisations/projet-4-avant.webp',
    afterImage: '/images/realisations/projet-4-apres.webp',
    tags: ['Domotique', 'KNX', 'Maison Connectée'],
    featured: false,
    location: 'Neuilly-sur-Seine',
    duration: '10 jours',
  },
  {
    id: 5,
    title: 'Mise aux Normes Immeuble',
    slug: 'mise-aux-normes-immeuble',
    category: 'normes',
    description:
      'Mise en conformité électrique des parties communes d\'un immeuble de 12 logements en vue de sa vente par le syndic.',
    challenge:
      'L\'immeuble datant de 1965 présentait un diagnostic électrique alarmant : absence de mise à la terre dans les communs, éclairage de secours inexistant et tableau général hors d\'âge.',
    solution:
      'Refonte complète du tableau des parties communes, création d\'une terre générale, installation de blocs autonomes d\'éclairage de sécurité (BAES), remplacement du câblage des couloirs et caves, et délivrance d\'une attestation de conformité.',
    beforeImage: '/images/realisations/projet-5-avant.webp',
    afterImage: '/images/realisations/projet-5-apres.webp',
    tags: ['Mise aux Normes', 'Copropriété', 'Sécurité'],
    featured: false,
    location: 'Paris 15e',
    duration: '1 semaine',
  },
  {
    id: 6,
    title: 'Dépannage Urgent Commerce',
    slug: 'depannage-urgent-commerce',
    category: 'urgence',
    description:
      'Intervention d\'urgence nocturne pour une boulangerie suite à un court-circuit ayant provoqué une coupure générale.',
    challenge:
      'Court-circuit survenu à 4h du matin dans le laboratoire de la boulangerie, mettant en péril la production du jour. Le disjoncteur général refusait de réarmer et une odeur de brûlé était présente.',
    solution:
      'Intervention en 25 minutes, localisation du défaut sur un circuit four, isolation du câble endommagé, remplacement du disjoncteur divisionnaire et remise sous tension partielle immédiate. Retour le lendemain pour réparation définitive du circuit.',
    beforeImage: '/images/realisations/projet-6-avant.webp',
    afterImage: '/images/realisations/projet-6-apres.webp',
    tags: ['Urgence', 'Commerce', 'Dépannage'],
    featured: false,
    location: 'Montreuil',
    duration: '2 heures',
  },
]
