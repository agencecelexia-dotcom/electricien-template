'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, ChevronDown, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { COMPANY } from '@/lib/constants'
import { HeroParticles } from './hero-particles'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 z-[1]">
        <HeroParticles className="absolute inset-0" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Badge variant="amber" className="mb-6">
            <ShieldCheck className="h-3.5 w-3.5" />
            Électricien Certifié Qualifelec
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          L&apos;Excellence{' '}
          <span className="text-electric" style={{ textShadow: '0 0 40px rgba(59,130,246,0.4)' }}>
            Électrique
          </span>
          <br />
          à Votre Service
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl"
        >
          Installation, rénovation et dépannage électrique à Paris et Île-de-France.
          Intervention rapide, devis gratuit, satisfaction garantie.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            href="/devis"
            variant="secondary"
            size="lg"
            iconRight={<ArrowRight className="h-5 w-5" />}
          >
            Devis Gratuit
          </Button>
          <Button
            href={COMPANY.phoneHref}
            variant="outline-white"
            size="lg"
            icon={<Phone className="h-5 w-5" />}
          >
            {COMPANY.phone}
          </Button>
        </motion.div>

        {/* Trust Mini Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber" />
            {COMPANY.yearsExperience}+ ans d&apos;expérience
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-electric" />
            {COMPANY.projectsCompleted}+ projets réalisés
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Certifié Qualifelec & RGE
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="mb-2 block text-xs text-slate-500">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-6 w-6 text-electric" />
        </motion.div>
      </motion.div>
    </section>
  )
}
