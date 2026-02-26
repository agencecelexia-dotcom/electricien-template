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
      <div className="font-display text-4xl font-bold text-amber md:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-slate-300 md:text-base">{label}</p>
    </div>
  )
}
