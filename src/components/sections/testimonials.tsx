'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-800 md:text-4xl">
            Ce Que Disent Nos <span className="text-electric">Clients</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-electric" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Large Quote Icon */}
          <Quote className="absolute -top-4 left-0 h-20 w-20 text-electric/10 md:-left-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm md:p-12"
            >
              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-8 text-lg italic leading-relaxed text-slate-700 md:text-xl">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-electric/20">
                  <Image
                    src={TESTIMONIALS[current].image}
                    alt={TESTIMONIALS[current].name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{TESTIMONIALS[current].name}</p>
                  <p className="text-sm text-slate-500">{TESTIMONIALS[current].location}</p>
                </div>
                <Badge variant="electric">{TESTIMONIALS[current].service}</Badge>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={prev} className="rounded-full border border-slate-200 p-2 transition-colors hover:border-electric hover:text-electric" aria-label="Précédent">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-electric' : 'w-2 bg-slate-300'}`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="rounded-full border border-slate-200 p-2 transition-colors hover:border-electric hover:text-electric" aria-label="Suivant">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
