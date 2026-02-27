'use client'

import { usePathname } from 'next/navigation'
import { Header } from './header'
import { Footer } from './footer'
import { FloatingCTA } from './floating-cta'
import { LightningBackground } from '@/components/ui/lightning-background'

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <LightningBackground />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
