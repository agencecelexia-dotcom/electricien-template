'use client'

import { useCounter } from '@/hooks/use-counter'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface CounterProps {
  end: number
  suffix?: string
  label: string
  className?: string
}

export function Counter({ end, suffix = '', label, className }: CounterProps) {
  const { ref, isVisible } = useScrollAnimation(0.3)
  const count = useCounter(end, 2000, 0, isVisible)

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="font-heading text-5xl font-extrabold text-navy md:text-6xl">
        {count}
        <span className="text-electric">{suffix}</span>
      </div>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  )
}
