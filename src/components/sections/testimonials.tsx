'use client'

import { Zap, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'

export function Testimonials() {
  return (
    <section className="noise-overlay bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header with rating */}
        <div className="mb-14 flex flex-col items-center gap-6 text-center md:flex-row md:items-end md:text-left">
          <div className="flex-1">
            <h2 className="font-heading text-4xl font-bold text-navy md:text-5xl">
              Ils nous font <span className="text-gradient-static">confiance.</span>
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Zap key={i} className="h-5 w-5 fill-amber text-amber" />
              ))}
            </div>
            <span className="mt-1 font-heading text-4xl font-extrabold text-navy">4.9<span className="text-sm font-normal text-slate-400">/5</span></span>
            <span className="text-xs text-slate-500">basé sur {TESTIMONIALS.length * 50}+ avis</span>
          </div>
        </div>

        {/* 3 testimonial cards visible */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-electric/20 hover:shadow-lg"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-electric/10 transition-colors duration-200 group-hover:text-electric/20" />

              {/* Rating - lightning bolts */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Zap key={i} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </div>

              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author with initials */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-electric-dark text-sm font-bold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>
                <Badge variant="electric" className="ml-auto">{testimonial.service}</Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 more */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.slice(3, 5).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-electric/20 hover:shadow-lg"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Zap key={i} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </div>

              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber to-amber-dark text-sm font-bold text-navy">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.location}</p>
                </div>
                <Badge variant="electric" className="ml-auto">{testimonial.service}</Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
