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
      <section className="noise-overlay relative bg-navy py-20 pt-32">
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-volt/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/3 top-1/2 h-48 w-48 rounded-full bg-electric/10 blur-[80px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-white md:text-6xl">
            <span className="text-gradient">Contactez</span>-Nous
          </h1>
          <p className="mx-auto max-w-2xl text-slate-400">
            Une question, un projet, une urgence ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-navy-light py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="glass-dark rounded-2xl p-8">
              <h2 className="mb-6 text-2xl font-bold text-white">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-white">Nos coordonnées</h2>

              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-volt/30 hover:bg-white/10">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10">
                      <Icon className="h-6 w-6 text-electric" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="cursor-pointer">
                      {content}
                    </a>
                  )
                }

                return <div key={item.label}>{content}</div>
              })}

              {/* Emergency Callout */}
              <div className="rounded-xl border-2 border-volt/30 bg-volt/5 p-6">
                <h3 className="mb-2 font-heading font-semibold text-volt">Urgence Électrique ?</h3>
                <p className="mb-4 text-sm text-slate-300">
                  Notre service d&apos;urgence est disponible 24h/24, 7j/7.
                  Intervention en moins de 30 minutes.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-volt px-6 py-3 font-semibold text-navy transition-all duration-200 hover:shadow-lg hover:shadow-volt/25 cursor-pointer"
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
