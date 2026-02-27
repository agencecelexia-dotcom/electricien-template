'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Phone, FileText, Zap } from 'lucide-react'
import { COMPANY, NAV_ITEMS } from '@/lib/constants'
import { Button } from '@/components/ui/button'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const bottomVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + NAV_ITEMS.length * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="noise-overlay fixed inset-0 z-50 bg-navy"
        >
          {/* Decorative circuit pattern background */}
          <div className="circuit-pattern absolute inset-0 opacity-40" />

          {/* Ambient volt glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-volt/5 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-electric/8 blur-[80px]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 cursor-pointer p-2 text-white transition-colors duration-200 hover:text-volt"
            aria-label="Fermer le menu"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-2 px-6 pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-white">{COMPANY.name}</span>
          </div>

          {/* Nav Links */}
          <nav className="relative z-10 mt-12 px-6">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group relative block border-b border-white/10 py-4 pl-4 text-lg font-medium text-white/90 transition-colors duration-200 hover:text-white"
                >
                  {/* Volt accent line on left — visible on hover */}
                  <span className="absolute left-0 top-1/2 h-0 w-0.5 -translate-y-1/2 bg-volt transition-all duration-200 group-hover:h-6" />
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <motion.div
            variants={bottomVariants}
            initial="hidden"
            animate="visible"
            className="absolute bottom-0 left-0 right-0 z-10 space-y-3 border-t border-volt/20 bg-navy-dark p-6"
          >
            {/* "We're available" indicator */}
            <div className="mb-3 flex items-center justify-center gap-2 text-xs text-slate-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-volt" />
              </span>
              Disponible maintenant
            </div>
            <Button
              href={COMPANY.phoneHref}
              variant="secondary"
              size="lg"
              className="w-full"
              icon={<Phone className="h-5 w-5" />}
            >
              {COMPANY.phone}
            </Button>
            <Button
              href="/devis"
              variant="primary"
              size="lg"
              className="w-full border border-volt/20"
              icon={<FileText className="h-5 w-5" />}
            >
              Devis Gratuit
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
