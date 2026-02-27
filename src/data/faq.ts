export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Combien coûte une installation électrique complète ?',
    answer:
      'Le coût dépend de la surface et de la complexité du projet. Pour un appartement de 60m², comptez entre 8 000\u20AC et 12 000\u20AC. Pour une maison de 120m², entre 15 000\u20AC et 25 000\u20AC. Nous établissons un devis détaillé gratuit après visite technique.',
  },
  {
    question: 'Êtes-vous disponible pour les urgences le week-end ?',
    answer:
      'Oui, notre service d\'urgence fonctionne 24h/24 et 7j/7, y compris les week-ends et jours fériés. Un technicien d\'astreinte est toujours disponible et intervient en moins de 30 minutes dans notre zone de couverture.',
  },
  {
    question: 'Quelles certifications possédez-vous ?',
    answer:
      'Nous sommes certifiés Qualifelec (qualification des entreprises d\'électricité), RGE (Reconnu Garant de l\'Environnement) et nous respectons la norme NF C 15-100. Nos techniciens suivent des formations continues pour rester à jour.',
  },
  {
    question: 'Combien de temps dure une rénovation électrique ?',
    answer:
      'Pour un appartement, comptez 3 à 5 jours ouvrés. Pour une maison complète, 1 à 2 semaines selon l\'ampleur des travaux. Nous planifions chaque intervention pour minimiser la gêne et vous informons du planning précis avant le début des travaux.',
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer:
      'Absolument ! Tous nos devis sont gratuits et sans engagement. Nous réalisons une visite technique sur site pour évaluer précisément vos besoins et vous remettons un devis détaillé sous 48h.',
  },
  {
    question: 'Qu\'est-ce que la mise aux normes NF C 15-100 ?',
    answer:
      'La norme NF C 15-100 définit les règles de sécurité des installations électriques résidentielles en France. Elle couvre la protection des personnes contre les chocs électriques, la protection contre les incendies et le dimensionnement des circuits. Une installation conforme est obligatoire pour toute vente ou location.',
  },
  {
    question: 'Quelle garantie offrez-vous sur vos travaux ?',
    answer:
      'Tous nos travaux bénéficient de la garantie décennale (10 ans) couvrant les dommages compromettant la solidité de l\'ouvrage. De plus, nous offrons une garantie de parfait achèvement d\'1 an et une garantie biennale de 2 ans sur les équipements.',
  },
]
