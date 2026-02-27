import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-sm font-medium text-slate-300">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={cn(
            'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white',
            'transition-all duration-200',
            'placeholder:text-slate-500',
            'focus:border-volt/50 focus:ring-2 focus:ring-volt/20 focus:outline-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-sm font-medium text-slate-300">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={cn(
            'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white',
            'transition-all duration-200 resize-none',
            'placeholder:text-slate-500',
            'focus:border-volt/50 focus:ring-2 focus:ring-volt/20 focus:outline-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor={id} className="block text-sm font-medium text-slate-300">
          {label}
        </label>
        <select
          id={id}
          ref={ref}
          className={cn(
            'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white',
            'transition-all duration-200',
            'focus:border-volt/50 focus:ring-2 focus:ring-volt/20 focus:outline-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        >
          <option value="" className="bg-navy text-slate-400">Sélectionnez...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-navy text-white">
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
