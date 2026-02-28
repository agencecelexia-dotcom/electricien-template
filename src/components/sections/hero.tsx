'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants'
import { clientConfig } from '@/config/client.config'

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
    <section className="relative bg-white pt-28 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="mb-5 text-sm font-medium uppercase tracking-wider text-electric"
            >
              Électricien certifié Qualifelec &amp; RGE
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-8 font-heading text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl"
            >
              L&apos;électricité,{' '}
              <span className="text-electric">autrement.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-lg text-lg leading-relaxed text-slate-600"
            >
              Installation, rénovation, dépannage 24/7.{' '}
              {clientConfig.VILLE} &amp; {clientConfig.ZONE_INTERVENTION} — devis gratuit en 2 min.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Button
                href="/devis"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight className="h-5 w-5" />}
              >
                Devis Gratuit
              </Button>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-electric/30 hover:text-electric"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                {COMPANY.yearsExperience}+ ans
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                {COMPANY.projectsCompleted}+ projets
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                {COMPANY.satisfactionRate}% satisfaction
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/10">
              <Image
                src="/images/hero/accueil.webp"
                alt="Électricien professionnel au travail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-5 py-3 shadow-lg border border-slate-100">
              <p className="text-2xl font-extrabold text-electric">{COMPANY.responseTime} min</p>
              <p className="text-xs text-slate-500">Temps d&apos;intervention</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
