'use client'

import { motion } from 'framer-motion'
import { WHY_CHOOSE_US } from '@/lib/constants'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-white py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: Big title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
          >
            <h2 className="font-heading text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
              Pourquoi
              <br />
              <span className="text-electric">nous choisir ?</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-slate-600">
              Des garanties concretes, pas des promesses en l&apos;air.
              Chaque intervention est un engagement.
            </p>
          </motion.div>

          {/* Right: 4 points with metrics */}
          <div className="space-y-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.12, duration: 0.5, ease: 'easeOut' as const }}
                  className="group flex gap-5 cursor-pointer"
                >
                  {/* Metric column */}
                  <div className="flex w-20 shrink-0 flex-col items-center">
                    <span className="font-heading text-3xl font-extrabold text-electric">
                      {item.metric}
                    </span>
                    <span className="text-xs text-slate-500">{item.metricLabel}</span>
                  </div>

                  {/* Separator */}
                  <div className="w-px bg-slate-200" />

                  {/* Content */}
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/10">
                        <Icon className="h-4 w-4 text-electric" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
