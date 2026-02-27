import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Phone, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'quote'
  text?: string
  items?: string[]
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image?: string
  content?: ContentBlock[]
}

// Fallback blog posts data
const fallbackPosts: BlogPost[] = [
  {
    slug: 'guide-renovation-electrique-appartement',
    title: 'Guide complet : rénover l\'installation électrique de votre appartement',
    excerpt: 'Tout ce que vous devez savoir avant de rénover votre installation électrique. Normes, budget, étapes clés et conseils de professionnels.',
    category: 'Rénovation',
    date: '15 Février 2026',
    readTime: '8 min de lecture',
    content: [
      { type: 'paragraph', text: 'La rénovation électrique d\'un appartement est un projet important qui nécessite une planification minutieuse. Que votre installation ait plus de 15 ans ou que vous souhaitiez simplement la moderniser, ce guide vous accompagne à chaque étape.' },
      { type: 'heading', text: 'Quand faut-il rénover son installation électrique ?' },
      { type: 'paragraph', text: 'Plusieurs signes doivent vous alerter sur la nécessité de rénover votre installation électrique. Ne les ignorez pas, car ils peuvent représenter un risque pour votre sécurité.' },
      { type: 'list', items: ['Disjoncteurs qui sautent fréquemment', 'Prises qui chauffent ou noircissent', 'Installation de plus de 15 ans sans mise à jour', 'Absence de prise de terre sur les prises', 'Tableau électrique avec fusibles en porcelaine'] },
      { type: 'heading', text: 'Les étapes d\'une rénovation électrique' },
      { type: 'paragraph', text: 'Une rénovation électrique se déroule en plusieurs phases bien définies. Chacune est essentielle pour garantir la conformité et la sécurité de votre nouvelle installation.' },
      { type: 'list', items: ['Diagnostic de l\'installation existante', 'Établissement du plan électrique', 'Dépose de l\'ancienne installation si nécessaire', 'Passage des nouveaux câbles', 'Installation du nouveau tableau électrique', 'Pose des appareillages (prises, interrupteurs)', 'Tests de conformité et certification'] },
      { type: 'heading', text: 'Quel budget prévoir ?' },
      { type: 'paragraph', text: 'Le coût d\'une rénovation électrique varie selon l\'ampleur des travaux et la surface de votre appartement. Pour un appartement de 60m², comptez entre 8 000 et 12 000 euros pour une rénovation complète. Ce budget inclut le tableau, le câblage, les appareillages et la main-d\'oeuvre.' },
      { type: 'quote', text: 'Un investissement dans la rénovation électrique, c\'est un investissement dans la sécurité de votre famille et la valeur de votre bien immobilier.' },
      { type: 'heading', text: 'Faire appel à un professionnel certifié' },
      { type: 'paragraph', text: 'La rénovation électrique n\'est pas un travail à confier au premier venu. Assurez-vous de faire appel à un électricien certifié Qualifelec qui respecte la norme NF C 15-100. Un professionnel qualifié vous garantit une installation sûre, conforme et durable.' },
    ],
  },
  {
    slug: 'norme-nf-c-15-100-essentiel',
    title: 'Norme NF C 15-100 : ce que tout propriétaire doit savoir',
    excerpt: 'La norme NF C 15-100 régit toutes les installations électriques résidentielles. Découvrez ses exigences et comment vous mettre en conformité.',
    category: 'Normes',
    date: '10 Février 2026',
    readTime: '6 min de lecture',
    content: [
      { type: 'paragraph', text: 'La norme NF C 15-100 est la référence en matière d\'installations électriques résidentielles en France. Elle définit les règles à respecter pour garantir la sécurité des personnes et des biens.' },
      { type: 'heading', text: 'Qu\'est-ce que la norme NF C 15-100 ?' },
      { type: 'paragraph', text: 'Cette norme française fixe les règles de conception, de réalisation et d\'entretien des installations électriques basse tension. Elle s\'applique à tous les logements neufs et aux rénovations importantes.' },
      { type: 'list', items: ['Protection des personnes contre les chocs électriques', 'Protection contre les surintensités', 'Nombre minimal de prises par pièce', 'Circuits spécialisés obligatoires', 'Règles spécifiques pour les salles de bain'] },
      { type: 'heading', text: 'Les principales exigences' },
      { type: 'paragraph', text: 'La norme impose un nombre minimal d\'équipements par pièce. Par exemple, une cuisine doit disposer d\'au moins 6 prises de courant, dont 4 au-dessus du plan de travail. Chaque pièce de vie doit avoir au moins 5 prises.' },
      { type: 'quote', text: 'La conformité à la norme NF C 15-100 est obligatoire pour toute installation neuve et fortement recommandée pour les installations existantes, notamment en cas de vente ou de location.' },
      { type: 'heading', text: 'Comment se mettre en conformité ?' },
      { type: 'paragraph', text: 'La première étape est de faire réaliser un diagnostic électrique par un professionnel certifié. Ce diagnostic identifiera les points de non-conformité et les travaux nécessaires. Un électricien qualifié pourra ensuite réaliser la mise aux normes de votre installation.' },
    ],
  },
  {
    slug: 'domotique-maison-connectee-2026',
    title: 'Domotique en 2026 : transformer votre maison en habitat connecté',
    excerpt: 'Les solutions domotiques ont évolué. Découvrez comment rendre votre maison intelligente, économe et sécurisée grâce à la technologie.',
    category: 'Domotique',
    date: '5 Février 2026',
    readTime: '7 min de lecture',
    content: [
      { type: 'paragraph', text: 'La domotique n\'est plus réservée aux maisons de luxe. En 2026, les solutions connectées sont accessibles et permettent de transformer n\'importe quel logement en habitat intelligent. Découvrez les possibilités qui s\'offrent à vous.' },
      { type: 'heading', text: 'Les piliers de la maison connectée' },
      { type: 'list', items: ['Éclairage intelligent et programmable', 'Chauffage connecté et économique', 'Volets roulants automatisés', 'Système de sécurité intégré', 'Gestion centralisée de l\'énergie'] },
      { type: 'heading', text: 'Les avantages concrets' },
      { type: 'paragraph', text: 'Au-delà du confort, la domotique offre des avantages tangibles. Les économies d\'énergie peuvent atteindre 30% grâce à la gestion intelligente du chauffage et de l\'éclairage. La sécurité est renforcée avec des alertes en temps réel et une surveillance à distance.' },
      { type: 'quote', text: 'Une maison connectée, c\'est une maison qui s\'adapte à votre rythme de vie tout en réduisant votre empreinte énergétique.' },
      { type: 'heading', text: 'Par où commencer ?' },
      { type: 'paragraph', text: 'Commencez par identifier vos priorités : confort, économies d\'énergie ou sécurité. Un électricien spécialisé en domotique pourra vous conseiller sur les solutions les plus adaptées à votre logement et à votre budget.' },
    ],
  },
  {
    slug: 'economies-energie-eclairage-led',
    title: 'Économies d\'énergie : passez à l\'éclairage LED',
    excerpt: 'L\'éclairage représente 10 à 15% de votre facture d\'électricité. Découvrez comment les LED peuvent réduire votre consommation de 80%.',
    category: 'Éclairage',
    date: '28 Janvier 2026',
    readTime: '5 min de lecture',
    content: [
      { type: 'paragraph', text: 'L\'éclairage est un poste de dépense souvent sous-estimé. Pourtant, il représente 10 à 15% de la facture d\'électricité d\'un ménage français. Le passage à l\'éclairage LED est l\'un des gestes les plus simples et les plus rentables pour réduire sa consommation.' },
      { type: 'heading', text: 'Pourquoi choisir les LED ?' },
      { type: 'list', items: ['Consommation réduite de 80% par rapport aux ampoules classiques', 'Durée de vie de 25 000 à 50 000 heures', 'Pas de temps de chauffe, éclairage instantané', 'Large choix de températures de couleur', 'Absence de mercure, recyclables'] },
      { type: 'heading', text: 'Quel retour sur investissement ?' },
      { type: 'paragraph', text: 'Bien que les LED soient plus chères à l\'achat, elles sont rentabilisées en moins de 2 ans grâce aux économies d\'énergie. Pour un logement de 4 pièces, le passage complet aux LED peut faire économiser entre 100 et 200 euros par an sur la facture d\'électricité.' },
      { type: 'quote', text: 'Le meilleur moment pour passer aux LED, c\'était hier. Le deuxième meilleur moment, c\'est maintenant.' },
    ],
  },
  {
    slug: 'securite-electrique-enfants',
    title: 'Sécurité électrique : protéger vos enfants à la maison',
    excerpt: 'Les accidents électriques domestiques sont évitables. Voici les mesures essentielles pour protéger vos enfants au quotidien.',
    category: 'Sécurité',
    date: '20 Janvier 2026',
    readTime: '5 min de lecture',
    content: [
      { type: 'paragraph', text: 'Chaque année, les accidents électriques domestiques touchent des milliers de familles en France. Les enfants sont particulièrement vulnérables. Heureusement, des mesures simples permettent de prévenir la grande majorité de ces accidents.' },
      { type: 'heading', text: 'Les risques principaux' },
      { type: 'list', items: ['Doigts ou objets insérés dans les prises', 'Contact avec des fils dénudés', 'Appareils électriques à proximité de l\'eau', 'Rallonges et multiprises surchargées', 'Installations vétustes sans protection'] },
      { type: 'heading', text: 'Les mesures de protection essentielles' },
      { type: 'paragraph', text: 'La première mesure est l\'installation de prises à éclipse (obligatoires depuis 2015 dans les constructions neuves). Ces prises empêchent l\'introduction d\'objets dans les trous de la prise.' },
      { type: 'list', items: ['Installer des prises à éclipse dans toute la maison', 'Vérifier la présence et le bon fonctionnement du disjoncteur différentiel 30mA', 'Ranger les câbles et rallonges hors de portée', 'Ne jamais utiliser d\'appareils électriques près de l\'eau', 'Faire vérifier régulièrement son installation par un professionnel'] },
      { type: 'quote', text: 'La sécurité électrique de vos enfants commence par une installation conforme et bien entretenue.' },
    ],
  },
  {
    slug: 'choisir-son-tableau-electrique',
    title: 'Comment choisir le bon tableau électrique pour votre logement',
    excerpt: 'Le tableau électrique est le coeur de votre installation. Apprenez à choisir le modèle adapté à vos besoins et aux normes actuelles.',
    category: 'Installation',
    date: '12 Janvier 2026',
    readTime: '6 min de lecture',
    content: [
      { type: 'paragraph', text: 'Le tableau électrique est le centre névralgique de votre installation. C\'est lui qui distribue le courant dans toute la maison et qui protège vos circuits. Bien le choisir est essentiel pour la sécurité et le confort de votre logement.' },
      { type: 'heading', text: 'Les critères de choix' },
      { type: 'list', items: ['Nombre de rangées adapté à la taille du logement', 'Marque reconnue (Legrand, Schneider, Hager)', 'Espace suffisant pour les évolutions futures', 'Compatibilité avec les modules de protection', 'Facilité d\'accès et de maintenance'] },
      { type: 'heading', text: 'Les protections obligatoires' },
      { type: 'paragraph', text: 'Un tableau électrique conforme doit intégrer plusieurs niveaux de protection pour garantir la sécurité de votre installation et de ses utilisateurs.' },
      { type: 'list', items: ['Disjoncteur général (disjoncteur de branchement)', 'Interrupteurs différentiels 30mA de type A et AC', 'Disjoncteurs divisionnaires pour chaque circuit', 'Parafoudre (obligatoire dans certaines zones)', 'Bornier de terre'] },
      { type: 'quote', text: 'Un tableau bien dimensionné aujourd\'hui, c\'est la garantie de pouvoir faire évoluer votre installation demain sans tout refaire.' },
      { type: 'heading', text: 'Faire appel à un professionnel' },
      { type: 'paragraph', text: 'Le choix et l\'installation d\'un tableau électrique doivent être confiés à un électricien qualifié. Lui seul peut dimensionner correctement votre tableau en fonction de vos besoins actuels et futurs, tout en garantissant le respect de la norme NF C 15-100.' },
    ],
  },
]

