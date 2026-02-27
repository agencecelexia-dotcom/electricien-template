import type { Metadata } from 'next'
import { Star, Shield, Clock, CheckCircle } from 'lucide-react'
import { COMPANY, TESTIMONIALS } from '@/lib/constants'
import { QuoteForm } from '@/components/forms/quote-form'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Devis Gratuit Électricien',
  description: `Demandez votre devis gratuit en ligne. Réponse sous 24h, sans engagement. Électricien certifié Qualifelec à Paris.`,
}

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-slate-900 md:text-6xl">
            Devis <span className="text-electric">gratuit</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-electric" />
              Réponse sous 24h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-electric" />
              Sans engagement
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-electric" />
              100% gratuit
            </span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">
                  Décrivez votre projet
                </h2>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Card */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
                <h3 className="mb-4 font-semibold text-slate-900">Pourquoi nous faire confiance ?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-electric" />
                    <span className="text-sm text-slate-600">Certifié Qualifelec & RGE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-electric" />
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
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-slate-600">
                  &ldquo;{TESTIMONIALS[0].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-electric-dark text-sm font-bold text-white">
                    {TESTIMONIALS[0].initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{TESTIMONIALS[0].name}</p>
                    <p className="text-xs text-slate-500">{TESTIMONIALS[0].location}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center">
                <p className="font-heading text-4xl font-bold text-electric">{COMPANY.projectsCompleted}+</p>
                <p className="mt-1 text-sm text-slate-600">Projets réalisés</p>
                <div className="my-4 h-px bg-slate-200" />
                <p className="font-heading text-4xl font-bold text-electric">{COMPANY.yearsExperience}+</p>
                <p className="mt-1 text-sm text-slate-600">Années d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
