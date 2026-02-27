import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'Nos Services Électriques',
  description: 'Découvrez nos services : installation, rénovation, dépannage, mise aux normes, domotique et éclairage. Certifié Qualifelec & RGE.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-white md:text-6xl">
            Nos <span className="text-gradient">Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-slate-400">
            Des solutions complètes pour tous vos besoins électriques,
            du dépannage d&apos;urgence aux installations les plus complexes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white border border-slate-200 rounded-2xl shadow-sm block cursor-pointer overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-electric/30 hover:shadow-md"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="white">{service.shortTitle}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric/10">
                        <Icon className="h-5 w-5 text-electric" />
                      </div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mb-4 space-y-1">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="h-1 w-1 rounded-full bg-electric" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-electric transition-colors duration-200">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1 group-hover:text-electric" />
                    </span>
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
