import Link from 'next/link'
import { Zap, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { COMPANY, NAV_ITEMS, SERVICES } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="relative bg-navy">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <div className="group mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric transition-shadow duration-200 group-hover:shadow-md group-hover:shadow-electric/30">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading text-xl font-bold text-white">{COMPANY.name}</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              {COMPANY.tagline}
            </p>
            <Button
              href="/devis"
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="h-4 w-4" />}
            >
              Devis Gratuit
            </Button>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-electric-light cursor-pointer"
              >
                <Phone className="h-4 w-4 text-electric" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-electric-light cursor-pointer"
              >
                <Mail className="h-4 w-4 text-electric" />
                {COMPANY.email}
              </a>
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-electric" />
                {COMPANY.address}
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <nav className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-electric-light cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/devis"
                className="block text-sm font-medium text-electric-light transition-colors duration-200 hover:brightness-110 cursor-pointer"
              >
                Devis Gratuit
              </Link>
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <nav className="space-y-2.5">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-sm text-slate-400 transition-colors duration-200 hover:text-electric-light cursor-pointer"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 space-y-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {COMPANY.name} &mdash; SIRET 123 456 789 00012
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <Link href="/mentions-legales" className="transition-colors duration-200 hover:text-slate-300 cursor-pointer">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="transition-colors duration-200 hover:text-slate-300 cursor-pointer">
                Politique de confidentialité
              </Link>
              <Link
                href="/admin/dashboard"
                className="opacity-40 transition-opacity duration-200 hover:opacity-100 cursor-pointer"
              >
                Admin
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500">
            Site conçu par{' '}
            <a
              href="https://agencecelexia.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-light transition-colors duration-200 hover:text-electric cursor-pointer"
            >
              Agence Celexia
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
