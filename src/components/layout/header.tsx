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
          'sticky top-0 z-40 transition-all duration-200',
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-white/80 backdrop-blur-sm'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric text-white transition-shadow duration-200 group-hover:shadow-md group-hover:shadow-electric/20">
              <Zap className="h-6 w-6" />
            </div>
            <span className="font-heading text-xl font-bold text-slate-900">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="cursor-pointer py-1 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-electric"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-electric"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <Button href="/devis" variant="primary" size="sm">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className="cursor-pointer p-2 text-slate-700 transition-colors duration-200 hover:text-electric lg:hidden"
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
