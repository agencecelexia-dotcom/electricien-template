'use client'

import { Counter } from '@/components/ui/counter'
import { STATS } from '@/lib/constants'

export function TrustBar() {
  return (
    <section className="relative bg-cream py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:justify-between">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-baseline gap-3 text-center">
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
              {i < STATS.length - 1 && (
                <div className="hidden h-8 w-px bg-electric/20 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
