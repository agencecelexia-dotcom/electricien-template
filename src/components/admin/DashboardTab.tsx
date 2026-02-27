'use client'

import { useEffect, useState } from 'react'
import { Eye, Users, MousePointerClick, Mail, Clock } from 'lucide-react'

interface Submission {
  id: string
  name: string
  email: string
  phone: string
  service: string
  date: string
  status: string
}

const statsCards = [
  { label: 'Vues totales', value: '3 241', icon: Eye, color: 'bg-blue-500' },
  { label: 'Visiteurs uniques', value: '2 156', icon: Users, color: 'bg-emerald-500' },
  { label: 'Clics CTA', value: '178', icon: MousePointerClick, color: 'bg-amber-500' },
  { label: 'Soumissions', value: '54', icon: Mail, color: 'bg-purple-500' },
]

const mockSubmissions: Submission[] = [
  { id: '1', name: 'Marie Dupont', email: 'marie@email.fr', phone: '06 12 34 56 78', service: 'Installation', date: '2026-02-27', status: 'Nouveau' },
  { id: '2', name: 'Pierre Martin', email: 'pierre@email.fr', phone: '06 98 76 54 32', service: 'Dépannage', date: '2026-02-26', status: 'Traité' },
  { id: '3', name: 'Sophie Laurent', email: 'sophie@email.fr', phone: '06 11 22 33 44', service: 'Rénovation', date: '2026-02-25', status: 'En cours' },
  { id: '4', name: 'Jean Moreau', email: 'jean@email.fr', phone: '06 55 66 77 88', service: 'Domotique', date: '2026-02-24', status: 'Nouveau' },
  { id: '5', name: 'Claire Bernard', email: 'claire@email.fr', phone: '06 44 33 22 11', service: 'Éclairage', date: '2026-02-23', status: 'Traité' },
]

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'Nouveau': 'bg-blue-100 text-blue-700',
    'En cours': 'bg-amber-100 text-amber-700',
    'Traité': 'bg-emerald-100 text-emerald-700',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  )
}

export function DashboardTab() {
  const [submissions, setSubmissions] = useState<Submission[]>(mockSubmissions)

  useEffect(() => {
    // Attempt to load real submissions from storage
    fetch('/api/admin/services?type=submissions')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSubmissions(data)
        }
      })
      .catch(() => {
        // Keep mock data on error
      })
  }, [])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tableau de bord</h1>
        <p className="text-slate-500 mt-1">Vue d&apos;ensemble de votre site</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg font-semibold text-slate-900">
              Soumissions récentes
            </h2>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Nom</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider hidden md:table-cell">Téléphone</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider hidden lg:table-cell">Service</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{sub.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{sub.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 hidden md:table-cell">{sub.phone}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 hidden lg:table-cell">{sub.service}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{sub.date}</td>
                  <td className="px-6 py-4"><StatusBadge status={sub.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
