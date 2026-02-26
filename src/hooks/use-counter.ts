'use client'

import { useEffect, useState } from 'react'

export function useCounter(end: number, duration = 2000, start = 0, isActive = true) {
  const [count, setCount] = useState(start)

  useEffect(() => {
    if (!isActive) return

    let startTime: number | null = null
    let animationId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - start) + start))

      if (progress < 1) {
        animationId = requestAnimationFrame(step)
      }
    }

    animationId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationId)
  }, [end, duration, start, isActive])

  return count
}
