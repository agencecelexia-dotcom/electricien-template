'use client'

import { cn } from '@/lib/utils'

interface FilterBarProps {
  categories: string[]
  activeCategory: string
  onFilterChange: (category: string) => void
}

export function FilterBar({ categories, activeCategory, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onFilterChange('all')}
        className={cn(
          'cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all',
          activeCategory === 'all'
            ? 'bg-electric text-white'
            : 'border border-slate-300 text-slate-600 hover:border-electric hover:text-electric'
        )}
      >
        Tous
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilterChange(cat)}
          className={cn(
            'cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all',
            activeCategory === cat
              ? 'bg-electric text-white'
              : 'border border-slate-300 text-slate-600 hover:border-electric hover:text-electric'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
