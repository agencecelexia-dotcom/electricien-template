'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'rounded-2xl border transition-all duration-200',
            openIndex === index
              ? 'border-volt/30 bg-volt/5 shadow-sm shadow-volt/5'
              : 'border-white/10 bg-white/5 hover:border-volt/20'
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-white">{item.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 shrink-0 text-volt" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto' as const, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' as const }}
                className="overflow-hidden"
              >
                <div className="border-t border-volt/10 px-5 pb-5 pt-4">
                  <div className="flex gap-3">
                    <div className="mt-1 h-full w-0.5 shrink-0 rounded-full bg-volt" />
                    <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
