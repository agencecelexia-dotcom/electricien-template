'use client'

import { Calendar, Briefcase, Star, Clock } from 'lucide-react'
import { Counter } from '@/components/ui/counter'
import { STATS } from '@/lib/constants'

const iconMap = {
  Calendar,
  Briefcase,
  Star,
  Clock,
}

export function TrustBar() {
  return (
    <section className="relative bg-gradient-to-r from-navy-dark via-navy to-navy-dark py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = iconMap[stat.icon]
            return (
              <div key={stat.label} className="text-center">
                <div className="mb-3 flex justify-center">
                  <Icon className="h-6 w-6 text-electric" />
                </div>
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
