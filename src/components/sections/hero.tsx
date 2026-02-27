'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants'
import { HeroCircuit } from './hero-particles'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section className="clip-angle-bottom noise-overlay relative flex min-h-screen items-center overflow-hidden bg-navy pb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/50" />
      </div>

      {/* Animated gradient orbs — atmospheric background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large electric orb — top left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="animate-float absolute -top-24 -left-24 h-96 w-96 rounded-full bg-electric/12 blur-[120px]"
        />
        {/* Volt orb — center right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="animate-float absolute top-1/3 right-[10%] h-72 w-72 rounded-full bg-volt/8 blur-[100px]"
          style={{ animationDelay: '2s' }}
        />
        {/* Amber orb — bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="animate-float absolute -bottom-16 left-1/4 h-64 w-64 rounded-full bg-amber/8 blur-[100px]"
          style={{ animationDelay: '4s' }}
        />
        {/* Small electric orb — mid right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="animate-float absolute top-[60%] right-[30%] h-48 w-48 rounded-full bg-electric/6 blur-[80px]"
          style={{ animationDelay: '3s' }}
        />
      </div>

      {/* Content — asymmetric layout */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-20 lg:grid-cols-2">
        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 font-heading text-sm font-medium uppercase tracking-[0.25em] text-electric"
          >
            Electricien certifie Qualifelec & RGE
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-8 font-heading text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            L&apos;electricite,
            <br />
            <span className="scan-line inline-block text-volt">autrement.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-12 max-w-lg text-lg leading-relaxed text-slate-400 md:text-xl md:leading-relaxed"
          >
            Installation, renovation, depannage 24/7.
            <br className="hidden sm:block" />
            <span className="text-slate-300">Paris & Ile-de-France</span> — devis gratuit en 2 min.
          </motion.p>

          {/* Single big CTA */}
          <motion.div variants={itemVariants}>
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

          {/* Trust line — volt dots */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-500"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              {COMPANY.yearsExperience}+ ans
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              {COMPANY.projectsCompleted}+ projets
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              {COMPANY.satisfactionRate}% satisfaction
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Circuit SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
          className="hidden lg:block"
        >
          <HeroCircuit className="h-[500px] w-full opacity-50" />
        </motion.div>
      </div>

      {/* Bottom electric divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="divider-electric absolute bottom-12 left-0 right-0 z-10"
      />
    </section>
  )
}
