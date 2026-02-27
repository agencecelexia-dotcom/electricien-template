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
      <section className="noise-overlay relative bg-navy py-20 pt-32">
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
        {/* Volt glow orbs */}
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-volt/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-electric/10 blur-[80px]" />
        <div className="pointer-events-none absolute left-1/2 bottom-0 h-56 w-56 rounded-full bg-volt/8 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-white md:text-6xl">
            À propos de <span className="text-gradient">{COMPANY.name}</span>
          </h1>
          <p className="max-w-lg text-lg text-slate-400">
            {COMPANY.yearsExperience} ans d&apos;expertise électrique au service
            de votre confort et de votre sécurité.
          </p>
        </div>
      </section>

      {/* Story + Founder */}
      <section className="bg-navy-light py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-heading text-4xl font-bold text-white">Notre histoire</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Fondée il y a {COMPANY.yearsExperience} ans par Marc Durand, maître électricien passionné,
                  {COMPANY.name} est née d&apos;une vision simple : offrir des services électriques
                  d&apos;excellence à Paris et en Île-de-France.
                </p>
                <p>
                  Au fil des années, nous avons constitué une équipe de techniciens certifiés,
                  formés aux dernières technologies et normes en vigueur. De l&apos;installation
                  complète à la domotique, en passant par le dépannage d&apos;urgence, nous
                  couvrons l&apos;ensemble des besoins électriques.
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

            {/* Founder card */}
            <div className="grid gap-6">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="glass flex items-center gap-6 rounded-2xl p-6">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-navy">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">{member.name}</h3>
                    <p className="mb-2 text-sm font-medium text-electric">{member.role}</p>
                    <p className="text-sm text-slate-300">{member.description}</p>
                  </div>
                </div>
              ))}

              {/* Team group photo */}
              <div className="relative h-64 overflow-hidden rounded-2xl bg-navy">
                <Image
                  src="/images/team/equipe-groupe.webp"
                  alt="L'équipe ÉlectroPro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-24 circuit-pattern">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-14 font-heading text-4xl font-bold text-white md:text-5xl">
            Nos <span className="text-gradient-static">valeurs</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 transition-all duration-200 group-hover:scale-110 group-hover:bg-volt/10">
                    <Icon className="h-6 w-6 text-electric transition-colors duration-200 group-hover:text-volt" />
                  </div>
                  <h3 className="mb-2 font-heading font-semibold text-white">{value.title}</h3>
                  <p className="text-sm text-slate-400">{value.description}</p>
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
