'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Zap,
  LayoutDashboard,
  FileText,
  Image,
  Wrench,
  Star,
  FolderOpen,
  LogOut,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { href: '/admin/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
  { href: '/admin/dashboard?tab=contenu', label: 'Contenu', icon: FileText },
  { href: '/admin/dashboard?tab=photos', label: 'Photos', icon: Image },
  { href: '/admin/dashboard?tab=services', label: 'Services', icon: Wrench },
  { href: '/admin/dashboard?tab=temoignages', label: 'Témoignages', icon: Star },
  { href: '/admin/dashboard?tab=projets', label: 'Projets', icon: FolderOpen },
]

function getActiveTab(pathname: string, search: string): string {
  if (pathname !== '/admin/dashboard') return ''
  const params = new URLSearchParams(search)
  return params.get('tab') || 'dashboard'
}

function getTabFromHref(href: string): string {
  if (!href.includes('?tab=')) return 'dashboard'
  return href.split('?tab=')[1]
}

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [currentTab, setCurrentTab] = useState(() => {
    if (typeof window !== 'undefined') {
      return getActiveTab(pathname, window.location.search)
    }
    return 'dashboard'
  })

  async function handleLogout() {
    await fetch('/api/admin/login', { method: 'DELETE' })
    router.push('/')
  }

  function handleNavClick(href: string) {
    const tab = getTabFromHref(href)
    setCurrentTab(tab)
    setMobileOpen(false)
  }

  function isActive(href: string): boolean {
    const tab = getTabFromHref(href)
    return currentTab === tab
  }

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <Link
          href="/admin/dashboard"
          onClick={() => handleNavClick('/admin/dashboard')}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-white font-bold text-lg">ÉlectroPro</span>
            <span className="block text-slate-400 text-xs">Administration</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile header bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold">ÉlectroPro</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-2 hover:bg-slate-800 rounded-lg"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`lg:hidden fixed top-14 left-0 bottom-0 z-40 w-64 bg-slate-900 flex flex-col transition-transform duration-200 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 bg-slate-900 flex-col z-30">
        {sidebarContent}
      </aside>

      {/* Mobile spacer for fixed header */}
      <div className="lg:hidden h-14" />
    </>
  )
}
