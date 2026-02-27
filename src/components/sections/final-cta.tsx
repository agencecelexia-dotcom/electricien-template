'use client'

import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6 inline-flex items-center justify-center rounded-full bg-electric/10 p-4"
          >
            <Zap className="h-8 w-8 text-electric-light" />
          </motion.div>

          <h2 className="mb-6 font-heading text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
            Votre projet
            <br />
            <span className="text-electric-light">commence ici.</span>
          </h2>
          <p className="mb-10 text-lg text-slate-300">
            Devis gratuit en 2 minutes. Reponse garantie sous 24h.
          </p>

          <Button
            href="/devis"
            variant="primary"
            size="xl"
            iconRight={<ArrowRight className="h-5 w-5" />}
          >
            Demander un Devis Gratuit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
