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
      'Remplacement complet d\'un tableau électrique vétuste par une installation moderne NF C 15-100 dans un bel appartement de la Promenade des Anglais.',
    challenge:
      'Le tableau des années 80 ne comportait aucun différentiel et était surchargé. Les circuits n\'étaient pas identifiés, créant un risque de sécurité pour la famille et rendant la maison invendable.',
    solution:
      'Installation d\'un tableau Legrand 4 rangées avec disjoncteurs différentiels 30mA, repérage complet des circuits, remplacement du câblage principal et mise en conformité totale. Passage Consuel réussi.',
    beforeImage: '/images/realisations/projet-1-avant.webp',
    afterImage: '/images/realisations/projet-1-apres.webp',
    tags: ['Rénovation', 'Mise aux Normes', 'NF C 15-100'],
    featured: true,
    location: 'Nice',
    duration: '2 jours',
  },
  {
    id: 2,
    title: 'Éclairage Extérieur Résidentiel',
    slug: 'eclairage-exterieur-residentiel',
    category: 'eclairage',
    description:
      'Mise en lumière complète de l\'extérieur d\'une villa côtière : terrasse, allées, jardin et spots de sécurité pour une ambiance méditerranéenne.',
    challenge:
      'La terrasse et les abords étaient très sombres la nuit, créant un manque de sécurité. Les propriétaires voulaient valoriser leur vue sur la baie des Anges en soirée.',
    solution:
      'Création de 4 circuits extérieurs étanches IP67, installation de bornes LED design le long des allées, projecteurs LED pour la façade, spots encastrés dans la terrasse et automatisation crépusculaire.',
    beforeImage: '/images/realisations/projet-2-avant.webp',
    afterImage: '/images/realisations/projet-2-apres.webp',
    tags: ['Éclairage', 'LED', 'Sécurité'],
    featured: true,
    location: 'Saint-Laurent-du-Var',
    duration: '3 jours',
  },
  {
    id: 3,
    title: 'Installation Maison Neuve',
    slug: 'installation-maison-neuve',
    category: 'installation',
    description:
      'Installation électrique complète d\'une belle maison neuve de 160m2 à Villefranche-sur-Mer avec domotique et énergie verte.',
    challenge:
      'Maison neuve bioclimatique nécessitant une installation électrique complète intégrant domotique, borne de recharge véhicule électrique 11kW et pré-câblage pour panneaux solaires sur la toiture.',
    solution:
      'Pose de 48 circuits répartis sur un tableau 6 rangées, câblage structuré Cat6 dans chaque pièce, pré-câblage domotique pour gestion thermique, installation d\'une borne de recharge et passage Consuel validé.',
    beforeImage: '/images/realisations/projet-3-avant.webp',
    afterImage: '/images/realisations/projet-3-apres.webp',
    tags: ['Installation', 'Neuf', 'Consuel'],
    featured: true,
    location: 'Villefranche-sur-Mer',
    duration: '2 semaines',
  },
  {
    id: 4,
    title: 'Domotique Villa Contemporaine',
    slug: 'domotique-villa-contemporaine',
    category: 'domotique',
    description:
      'Intégration domotique complète d\'une villa avec vue sur la mer : éclairage, volets, clim réversible, sécurité et contrôle pilotés depuis une app mobile.',
    challenge:
      'Les propriétaires voulaient automatiser leur belle villa côtière pour gérer la clim, les volets et l\'éclairage à distance, tout en conservant les interrupteurs physiques.',
    solution:
      'Déploiement d\'un système domotique moderne avec serveur cloud, 28 circuits d\'éclairage LED variés, 10 volets motorisés de terrasse, thermostat connecté avec capteurs de température, vidéosurveillance IP et contrôle par téléphone.',
    beforeImage: '/images/realisations/projet-4-avant.webp',
    afterImage: '/images/realisations/projet-4-apres.webp',
    tags: ['Domotique', 'Maison Connectée', 'Clim Réversible'],
    featured: false,
    location: 'Beaulieu-sur-Mer',
    duration: '10 jours',
  },
  {
    id: 5,
    title: 'Mise aux Normes Immeuble',
    slug: 'mise-aux-normes-immeuble',
    category: 'normes',
    description:
      'Mise en conformité électrique des parties communes d\'une résidence de 16 logements avec vue mer en vue de la vente par le syndic.',
    challenge:
      'L\'immeuble datant de 1975 présentait des défauts graves : absence de mise à la terre dans les communs, éclairage de secours inexistant, tableau général hors d\'âge et câblage très endommagé.',
    solution:
      'Refonte complète du tableau des parties communes avec 8 circuits distincts, création d\'une terre générale en règle, installation de blocs autonomes d\'éclairage de sécurité (BAES), remplacement du câblage des escaliers et caves, délivrance attestation de conformité.',
    beforeImage: '/images/realisations/projet-5-avant.webp',
    afterImage: '/images/realisations/projet-5-apres.webp',
    tags: ['Mise aux Normes', 'Copropriété', 'Sécurité'],
    featured: false,
    location: 'Eze',
    duration: '1 semaine',
  },
  {
    id: 6,
    title: 'Dépannage Urgent Restaurant',
    slug: 'depannage-urgent-commerce',
    category: 'urgence',
    description:
      'Intervention d\'urgence nocturne pour un restaurant côtier suite à un court-circuit ayant provoqué une coupure générale en pleine service.',
    challenge:
      'Court-circuit survenu à 20h30 dans la cuisine du restaurant de Villefranche, mettant la soirée en péril. Le disjoncteur général refusait de réarmer et une odeur de brûlé était présente.',
    solution:
      'Intervention en 18 minutes, localisation du défaut sur un circuit de cuisson, isolation du câble endommagé, remplacement du disjoncteur et remise sous tension partielle immédiate pour sauver la soirée. Retour le lendemain pour réparation définitive.',
    beforeImage: '/images/realisations/projet-6-avant.webp',
    afterImage: '/images/realisations/projet-6-apres.webp',
    tags: ['Urgence', 'Commerce', 'Dépannage'],
    featured: false,
    location: 'Villefranche-sur-Mer',
    duration: '2 heures',
  },
]
