'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants'
import { HeroCircuit } from './hero-particles'
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
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      {/* Content — asymmetric layout */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 lg:grid-cols-2">
        {/* Left: Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-heading text-sm font-medium uppercase tracking-[0.2em] text-electric"
          >
            Électricien certifié Qualifelec & RGE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 font-heading text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            L&apos;électricité,
            <br />
            <span className="text-gradient">autrement.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-10 max-w-lg text-lg text-slate-400 md:text-xl"
          >
            Installation, rénovation, dépannage 24/7.
            <br className="hidden sm:block" />
            Paris & Île-de-France — devis gratuit en 2 min.
          </motion.p>

          {/* Single big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              href="/devis"
              variant="secondary"
              size="xl"
              iconRight={<ArrowRight className="h-5 w-5" />}
              className="btn-glow"
            >
              Devis Gratuit
            </Button>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {COMPANY.yearsExperience}+ ans
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              {COMPANY.projectsCompleted}+ projets
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {COMPANY.satisfactionRate}% satisfaction
            </span>
          </motion.div>
        </div>

        {/* Right: Circuit SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden lg:block"
        >
          <HeroCircuit className="h-[500px] w-full opacity-70" />
        </motion.div>
      </div>
    </section>
  )
}