let blogPosts: BlogPost[] = fallbackPosts

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const blogModule = require('@/data/blog-posts')
  if (blogModule.blogPosts && Array.isArray(blogModule.blogPosts)) {
    blogPosts = blogModule.blogPosts
  }
} catch {
  // blog-posts module not available yet, using fallback data
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${COMPANY.name}`,
      description: post.excerpt,
      type: 'article',
    },
  }
}

function renderContent(content: ContentBlock[]) {
  return content.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-slate-600 leading-relaxed mb-4">
            {block.text}
          </p>
        )
      case 'heading':
        return (
          <h2
            key={index}
            className="font-heading text-2xl font-bold text-slate-900 mt-8 mb-4"
          >
            {block.text}
          </h2>
        )
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
            {block.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      case 'quote':
        return (
          <blockquote
            key={index}
            className="border-l-4 border-electric pl-4 italic text-slate-600 my-6"
          >
            {block.text}
          </blockquote>
        )
      default:
        return null
    }
  })
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const postIndex = blogPosts.findIndex((p) => p.slug === slug)

  if (postIndex === -1) notFound()

  const post = blogPosts[postIndex]
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    datePublished: post.date,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-50 py-20 pt-32">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-electric"
          >
            <ArrowLeft className="h-4 w-4" /> Retour au blog
          </Link>
          <span className="mb-4 inline-block px-3 py-1 text-xs font-medium bg-electric/10 text-electric rounded-full">
            {post.category}
          </span>
          <h1 className="mb-4 font-heading text-4xl font-extrabold text-slate-900 md:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image Placeholder */}
              <div className="mb-8 aspect-[16/9] rounded-xl bg-slate-100 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-electric/10 to-electric/5 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-electric/30" />
                </div>
              </div>

              {/* Content */}
              <article className="prose-slate max-w-none">
                {post.content && post.content.length > 0 ? (
                  renderContent(post.content)
                ) : (
                  <>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Cet article est en cours de rédaction. Revenez bientôt
                      pour découvrir le contenu complet.
                    </p>
                  </>
                )}
              </article>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="rounded-2xl border border-electric/20 bg-electric/5 p-6 sticky top-24">
                <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900">
                  Besoin d&apos;un électricien ?
                </h3>
                <p className="mb-6 text-sm text-slate-600">
                  Nos experts sont à votre disposition pour tous vos projets
                  électriques. Devis gratuit et sans engagement.
                </p>
                <Link
                  href="/devis"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-6 py-3 font-semibold text-white transition-all hover:bg-electric-dark"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 transition-all hover:border-electric/30 hover:shadow-sm"
                >
                  <Phone className="h-4 w-4 text-electric" />
                  {COMPANY.phone}
                </a>
              </div>
            </aside>
          </div>

          {/* Navigation */}
          <div className="mt-16 border-t border-slate-200 pt-8">
            <div className="flex items-center justify-between gap-4">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-electric/30 hover:shadow-sm max-w-[48%]"
                >
                  <ChevronLeft className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-electric" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Article précédent</p>
                    <p className="truncate font-medium text-slate-900 group-hover:text-electric text-sm">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-electric/30 hover:shadow-sm text-right max-w-[48%]"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">Article suivant</p>
                    <p className="truncate font-medium text-slate-900 group-hover:text-electric text-sm">
                      {nextPost.title}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-electric" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
