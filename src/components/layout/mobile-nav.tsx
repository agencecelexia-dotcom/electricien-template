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
          className="fixed inset-0 z-50 bg-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 cursor-pointer p-2 text-slate-500 transition-colors duration-200 hover:text-slate-700"
            aria-label="Fermer le menu"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 px-6 pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-slate-900">{COMPANY.name}</span>
          </div>

          {/* Nav Links */}
          <nav className="mt-12 px-6">
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
                  className="block border-b border-slate-100 py-4 pl-4 text-lg font-medium text-slate-700 transition-colors duration-200 hover:text-electric"
                >
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
            className="absolute bottom-0 left-0 right-0 space-y-3 border-t border-slate-200 bg-slate-50 p-6"
          >
            <Button
              href={COMPANY.phoneHref}
              variant="outline"
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
              className="w-full"
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
