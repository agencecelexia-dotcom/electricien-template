'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import Image from 'next/image'

export function ServicesOverview() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="bg-slate-50 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-14 max-w-xl">
          <h2 className="mb-4 font-heading text-4xl font-bold text-slate-900 md:text-5xl">
            Ce qu&apos;on fait.{' '}
            <span className="text-electric">Bien.</span>
          </h2>
          <p className="text-slate-600">
            Six expertises electriques, une seule exigence : la qualite.
          </p>
        </div>

        {/* Bento Grid: 2 large + 4 small */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const isLarge = index < 2
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' as const }}
                className={isLarge ? 'lg:row-span-2' : ''}
              >
                <Link href={`/services/${service.slug}`} className="group relative block h-full cursor-pointer">
                  <div className={`relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:border-electric/30 group-hover:shadow-md ${isLarge ? 'min-h-[400px]' : 'min-h-[180px]'}`}>
                    {/* Image for large cards */}
                    {isLarge && (
                      <div className="relative h-52 shrink-0 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      </div>
                    )}

                    <div className="relative z-10 flex flex-1 flex-col justify-end p-6">
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 transition-all duration-200 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-electric" />
                      </div>
                      <h3 className="mb-1.5 font-heading text-lg font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed text-slate-600 ${isLarge ? '' : 'line-clamp-2'}`}>
                        {service.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-electric transition-colors duration-200">
                        {service.cta}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
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
