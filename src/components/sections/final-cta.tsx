'use client'

import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-20">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Prêt à Démarrer{' '}
            <span className="text-amber">Votre Projet</span> ?
          </h2>
          <p className="mb-8 text-lg text-slate-400">
            Obtenez votre devis gratuit en moins de 2 minutes.
            Réponse garantie sous 24h.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/devis"
              variant="secondary"
              size="xl"
              iconRight={<ArrowRight className="h-5 w-5" />}
            >
              Demander un Devis Gratuit
            </Button>
            <Button
              href={COMPANY.phoneHref}
              variant="outline-white"
              size="lg"
              icon={<Phone className="h-5 w-5" />}
            >
              {COMPANY.phone}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {COMPANY.certifications.map((cert) => (
              <Badge key={cert} variant="white">{cert}</Badge>
            ))}
            <Badge variant="white">{COMPANY.satisfactionRate}% satisfaction</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
