import { cn } from '@/lib/utils'

const variants = {
  electric: 'bg-electric/10 text-electric border-electric/20',
  amber: 'bg-amber/10 text-amber-dark border-amber/20',
  success: 'bg-green-50 text-green-700 border-green-200',
  outline: 'bg-transparent text-slate-500 border-slate-300',
  white: 'bg-white/10 text-white border-white/20',
}

interface BadgeProps {
  variant?: keyof typeof variants
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'electric', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
