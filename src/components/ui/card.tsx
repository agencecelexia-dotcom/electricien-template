'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  variant?: 'default' | 'glass' | 'dark'
  hover?: boolean
  electricBorder?: boolean
  children: React.ReactNode
  className?: string
}

export function Card({ className, variant = 'default', hover = true, electricBorder = false, children }: CardProps) {
  const variantClasses = {
    default: 'bg-white border border-slate-200 shadow-sm',
    glass: 'glass',
    dark: 'bg-navy-light border border-electric/10',
  }

  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'rounded-2xl p-6',
        variantClasses[variant],
        electricBorder && 'electric-border',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
