'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-navy py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Nos <span className="text-electric">Services</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          <p className="mx-auto max-w-2xl text-slate-400">
            Des solutions électriques complètes pour tous vos besoins,
            du dépannage d&apos;urgence à l&apos;installation de systèmes domotiques.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/services/${service.slug}`} className="group block">
                  <div className="electric-border rounded-2xl p-6 glass transition-all duration-300 group-hover:-translate-y-2">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-electric/10 transition-colors group-hover:bg-amber/10">
                      <Icon className="h-7 w-7 text-electric transition-colors group-hover:text-amber" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-electric transition-colors group-hover:text-amber">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
