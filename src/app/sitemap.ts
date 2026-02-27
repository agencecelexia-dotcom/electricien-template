import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/constants'

// Blog post slugs — try to import from data, fallback to inline list
let blogSlugs: string[] = [
  'guide-renovation-electrique-appartement',
  'norme-nf-c-15-100-essentiel',
  'domotique-maison-connectee-2026',
  'economies-energie-eclairage-led',
  'securite-electrique-enfants',
  'choisir-son-tableau-electrique',
]

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const blogModule = require('@/data/blog-posts')
  if (blogModule.blogPosts && Array.isArray(blogModule.blogPosts)) {
    blogSlugs = blogModule.blogPosts.map((post: { slug: string }) => post.slug)
  }
} catch {
  // blog-posts module not available yet, using inline slugs
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electropro.fr'

  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...servicePages,
    { url: `${baseUrl}/realisations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/devis`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    ...blogPages,
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/politique-confidentialite`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
