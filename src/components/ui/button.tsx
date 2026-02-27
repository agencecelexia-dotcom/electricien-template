'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

const variants = {
  primary: 'bg-electric hover:bg-electric-dark text-white shadow-lg hover:shadow-electric/25',
  secondary: 'bg-amber hover:bg-amber-dark text-navy font-semibold shadow-lg hover:shadow-amber/25',
  outline: 'border-2 border-electric text-electric hover:bg-electric hover:text-white',
  ghost: 'text-slate-500 hover:text-electric hover:bg-slate-50',
  emergency: 'bg-red-600 hover:bg-red-700 text-white shadow-lg animate-pulse-glow',
  cta: 'bg-gradient-to-r from-electric to-electric-dark text-white shadow-xl hover:shadow-electric/30',
  'outline-white': 'border-2 border-white/30 text-white hover:border-white hover:bg-white/10',
  glow: 'bg-electric text-white shadow-lg',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

interface ButtonProps {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  href?: string
  loading?: boolean
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  loading,
  icon,
  iconRight,
  children,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    (disabled || loading) && 'opacity-50 cursor-not-allowed',
    className
  )

  const content = (
    <>
      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : icon}
      {children}
      {iconRight}
    </>
  )

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
    >
      {content}
    </motion.button>
  )
}
