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
      <section className="bg-white py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-slate-900 md:text-6xl">
            <span className="text-electric">Contactez</span>-Nous
          </h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Une question, un projet, une urgence ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Nos coordonnées</h2>

              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-electric/30 hover:shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric/10">
                      <Icon className="h-6 w-6 text-electric" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <p className="font-semibold text-slate-900">{item.value}</p>
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
              <div className="rounded-xl border-2 border-electric/30 bg-electric/5 p-6">
                <h3 className="mb-2 font-heading font-semibold text-electric">Urgence Électrique ?</h3>
                <p className="mb-4 text-sm text-slate-600">
                  Notre service d&apos;urgence est disponible 24h/24, 7j/7.
                  Intervention en moins de 30 minutes.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-electric px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-electric-dark cursor-pointer"
                >
                  <Phone className="h-5 w-5" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">Nous trouver</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(COMPANY.address)}`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation ÉlectroPro"
            />
          </div>
        </div>
      </section>
    </>
  )
}
