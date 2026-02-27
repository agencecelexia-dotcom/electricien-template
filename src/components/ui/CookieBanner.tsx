'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookie_consent', accepted ? 'accepted' : 'refused')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-4 shadow-lg sm:flex sm:items-center sm:gap-4">
            <p className="flex-1 text-sm text-slate-600">
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement.{' '}
              <Link href="/politique-confidentialite" className="text-electric underline">
                En savoir plus
              </Link>
            </p>
            <div className="mt-3 flex gap-2 sm:mt-0">
              <button
                onClick={() => handleConsent(false)}
                className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
              >
                Refuser
              </button>
              <button
                onClick={() => handleConsent(true)}
                className="cursor-pointer rounded-lg bg-electric px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-electric-dark"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
