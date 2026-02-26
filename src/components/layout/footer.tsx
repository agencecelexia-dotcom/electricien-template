import Link from 'next/link'
import { Zap, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import { COMPANY, NAV_ITEMS, SERVICES } from '@/lib/constants'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  return (
    <footer className="border-t border-electric/10 bg-navy">
      {/* Electric line accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-electric to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">{COMPANY.name}</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              {COMPANY.tagline}. Électricien certifié à Paris et Île-de-France.
              Installation, rénovation, dépannage 24/7.
            </p>
            <div className="flex flex-wrap gap-2">
              {COMPANY.certifications.map((cert) => (
                <Badge key={cert} variant="electric">{cert}</Badge>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <nav className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-400 transition-colors hover:text-amber"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/devis"
                className="block text-sm font-medium text-amber transition-colors hover:text-amber-light"
              >
                Devis Gratuit
              </Link>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Nos Services
            </h3>
            <nav className="space-y-3">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block text-sm text-slate-400 transition-colors hover:text-amber"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="space-y-4">
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-amber">
                <Phone className="h-4 w-4 shrink-0 text-electric" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-amber">
                <Mail className="h-4 w-4 shrink-0 text-electric" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 shrink-0 text-electric mt-0.5" />
                {COMPANY.address}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Clock className="h-4 w-4 shrink-0 text-electric" />
                {COMPANY.hours}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, href: COMPANY.socialLinks.facebook, label: 'Facebook' },
                { icon: Instagram, href: COMPANY.socialLinks.instagram, label: 'Instagram' },
                { icon: Linkedin, href: COMPANY.socialLinks.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-all hover:bg-electric hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-slate-300">Mentions légales</Link>
            <Link href="#" className="hover:text-slate-300">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
