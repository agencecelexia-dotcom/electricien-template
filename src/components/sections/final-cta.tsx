'use client'

import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="noise-overlay circuit-pattern relative overflow-hidden bg-navy py-32">
      {/* Gradient orbs — volt + electric */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-volt blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-electric blur-[100px]" />
      </div>

      {/* Center volt power burst */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Power-up icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6 inline-flex items-center justify-center rounded-full bg-volt/10 p-4"
          >
            <Zap className="h-8 w-8 text-volt" />
          </motion.div>

          <h2 className="mb-6 font-heading text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
            Votre projet
            <br />
            <span className="text-volt">commence ici.</span>
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Devis gratuit en 2 minutes. Réponse garantie sous 24h.
          </p>

          <Button
            href="/devis"
            variant="volt"
            size="xl"
            iconRight={<ArrowRight className="h-5 w-5" />}
            className="btn-glow"
          >
            Demander un Devis Gratuit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
