import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { ContactForm } from '@/components/forms/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contactez votre électricien certifié. Devis gratuit, intervention rapide. Tél: ${COMPANY.phone}. Paris et Île-de-France.`,
}

const contactInfo = [
  { icon: Phone, label: 'Téléphone', value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: 'Adresse', value: COMPANY.address },
  { icon: Clock, label: 'Horaires', value: COMPANY.hours },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Envoyez-nous un message', href: COMPANY.whatsapp },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            <span className="text-electric">Contactez</span>-Nous
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          <p className="mx-auto max-w-2xl text-slate-400">
            Une question, un projet, une urgence ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-slate-800">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-slate-800">Nos coordonnées</h2>

              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-electric/30 hover:shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10">
                      <Icon className="h-6 w-6 text-electric" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <p className="font-semibold text-slate-800">{item.value}</p>
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                      {content}
                    </a>
                  )
                }

                return <div key={item.label}>{content}</div>
              })}

              {/* Emergency Callout */}
              <div className="rounded-xl border-2 border-amber/30 bg-amber/5 p-6">
                <h3 className="mb-2 font-semibold text-amber-dark">Urgence Électrique ?</h3>
                <p className="mb-4 text-sm text-slate-600">
                  Notre service d&apos;urgence est disponible 24h/24, 7j/7.
                  Intervention en moins de 30 minutes.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber px-6 py-3 font-semibold text-navy transition-colors hover:bg-amber-dark"
                >
                  <Phone className="h-5 w-5" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
