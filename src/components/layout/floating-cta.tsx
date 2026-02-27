'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 lg:hidden"
        >
          {/* WhatsApp */}
          <motion.a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.a>

          {/* Phone */}
          <motion.a
            href={COMPANY.phoneHref}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-electric text-white shadow-lg shadow-electric/30"
            aria-label="Appeler"
          >
            <Phone className="h-7 w-7" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
