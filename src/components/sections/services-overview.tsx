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
    <>
      <section className="noise-overlay bg-navy py-24" ref={ref}>
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Section Header — left aligned */}
          <div className="mb-14 max-w-xl">
            <h2 className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl">
              Ce qu&apos;on fait.{' '}
              <span className="text-gradient">Bien.</span>
            </h2>
            <p className="text-slate-400">
              Six expertises électriques, une seule exigence : la qualité.
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
                    <div className={`card-cut relative flex h-full flex-col overflow-hidden border border-white/5 bg-navy-light transition-all duration-200 group-hover:-translate-y-1 group-hover:border-electric/30 group-hover:shadow-lg group-hover:shadow-electric/5 ${isLarge ? 'min-h-[400px]' : 'min-h-[180px]'}`}>
                      {/* Volt corner accent for large cards */}
                      {isLarge && (
                        <div className="absolute right-0 top-0 z-20">
                          <div className="h-12 w-12 overflow-hidden">
                            <div className="absolute -right-6 -top-6 h-12 w-12 rotate-45 bg-volt/80 transition-all duration-200 group-hover:bg-volt" />
                          </div>
                        </div>
                      )}

                      {/* Background image for large cards */}
                      {isLarge && (
                        <div className="absolute inset-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy-light/80 to-transparent" />
                        </div>
                      )}

                      <div className="relative z-10 flex flex-1 flex-col justify-end p-6">
                        <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 group-hover:scale-110 ${isLarge ? 'bg-electric/10 group-hover:bg-electric/20' : 'bg-electric/10 group-hover:bg-volt/20'}`}>
                          <Icon className={`h-5 w-5 transition-colors duration-200 ${isLarge ? 'text-electric' : 'text-electric group-hover:text-volt'}`} />
                        </div>
                        <h3 className="mb-1.5 font-heading text-lg font-semibold text-white">
                          {service.title}
                        </h3>
                        <p className={`text-sm leading-relaxed text-slate-400 ${isLarge ? '' : 'line-clamp-2'}`}>
                          {service.description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-volt transition-colors duration-200 group-hover:text-volt">
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
      <div className="divider-electric" />
    </>
  )
}
