import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { LayoutShell } from '@/components/layout/LayoutShell'
import { CookieBanner } from '@/components/ui/CookieBanner'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { COMPANY } from '@/lib/constants'
import { clientConfig } from '@/config/client.config'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})



export const metadata: Metadata = {
  metadataBase: new URL(`https://${clientConfig.DOMAINE}`),
  title: {
    default: `${COMPANY.name} — Électricien Certifié ${clientConfig.VILLE} | Installation & Dépannage 24/7`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `Électricien certifié Qualifelec à ${clientConfig.VILLE}. Installation, rénovation, dépannage 24/7. Devis gratuit et intervention rapide. +${COMPANY.projectsCompleted} projets réalisés.`,
  keywords: ['électricien', clientConfig.VILLE.toLowerCase(), 'installation électrique', 'dépannage', 'rénovation', 'mise aux normes', 'domotique', 'éclairage', 'Qualifelec', 'RGE'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: `https://${clientConfig.DOMAINE}`,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Électricien Certifié ${clientConfig.VILLE}`,
    description: `Électricien certifié à ${clientConfig.VILLE} et ${clientConfig.ZONE_INTERVENTION}. Devis gratuit, intervention rapide 24/7.`,
    images: [{ url: '/images/og-image.webp', width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} — Électricien Certifié ${clientConfig.VILLE}`,
    description: `Électricien certifié à ${clientConfig.VILLE} et ${clientConfig.ZONE_INTERVENTION}. Devis gratuit, intervention rapide 24/7.`,
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
    description: `Électricien certifié à ${clientConfig.VILLE}. Installation, rénovation, dépannage électrique 24/7.`,
    image: '/images/og-image.webp',
    telephone: clientConfig.TELEPHONE_HREF,
    email: COMPANY.email,
    url: `https://${clientConfig.DOMAINE}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clientConfig.ADRESSE,
      addressLocality: clientConfig.VILLE,
      postalCode: clientConfig.CODE_POSTAL,
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: parseFloat(clientConfig.LATITUDE), longitude: parseFloat(clientConfig.LONGITUDE) },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '00:00', closes: '23:59', description: 'Urgences uniquement' },
    ],
    priceRange: '$$',
    areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: parseFloat(clientConfig.LATITUDE), longitude: parseFloat(clientConfig.LONGITUDE) }, geoRadius: `${parseInt(clientConfig.ZONE_KM) * 1000}` },
  }

  return (
    <html lang="fr" className={nunitoSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <LayoutShell>
          {children}
        </LayoutShell>
        <ScrollProgress />
        <CookieBanner />
      </body>
    </html>
  )
}
