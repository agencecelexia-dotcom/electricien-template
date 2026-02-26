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

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white"
            aria-label="Fermer le menu"
          >
            <X className="h-7 w-7" />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 px-6 pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">{COMPANY.name}</span>
          </div>

          {/* Nav Links */}
          <nav className="mt-12 px-6">
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-white/10 py-4 text-lg font-medium text-white/90 transition-colors hover:text-amber"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bottom CTAs */}
          <div className="absolute bottom-0 left-0 right-0 space-y-3 border-t border-white/10 bg-navy-dark p-6">
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
              className="w-full"
              icon={<FileText className="h-5 w-5" />}
            >
              Devis Gratuit
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
