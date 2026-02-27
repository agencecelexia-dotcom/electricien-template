import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Conseils et Actualités Électricité',
  description:
    'Conseils d\'experts, guides pratiques et actualités du monde de l\'électricité. Découvrez nos articles sur l\'installation, la rénovation et la sécurité électrique.',
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image?: string
}

// Fallback data in case the blog-posts module is not yet available
const fallbackPosts: BlogPost[] = [
  {
    slug: 'guide-renovation-electrique-appartement',
    title: 'Guide complet : rénover l\'installation électrique de votre appartement',
    excerpt: 'Tout ce que vous devez savoir avant de rénover votre installation électrique. Normes, budget, étapes clés et conseils de professionnels.',
    category: 'Rénovation',
    date: '15 Février 2026',
    readTime: '8 min de lecture',
  },
  {
    slug: 'norme-nf-c-15-100-essentiel',
    title: 'Norme NF C 15-100 : ce que tout propriétaire doit savoir',
    excerpt: 'La norme NF C 15-100 régit toutes les installations électriques résidentielles. Découvrez ses exigences et comment vous mettre en conformité.',
    category: 'Normes',
    date: '10 Février 2026',
    readTime: '6 min de lecture',
  },
  {
    slug: 'domotique-maison-connectee-2026',
    title: 'Domotique en 2026 : transformer votre maison en habitat connecté',
    excerpt: 'Les solutions domotiques ont évolué. Découvrez comment rendre votre maison intelligente, économe et sécurisée grâce à la technologie.',
    category: 'Domotique',
    date: '5 Février 2026',
    readTime: '7 min de lecture',
  },
  {
    slug: 'economies-energie-eclairage-led',
    title: 'Économies d\'énergie : passez à l\'éclairage LED',
    excerpt: 'L\'éclairage représente 10 à 15% de votre facture d\'électricité. Découvrez comment les LED peuvent réduire votre consommation de 80%.',
    category: 'Éclairage',
    date: '28 Janvier 2026',
    readTime: '5 min de lecture',
  },
  {
    slug: 'securite-electrique-enfants',
    title: 'Sécurité électrique : protéger vos enfants à la maison',
    excerpt: 'Les accidents électriques domestiques sont évitables. Voici les mesures essentielles pour protéger vos enfants au quotidien.',
    category: 'Sécurité',
    date: '20 Janvier 2026',
    readTime: '5 min de lecture',
  },
  {
    slug: 'choisir-son-tableau-electrique',
    title: 'Comment choisir le bon tableau électrique pour votre logement',
    excerpt: 'Le tableau électrique est le coeur de votre installation. Apprenez à choisir le modèle adapté à vos besoins et aux normes actuelles.',
    category: 'Installation',
    date: '12 Janvier 2026',
    readTime: '6 min de lecture',
  },
]

let posts: BlogPost[] = fallbackPosts

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const blogModule = require('@/data/blog-posts')
  if (blogModule.blogPosts && Array.isArray(blogModule.blogPosts)) {
    posts = blogModule.blogPosts
  }
} catch {
  // blog-posts module not available yet, using fallback data
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md hover:border-electric/30">
        <div className="aspect-[16/9] bg-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-electric/5 flex items-center justify-center">
            <FileText className="h-12 w-12 text-electric/30" />
          </div>
        </div>
        <div className="p-6">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-electric/10 text-electric rounded-full mb-3">
            {post.category}
          </span>
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 group-hover:text-electric transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-slate-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-50 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-slate-900 md:text-6xl">
            Notre <span className="text-electric">Blog</span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Conseils d&apos;experts, guides pratiques et actualités du monde de
            l&apos;électricité.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
