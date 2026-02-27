import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FloatingCTA } from '@/components/layout/floating-cta'
import { LightningBackground } from '@/components/ui/lightning-background'
import { COMPANY } from '@/lib/constants'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://electropro.fr'),
  title: {
    default: `${COMPANY.name} — Électricien Certifié Paris | Installation & Dépannage 24/7`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `Électricien certifié Qualifelec à Paris. Installation, rénovation, dépannage 24/7. Devis gratuit et intervention rapide. +${COMPANY.projectsCompleted} projets réalisés.`,
  keywords: ['électricien', 'paris', 'installation électrique', 'dépannage', 'rénovation', 'mise aux normes', 'domotique', 'éclairage', 'Qualifelec', 'RGE'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://electropro.fr',
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Électricien Certifié Paris`,
    description: `Électricien certifié à Paris et Île-de-France. Devis gratuit, intervention rapide 24/7.`,
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} — Électricien Certifié Paris`,
    description: `Électricien certifié à Paris et Île-de-France. Devis gratuit, intervention rapide 24/7.`,
    images: ['/images/og-image.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: COMPANY.name,
    description: `Électricien certifié à Paris. Installation, rénovation, dépannage électrique 24/7.`,
    image: '/images/og-image.webp',
    telephone: '+33123456789',
    email: COMPANY.email,
    url: 'https://electropro.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15 Rue Voltaire',
      addressLocality: 'Paris',
      postalCode: '75011',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 48.8566, longitude: 2.3522 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '00:00', closes: '23:59', description: 'Urgences uniquement' },
    ],
    priceRange: '$$',
    areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 48.8566, longitude: 2.3522 }, geoRadius: '50000' },
  }

  return (
    <html lang="fr" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <LightningBackground />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
