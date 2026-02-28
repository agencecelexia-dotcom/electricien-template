'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { REALISATIONS } from '@/lib/constants'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function RealisationsPreview() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-slate-50 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 max-w-xl">
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
            Avant / <span className="text-electric">Apres</span>
          </h2>
          <p className="text-slate-600">
            La preuve par l&apos;image. Jugez par vous-meme.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {REALISATIONS.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
              </div>
              <div className="mt-4">
                <h3 className="mb-2 font-heading text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="electric">{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href="/realisations"
            variant="outline"
            size="lg"
            iconRight={<ArrowRight className="h-5 w-5" />}
          >
            Voir toutes nos realisations
          </Button>
        </div>
      </div>
    </section>
  )
}
