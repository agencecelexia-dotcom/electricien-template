'use client'

import { Phone, MessageCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function EmergencyCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className="clip-angle-top noise-overlay relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-navy-dark py-28 pt-36"
    >
      {/* Volt glow orb — dramatic background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt blur-[150px] animate-pulse-glow" />
      </div>

      {/* Subtle secondary electric orb */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-electric opacity-10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Urgence badge — volt tint */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-volt/15 px-4 py-2 text-sm font-medium text-volt">
            <Zap className="h-4 w-4" />
            Urgence électrique 24/7
          </div>

          {/* Phone number as design element */}
          <a
            href={COMPANY.phoneHref}
            className="mb-6 block cursor-pointer font-heading text-5xl font-extrabold text-white transition-all duration-200 hover:scale-[1.02] hover:text-volt sm:text-6xl md:text-7xl"
          >
            {COMPANY.phone}
          </a>

          <p className="mx-auto mb-10 max-w-lg text-lg text-slate-300">
            Panne, court-circuit, disjoncteur qui saute ?
            <br />
            Un technicien chez vous en <span className="font-semibold text-volt">moins de 30 minutes</span>.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Emergency call — keep red for urgency */}
            <Button
              href={COMPANY.phoneHref}
              variant="emergency"
              size="xl"
              icon={<Phone className="h-6 w-6" />}
            >
              Appeler maintenant
            </Button>
            {/* WhatsApp — volt outline */}
            <Button
              href={COMPANY.whatsapp}
              variant="outline-volt"
              size="lg"
              icon={<MessageCircle className="h-5 w-5" />}
            >
              WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
