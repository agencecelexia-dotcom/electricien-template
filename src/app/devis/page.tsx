import type { Metadata } from 'next'
import { Star, Shield, Clock, CheckCircle } from 'lucide-react'
import { COMPANY, TESTIMONIALS } from '@/lib/constants'
import { QuoteForm } from '@/components/forms/quote-form'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Devis Gratuit Électricien',
  description: `Demandez votre devis gratuit en ligne. Réponse sous 24h, sans engagement. Électricien certifié Qualifelec à Paris.`,
}

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Demandez Votre <span className="text-amber">Devis Gratuit</span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-amber" />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Réponse sous 24h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-green-500" />
              100% gratuit
            </span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-slate-800">
                  Décrivez votre projet
                </h2>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-4 font-semibold text-slate-800">Pourquoi nous faire confiance ?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-electric" />
                    <span className="text-sm text-slate-600">Certifié Qualifelec & RGE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-amber" />
                    <span className="text-sm text-slate-600">{COMPANY.satisfactionRate}% de clients satisfaits</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-electric" />
                    <span className="text-sm text-slate-600">Réponse garantie sous 24h</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {COMPANY.certifications.map((cert) => (
                    <Badge key={cert} variant="electric">{cert}</Badge>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-slate-600">
                  &ldquo;{TESTIMONIALS[0].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={TESTIMONIALS[0].image}
                      alt={TESTIMONIALS[0].name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{TESTIMONIALS[0].name}</p>
                    <p className="text-xs text-slate-500">{TESTIMONIALS[0].location}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="rounded-2xl bg-navy p-6 text-center text-white">
                <p className="font-display text-4xl font-bold text-amber">{COMPANY.projectsCompleted}+</p>
                <p className="mt-1 text-sm text-slate-400">Projets réalisés</p>
                <div className="my-4 h-px bg-white/10" />
                <p className="font-display text-4xl font-bold text-electric">{COMPANY.yearsExperience}+</p>
                <p className="mt-1 text-sm text-slate-400">Années d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
