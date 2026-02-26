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
      <section className="bg-navy py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Nos <span className="text-electric">Réalisations</span>
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          <p className="mx-auto max-w-2xl text-slate-400">
            Découvrez nos projets avant/après et jugez par vous-même
            de la qualité de nos interventions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {REALISATIONS.map((project) => (
              <div key={project.id} className="space-y-4">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
                <div>
                  <h2 className="mb-2 text-xl font-semibold text-slate-800">
                    {project.title}
                  </h2>
                  <p className="mb-3 text-slate-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="electric">{tag}</Badge>
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
