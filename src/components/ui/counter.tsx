'use client'

import { useCounter } from '@/hooks/use-counter'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface CounterProps {
  end: number
  suffix?: string
  label: string
  className?: string
  numberClassName?: string
  suffixClassName?: string
  labelClassName?: string
}

export function Counter({ end, suffix = '', label, className, numberClassName, suffixClassName, labelClassName }: CounterProps) {
  const { ref, isVisible } = useScrollAnimation(0.3)
  const count = useCounter(end, 2000, 0, isVisible)

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className={cn('font-heading text-5xl font-extrabold text-electric md:text-6xl', numberClassName)}>
        {count}
        <span className={cn('text-electric-dark', suffixClassName)}>{suffix}</span>
      </div>
      <p className={cn('mt-1 text-sm text-slate-600', labelClassName)}>{label}</p>
    </div>
  )
}
