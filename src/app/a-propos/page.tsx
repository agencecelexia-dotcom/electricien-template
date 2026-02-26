import type { Metadata } from 'next'
import Image from 'next/image'
import { Shield, Heart, Zap, Users } from 'lucide-react'
import { COMPANY, TEAM_MEMBERS } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'
import { TrustBar } from '@/components/sections/trust-bar'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'À Propos',
  description: `Découvrez l'histoire de ${COMPANY.name}, électricien certifié depuis ${COMPANY.yearsExperience} ans. Notre équipe, nos valeurs, nos certifications.`,
}

const values = [
  { icon: Shield, title: 'Sécurité', description: 'La sécurité de nos clients et de nos équipes est notre priorité absolue.' },
  { icon: Heart, title: 'Excellence', description: 'Nous visons l\'excellence dans chaque intervention, du diagnostic à la finition.' },
  { icon: Zap, title: 'Réactivité', description: 'Nous répondons rapidement à vos demandes, qu\'il s\'agisse d\'un devis ou d\'une urgence.' },
  { icon: Users, title: 'Proximité', description: 'Une relation de confiance basée sur l\'écoute, la transparence et le respect.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/team/equipe-groupe.webp"
            alt="L'équipe ÉlectroPro"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            À Propos de <span className="text-electric">{COMPANY.name}</span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          <p className="mx-auto max-w-2xl text-slate-400">
            {COMPANY.yearsExperience} ans d&apos;expertise électrique au service
            de votre confort et de votre sécurité.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-800">Notre Histoire</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Fondée il y a {COMPANY.yearsExperience} ans par Marc Durand, maître électricien passionné,
                  {COMPANY.name} est née d&apos;une vision simple : offrir des services électriques
                  d&apos;excellence à Paris et en Île-de-France.
                </p>
                <p>
                  Au fil des années, nous avons constitué une équipe de techniciens certifiés,
                  formés aux dernières technologies et normes en vigueur. De l&apos;installation
                  complète à la domotique, en passant par le dépannage d&apos;urgence, nous
                  couvrons l&apos;ensemble des besoins électriques résidentiels et commerciaux.
                </p>
                <p>
                  Avec plus de {COMPANY.projectsCompleted} projets réalisés et un taux de satisfaction
                  de {COMPANY.satisfactionRate}%, notre réputation repose sur la qualité de notre travail,
                  notre réactivité et notre transparence.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {COMPANY.certifications.map((cert) => (
                  <Badge key={cert} variant="electric">{cert}</Badge>
                ))}
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/team/atelier.webp"
                alt="Notre atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
              Notre <span className="text-electric">Équipe</span>
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm">
                <div className="relative h-64 bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-electric">{member.role}</p>
                  <p className="text-sm text-slate-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
              Nos <span className="text-electric">Valeurs</span>
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric/10">
                    <Icon className="h-7 w-7 text-electric" />
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-800">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <TrustBar />
      <FinalCTA />
    </>
  )
}
