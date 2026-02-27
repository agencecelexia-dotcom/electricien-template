'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants'

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
    <section className="bg-white py-20 pt-32">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-5 text-sm font-medium uppercase tracking-wider text-electric"
          >
            Electricien certifie Qualifelec & RGE
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-8 font-heading text-5xl font-extrabold leading-tight text-slate-900 sm:text-6xl"
          >
            L&apos;electricite,{' '}
            <span className="text-electric">autrement.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-12 text-lg leading-relaxed text-slate-600"
          >
            Installation, renovation, depannage 24/7.{' '}
            Paris & Ile-de-France — devis gratuit en 2 min.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <Button
              href="/devis"
              variant="primary"
              size="lg"
              iconRight={<ArrowRight className="h-5 w-5" />}
            >
              Devis Gratuit
            </Button>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
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
      </div>
    </section>
  )
}
