import { COMPANY } from '@/lib/constants'
import { clientConfig } from '@/config/client.config'

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string; author?: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  content: ContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'renovation-electrique-quand-et-pourquoi',
    title: 'Rénovation électrique : quand et pourquoi refaire son installation',
    excerpt:
      'Votre installation a plus de 15 ans ? Découvrez les signes qui ne trompent pas et les raisons de rénover votre réseau électrique.',
    date: '2025-11-15',
    readTime: '6 min',
    category: 'renovation',
    image: '/images/services/renovation-electrique.webp',
    content: [
      {
        type: 'paragraph',
        text: 'En France, plus de 7 millions de logements présentent une installation électrique dangereuse. Chaque année, l\'électricité est responsable de 50 000 incendies domestiques. Si votre installation date d\'avant 2010, il est temps de se poser la question de sa rénovation.',
      },
      {
        type: 'heading',
        text: 'Les signes qui doivent vous alerter',
      },
      {
        type: 'list',
        items: [
          'Disjoncteur qui saute régulièrement sans raison apparente',
          'Prises qui chauffent ou noircissent',
          'Lumières qui clignotent ou varient d\'intensité',
          'Tableau électrique à fusibles (ancien modèle)',
          'Absence de prise de terre dans certaines pièces',
          'Odeur de brûlé près des prises ou interrupteurs',
        ],
      },
      {
        type: 'heading',
        text: 'Pourquoi rénover son installation électrique ?',
      },
      {
        type: 'paragraph',
        text: 'La sécurité est la raison principale. Une installation vétuste augmente considérablement les risques d\'électrocution et d\'incendie. Mais la rénovation apporte aussi un confort accru : plus de prises, des circuits dédiés pour les gros appareils, et une meilleure gestion de l\'énergie. Sans oublier la valorisation de votre bien immobilier.',
      },
      {
        type: 'heading',
        text: 'Le déroulement d\'une rénovation type',
      },
      {
        type: 'paragraph',
        text: 'Tout commence par un diagnostic complet de l\'existant. L\'électricien identifie les points de non-conformité et propose un plan de rénovation adapté. Selon l\'état de votre installation, la rénovation peut être partielle (remplacement du tableau et mise en sécurité) ou totale (remplacement complet du câblage). Dans un appartement, comptez 3 à 5 jours. Pour une maison, 1 à 2 semaines.',
      },
      {
        type: 'quote',
        text: 'Une installation électrique aux normes, c\'est la tranquillité pour les 30 prochaines années. C\'est un investissement, pas une dépense.',
        author: `${clientConfig.FONDATEUR}, ${COMPANY.name}`,
      },
    ],
  },
  {
    slug: 'norme-nf-c-15-100-comprendre-en-5-minutes',
    title: 'Norme NF C 15-100 : tout comprendre en 5 minutes',
    excerpt:
      'La norme NF C 15-100 régit toutes les installations électriques résidentielles. Voici ce que vous devez savoir en tant que propriétaire.',
    date: '2025-10-28',
    readTime: '5 min',
    category: 'normes',
    image: '/images/services/mise-aux-normes.webp',
    content: [
      {
        type: 'paragraph',
        text: 'La norme NF C 15-100 est le texte de référence pour toutes les installations électriques basse tension en France. Mise à jour régulièrement, sa dernière version impose des règles strictes pour garantir la sécurité des occupants. Que vous construisiez, rénoviez ou vendiez un bien, cette norme vous concerne directement.',
      },
      {
        type: 'heading',
        text: 'Les grandes règles de la NF C 15-100',
      },
      {
        type: 'list',
        items: [
          'Un tableau électrique avec disjoncteurs différentiels 30 mA sur tous les circuits',
          'Un minimum de prises par pièce (3 dans une chambre, 6 dans un séjour de 28m²)',
          'Des circuits spécialisés pour le four, le lave-linge, le lave-vaisselle et les plaques de cuisson',
          'Une prise de terre reliée à tous les équipements métalliques',
          'Un espace technique électrique du logement (ETEL) accessible',
          'Des volumes de sécurité dans la salle de bain clairement respectés',
        ],
      },
      {
        type: 'heading',
        text: 'Quand la conformité est-elle obligatoire ?',
      },
      {
        type: 'paragraph',
        text: 'Pour toute construction neuve, la conformité NF C 15-100 est vérifiée par le Consuel avant la mise sous tension. En cas de vente, un diagnostic électrique est obligatoire si l\'installation a plus de 15 ans. En location, le propriétaire doit fournir un logement décent avec une installation électrique sûre.',
      },
      {
        type: 'heading',
        text: 'Comment vérifier la conformité de votre installation ?',
      },
      {
        type: 'paragraph',
        text: 'Seul un professionnel certifié peut réaliser un diagnostic complet. Il vérifie point par point les circuits, les protections, la terre, et l\'état du câblage. En cas de non-conformité, il établit un rapport avec les travaux à réaliser. Chez ÉlectroPro, nous proposons ce diagnostic gratuitement dans le cadre d\'un devis de mise aux normes.',
      },
      {
        type: 'quote',
        text: 'La norme évolue pour protéger les habitants. Investir dans la conformité, c\'est investir dans la sécurité de votre famille.',
      },
    ],
  },
  {
    slug: 'domotique-guide-complet-debutants',
    title: 'Domotique : le guide complet pour débutants',
    excerpt:
      'Éclairage, chauffage, volets, sécurité... Découvrez comment la domotique transforme votre quotidien et par où commencer.',
    date: '2025-10-10',
    readTime: '8 min',
    category: 'domotique',
    image: '/images/services/domotique-maison-connectee.webp',
    content: [
      {
        type: 'paragraph',
        text: 'La domotique n\'est plus un luxe réservé aux villas de milliardaires. Aujourd\'hui, connecter sa maison est accessible à tous les budgets. Du simple éclairage intelligent au système complet pilotant chauffage, volets et sécurité, les possibilités sont vastes. Voici comment s\'y retrouver.',
      },
      {
        type: 'heading',
        text: 'Les piliers de la maison connectée',
      },
      {
        type: 'list',
        items: [
          'Éclairage intelligent : ambiances programmables, variation d\'intensité, détection de présence',
          'Chauffage connecté : thermostat intelligent, gestion par zone, programmation horaire',
          'Volets et stores : motorisation, scénarios automatiques, simulation de présence',
          'Sécurité : alarme connectée, vidéosurveillance, détection d\'intrusion',
          'Énergie : suivi de consommation en temps réel, optimisation automatique',
          'Multimédia : son multi-pièces, commande vocale, intégration TV',
        ],
      },
      {
        type: 'heading',
        text: 'Quel protocole choisir ?',
      },
      {
        type: 'paragraph',
        text: 'Le choix du protocole est crucial. Le Wi-Fi convient pour quelques appareils mais sature vite. Le Zigbee et le Z-Wave sont fiables et économes en énergie, parfaits pour les capteurs. Le KNX est la référence professionnelle, ultra fiable et pérenne, idéal pour les installations complètes. Enfin, le Matter promet de devenir le standard universel en unifiant tous les écosystèmes.',
      },
      {
        type: 'heading',
        text: 'Par où commencer ?',
      },
      {
        type: 'paragraph',
        text: 'Commencez par l\'éclairage : c\'est le plus simple et le plus spectaculaire. Quelques ampoules connectées et un interrupteur intelligent suffisent pour découvrir le confort de la domotique. Ensuite, ajoutez un thermostat connecté pour le chauffage. Puis motorisez vos volets. L\'avantage des systèmes modernes, c\'est qu\'ils sont modulaires : vous pouvez ajouter des équipements au fil du temps.',
      },
      {
        type: 'quote',
        text: 'Une maison bien domotisée consomme 15 à 25% d\'énergie en moins. Le confort en plus, les factures en moins.',
        author: `${clientConfig.FONDATEUR}, ${COMPANY.name}`,
      },
      {
        type: 'heading',
        text: 'L\'importance d\'une installation professionnelle',
      },
      {
        type: 'paragraph',
        text: 'Si les solutions grand public se branchent facilement, une installation domotique complète nécessite un câblage adapté et une programmation sur mesure. Un électricien spécialisé garantit une installation fiable, évolutive et parfaitement intégrée à votre réseau électrique existant. C\'est la différence entre des gadgets qui tombent en panne et un système qui fonctionne pendant 20 ans.',
      },
    ],
  },
  {
    slug: 'depannage-electrique-bons-reflexes-panne',
    title: 'Dépannage électrique : les bons réflexes en cas de panne',
    excerpt:
      'Coupure de courant, disjoncteur qui saute, prise qui ne fonctionne plus ? Voici les gestes à adopter avant d\'appeler un électricien.',
    date: '2025-09-22',
    readTime: '5 min',
    category: 'urgence',
    image: '/images/services/depannage-urgence.webp',
    content: [
      {
        type: 'paragraph',
        text: 'Une panne électrique peut survenir à tout moment. Avant de paniquer, quelques vérifications simples permettent parfois de résoudre le problème soi-même. Et quand la panne est sérieuse, les bons réflexes peuvent éviter un accident. Voici un guide pratique pour chaque situation.',
      },
      {
        type: 'heading',
        text: 'Le disjoncteur général a sauté',
      },
      {
        type: 'paragraph',
        text: 'Commencez par débrancher les derniers appareils que vous avez branchés avant la coupure. Tentez de réarmer le disjoncteur. S\'il saute immédiatement, c\'est probablement un court-circuit : ne tentez pas de réarmer à nouveau et appelez un professionnel. S\'il tient, rebranchez vos appareils un par un pour identifier le fautif.',
      },
      {
        type: 'heading',
        text: 'Les gestes de sécurité essentiels',
      },
      {
        type: 'list',
        items: [
          'Ne touchez jamais un appareil électrique avec les mains mouillées',
          'N\'essayez pas de réparer vous-même un câble dénudé ou une prise noircie',
          'En cas d\'odeur de brûlé, coupez le disjoncteur général immédiatement',
          'Si une personne est en contact avec un fil sous tension, ne la touchez pas directement — coupez d\'abord le courant',
          'Gardez une lampe torche accessible en cas de coupure nocturne',
          'Notez le numéro de votre électricien d\'urgence dans votre téléphone',
        ],
      },
      {
        type: 'heading',
        text: 'Quand appeler un professionnel ?',
      },
      {
        type: 'paragraph',
        text: 'Certaines pannes nécessitent impérativement un professionnel : disjoncteur qui saute à répétition, prise ou interrupteur qui chauffe, étincelles, odeur de brûlé, coupure partielle affectant une seule zone du logement. Dans ces cas, n\'attendez pas — une intervention rapide peut éviter un incendie ou un dégât majeur.',
      },
      {
        type: 'quote',
        text: 'En cas de doute, le bon réflexe est toujours de couper le disjoncteur général et d\'appeler un professionnel. La sécurité passe avant tout.',
      },
    ],
  },
  {
    slug: 'eclairage-led-economies-energie-design',
    title: 'Éclairage LED : économies d\'énergie et design',
    excerpt:
      'Les LED ont révolutionné l\'éclairage. Découvrez comment transformer vos espaces tout en réduisant votre facture jusqu\'à 80%.',
    date: '2025-09-05',
    readTime: '6 min',
    category: 'eclairage',
    image: '/images/services/eclairage.webp',
    content: [
      {
        type: 'paragraph',
        text: 'Depuis l\'interdiction des ampoules à incandescence, la LED s\'est imposée comme la technologie d\'éclairage de référence. Et pour cause : elle consomme jusqu\'à 80% d\'énergie en moins, dure 25 fois plus longtemps et offre une palette de possibilités créatives inégalée. Tour d\'horizon d\'une révolution lumineuse.',
      },
      {
        type: 'heading',
        text: 'Les avantages concrets de la LED',
      },
      {
        type: 'list',
        items: [
          'Consommation réduite de 80% par rapport à l\'incandescence',
          'Durée de vie de 25 000 à 50 000 heures (20 ans en usage normal)',
          'Allumage instantané, pas de temps de chauffe',
          'Choix de températures de couleur : blanc chaud, neutre ou froid',
          'Compatible avec les variateurs pour ajuster l\'ambiance',
          'Aucune émission UV ni chaleur excessive',
        ],
      },
      {
        type: 'heading',
        text: 'Penser l\'éclairage comme un architecte d\'intérieur',
      },
      {
        type: 'paragraph',
        text: 'Un bon éclairage repose sur trois couches : l\'éclairage général (plafonnier ou spots), l\'éclairage fonctionnel (plan de travail, bureau, lecture) et l\'éclairage d\'ambiance (bandeaux LED, lampes décoratives). En combinant ces trois niveaux, vous créez des espaces vivants qui s\'adaptent à chaque moment de la journée.',
      },
      {
        type: 'heading',
        text: 'Les températures de couleur expliquées',
      },
      {
        type: 'paragraph',
        text: 'La température de couleur se mesure en Kelvin. En dessous de 3000K, la lumière est chaude et cosy, idéale pour le salon et les chambres. Entre 3500K et 4500K, elle est neutre et stimulante, parfaite pour la cuisine et la salle de bain. Au-dessus de 5000K, elle est froide et énergisante, adaptée aux espaces de travail et aux garages.',
      },
      {
        type: 'quote',
        text: 'L\'éclairage représente 10 à 15% de la facture d\'électricité d\'un ménage. Passer en full LED, c\'est diviser ce poste par quatre.',
        author: `${clientConfig.FONDATEUR}, ${COMPANY.name}`,
      },
      {
        type: 'heading',
        text: 'Faire appel à un professionnel pour l\'éclairage',
      },
      {
        type: 'paragraph',
        text: 'Si remplacer une ampoule est à la portée de tous, concevoir un plan d\'éclairage complet est un métier. Le choix des luminaires, le positionnement des points lumineux, le câblage des variateurs et la programmation des scènes d\'ambiance demandent un savoir-faire spécifique. Un éclairagiste professionnel transforme votre intérieur et maximise le confort visuel de chaque pièce.',
      },
    ],
  },
  {
    slug: 'panneaux-solaires-ce-quil-faut-savoir',
    title: 'Panneaux solaires : ce qu\'il faut savoir avant d\'installer',
    excerpt:
      'Autoconsommation, revente, aides financières... Tout ce que vous devez savoir avant d\'investir dans le solaire photovoltaïque.',
    date: '2025-08-18',
    readTime: '7 min',
    category: 'energie',
    image: '/images/services/installation-electrique.webp',
    content: [
      {
        type: 'paragraph',
        text: 'Le solaire photovoltaïque est en plein essor en France. Avec la hausse du prix de l\'électricité et les aides gouvernementales, de plus en plus de particuliers franchissent le pas. Mais avant d\'installer des panneaux sur votre toit, il y a quelques points essentiels à connaître pour faire le bon choix.',
      },
      {
        type: 'heading',
        text: 'Autoconsommation ou revente totale ?',
      },
      {
        type: 'paragraph',
        text: 'Deux modèles existent. L\'autoconsommation vous permet de consommer directement l\'électricité produite, réduisant votre facture de 30 à 70%. Le surplus peut être vendu à EDF OA. La revente totale envoie toute la production sur le réseau avec un tarif garanti sur 20 ans. En 2025, l\'autoconsommation avec vente du surplus est le choix le plus populaire et le plus rentable pour la majorité des foyers.',
      },
      {
        type: 'heading',
        text: 'Les critères pour une installation réussie',
      },
      {
        type: 'list',
        items: [
          'Orientation du toit : sud, sud-est ou sud-ouest idéalement',
          'Inclinaison : entre 25° et 35° pour un rendement optimal',
          'Absence d\'ombrage : arbres, cheminées, bâtiments voisins',
          'Surface disponible : environ 17m² pour une installation 3 kWc',
          'État de la toiture : la couverture doit être en bon état',
          'Raccordement électrique : le tableau doit pouvoir accueillir la production',
        ],
      },
      {
        type: 'heading',
        text: 'Les aides financières en 2025',
      },
      {
        type: 'paragraph',
        text: 'Plusieurs aides existent pour réduire le coût d\'installation. La prime à l\'autoconsommation est versée sur 5 ans et peut atteindre 1 500\u20AC pour une installation de 3 kWc. Le taux de TVA réduit à 10% s\'applique aux installations de moins de 3 kWc. Certaines collectivités proposent des aides complémentaires. Enfin, l\'obligation d\'achat garantit un prix de rachat du surplus pendant 20 ans.',
      },
      {
        type: 'heading',
        text: 'Le rôle de l\'électricien dans l\'installation solaire',
      },
      {
        type: 'paragraph',
        text: 'L\'installation de panneaux solaires nécessite un électricien qualifié RGE (Reconnu Garant de l\'Environnement). Cette qualification est obligatoire pour bénéficier des aides. L\'électricien dimensionne l\'installation, réalise le raccordement au tableau existant, installe le compteur de production et effectue la mise en service. Il assure aussi la liaison avec Enedis pour le raccordement au réseau.',
      },
      {
        type: 'quote',
        text: 'Le solaire est un investissement rentable sur 8 à 12 ans en moyenne. Après, c\'est de l\'électricité gratuite pendant 15 à 20 ans.',
        author: `${clientConfig.FONDATEUR}, ${COMPANY.name}`,
      },
    ],
  },
]
