'use client'

import { Phone, Zap, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function EmergencyCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-red-900 via-navy-dark to-navy py-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-amber blur-3xl" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-red-500 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-300">
              <Zap className="h-4 w-4" />
              Service d&apos;urgence
            </div>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Urgence Électrique{' '}
              <span className="text-amber">24/7</span>
            </h2>

            <p className="mb-6 text-lg text-slate-300">
              Panne de courant, court-circuit, disjoncteur qui saute ?
              Nos techniciens d&apos;astreinte interviennent en moins de 30 minutes
              dans votre secteur.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="h-5 w-5 text-amber" />
                <span className="text-sm">Intervention &lt; 30 min</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="h-5 w-5 text-amber" />
                <span className="text-sm">Diagnostic immédiat</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                href={COMPANY.phoneHref}
                variant="emergency"
                size="xl"
                icon={<Phone className="h-6 w-6" />}
              >
                {COMPANY.phone}
              </Button>
              <Button
                href={COMPANY.whatsapp}
                variant="outline-white"
                size="lg"
                icon={<MessageCircle className="h-5 w-5" />}
              >
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right: Quick Emergency Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10"
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              Rappel Immédiat
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Votre téléphone"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber focus:outline-none"
              />
              <input
                type="text"
                placeholder="Votre adresse"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Décrivez votre urgence..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber focus:outline-none"
              />
              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Demander un rappel immédiat
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
