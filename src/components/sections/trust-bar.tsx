'use client'

import { Counter } from '@/components/ui/counter'
import { STATS } from '@/lib/constants'

export function TrustBar() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:justify-between">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-baseline gap-3 text-center">
              <Counter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                labelClassName="text-slate-600"
              />
              {i < STATS.length - 1 && (
                <div className="hidden h-12 w-px border-r border-slate-200 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
