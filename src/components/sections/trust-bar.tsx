'use client'

import { Counter } from '@/components/ui/counter'
import { STATS } from '@/lib/constants'

export function TrustBar() {
  return (
    <section className="noise-overlay relative bg-navy-dark py-16">
      {/* Top divider */}
      <div className="divider-electric absolute left-0 right-0 top-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:justify-between">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-baseline gap-3 text-center">
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                numberClassName="text-6xl text-volt md:text-7xl"
                suffixClassName="text-volt"
                labelClassName="text-slate-400"
              />
              {i < STATS.length - 1 && (
                <div className="hidden h-12 w-px bg-volt/30 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="divider-electric absolute bottom-0 left-0 right-0" />
    </section>
  )
}
