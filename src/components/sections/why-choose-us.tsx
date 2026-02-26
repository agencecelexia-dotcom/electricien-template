'use client'

import { motion } from 'framer-motion'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
            Pourquoi Nous <span className="text-electric">Choisir</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
          <p className="mx-auto max-w-2xl text-slate-600">
            Des garanties concrètes pour une tranquillité d&apos;esprit totale
            sur chacune de nos interventions.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-electric"
                >
                  <Icon className="h-8 w-8 text-amber" />
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-electric/30" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
