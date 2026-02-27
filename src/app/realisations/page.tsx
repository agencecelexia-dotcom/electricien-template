import type { Metadata } from 'next'
import { REALISATIONS } from '@/lib/constants'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { Badge } from '@/components/ui/badge'
import { FinalCTA } from '@/components/sections/final-cta'

export const metadata: Metadata = {
  title: 'Nos Réalisations',
  description: 'Découvrez nos projets d\'installation et rénovation électrique avant/après. +2500 projets réalisés à Paris et Île-de-France.',
}

export default function RealisationsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="noise-overlay relative bg-navy py-20 pt-32">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <h1 className="mb-4 font-heading text-5xl font-extrabold text-white md:text-6xl">
            Avant / <span className="text-gradient">Après</span>
          </h1>
          <p className="max-w-lg text-lg text-slate-400">
            La preuve par l&apos;image. Jugez de la qualité de nos interventions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-navy-light py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {REALISATIONS.map((project) => (
              <div key={project.id} className="space-y-4">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
                <div>
                  <h2 className="mb-2 font-heading text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mb-3 text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="white">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
