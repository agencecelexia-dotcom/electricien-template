import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check, ArrowLeft } from 'lucide-react'
import { SERVICES, COMPANY } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FinalCTA } from '@/components/sections/final-cta'

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.longDescription.slice(0, 160),
    openGraph: {
      title: `${service.title} | ${COMPANY.name}`,
      description: service.description,
      images: [{ url: service.image }],
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) notFound()

  const Icon = service.icon
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    provider: {
      '@type': 'Electrician',
      name: COMPANY.name,
      telephone: '+33123456789',
    },
    areaServed: 'Paris, Île-de-France',
    image: service.image,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-navy py-20 pt-32">
        <div className="absolute inset-0">
          <Image src={service.image} alt="" fill className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white cursor-pointer">
            <ArrowLeft className="h-4 w-4" /> Tous les services
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-electric/20">
              <Icon className="h-8 w-8 text-electric" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">{service.title}</h1>
              <p className="mt-2 text-lg text-slate-400">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="mb-4 text-2xl font-bold text-slate-900">À Propos de ce Service</h2>
                <p className="leading-relaxed text-slate-600">{service.longDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Ce Qui Est Inclus</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3 transition-all duration-200 hover:border-electric/20 hover:shadow-sm">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Vos Avantages</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="h-2 w-2 shrink-0 rounded-full bg-electric" />
                      <span className="text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Notre Processus</h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric font-heading text-lg font-bold text-white">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{step.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-electric/10 to-electric/5 border border-electric/30 rounded-2xl p-6 sticky top-24 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold text-slate-900">Besoin de ce service ?</h3>
                <p className="mb-6 text-sm text-slate-700 font-medium">
                  Devis gratuit et sans engagement. Réponse sous 24h.
                </p>
                <Button href="/devis" variant="primary" size="lg" className="mb-3 w-full" iconRight={<ArrowRight className="h-5 w-5" />}>
                  Devis Gratuit
                </Button>
                <Button href={COMPANY.phoneHref} variant="outline" size="md" className="w-full border-electric/30 text-electric hover:bg-electric/5">
                  {COMPANY.phone}
                </Button>

                <div className="mt-6 space-y-3 border-t border-electric/20 pt-6">
                  {COMPANY.certifications.map((cert) => (
                    <Badge key={cert} variant="electric">{cert}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 font-heading text-2xl font-bold text-slate-900">Services Associés</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon
              return (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl shadow-sm flex cursor-pointer items-center gap-4 p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10">
                    <RelatedIcon className="h-6 w-6 text-electric" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 transition-colors duration-200 group-hover:text-electric">{related.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{related.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
