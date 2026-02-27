'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.05,
    },
  }),
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
}

export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const words = text.split(' ')

  return (
    <motion.span
      className={cn('inline-flex flex-wrap gap-x-[0.25em]', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={delay}
    >
      {words.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
