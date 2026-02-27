'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Zap, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY, NAV_ITEMS } from '@/lib/constants'
import { MobileNav } from './mobile-nav'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo with subtle glow */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric transition-shadow group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-white">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav with animated underline */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-electric transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-amber"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <Button href="/devis" variant="secondary" size="sm">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className="cursor-pointer p-2 text-white transition-colors duration-200 hover:text-electric lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  )
}
