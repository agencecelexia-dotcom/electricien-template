'use client'

import { useEffect, useState, useCallback } from 'react'
import {
  Mail,
  Clock,
  FileText,
  Phone,
  MapPin,
  AlertTriangle,
  Calendar,
  ChevronDown,
  ChevronUp,
  Trash2,
  MessageSquare,
  RefreshCw,
  Inbox,
  Loader2,
  X,
  StickyNote,
} from 'lucide-react'

interface Submission {
  id: string
  type: 'contact' | 'devis'
  nom: string
  email: string
  telephone: string
  message: string
  service?: string
  urgence?: string
  adresse?: string
  dateSouhaitee?: string
  statut: string
  notes?: string
  createdAt: string
  updatedAt: string
}

const STATUTS = ['Nouveau', 'Contacté', 'En cours', 'Converti'] as const

const statutColors: Record<string, string> = {
  Nouveau: 'bg-blue-100 text-blue-700 ring-blue-600/20',
  Contacté: 'bg-amber-100 text-amber-700 ring-amber-600/20',
  'En cours': 'bg-purple-100 text-purple-700 ring-purple-600/20',
  Converti: 'bg-emerald-100 text-emerald-700 ring-emerald-600/20',
}

const urgenceLabels: Record<string, { label: string; color: string }> = {
  normal: { label: 'Normal', color: 'text-green-600' },
  urgent: { label: 'Urgent', color: 'text-amber-600' },
  'tres-urgent': { label: 'Très urgent', color: 'text-red-600' },
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ring-1 ring-inset ${statutColors[status] || 'bg-slate-100 text-slate-700 ring-slate-600/20'}`}
    >
      {status}
    </span>
  )
}

function TypeBadge({ type }: { type: string }) {
  return type === 'devis' ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-electric/10 text-electric">
      <FileText className="w-3 h-3" />
      Devis
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
      <MessageSquare className="w-3 h-3" />
      Contact
    </span>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatDateShort(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
  })
}

export function DashboardTab() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [notesEdit, setNotesEdit] = useState<{ id: string; value: string } | null>(null)

  const fetchSubmissions = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/submissions')
      if (res.ok) {
        const data = await res.json()
        setSubmissions(data)
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSubmissions()
  }, [fetchSubmissions])

  async function updateStatus(id: string, statut: string) {
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update-status', id, statut }),
      })
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === id ? { ...s, statut, updatedAt: new Date().toISOString() } : s))
        )
      }
    } catch {
      // silently fail
    }
  }

  async function saveNotes(id: string, notes: string) {
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'update-status', id, notes }),
      })
      if (res.ok) {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === id ? { ...s, notes, updatedAt: new Date().toISOString() } : s))
        )
        setNotesEdit(null)
      }
    } catch {
      // silently fail
    }
  }

  async function deleteSubmission(id: string) {
    if (!confirm('Supprimer cette soumission ?')) return
    try {
      const res = await fetch('/api/admin/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', id }),
      })
      if (res.ok) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id))
        if (expandedId === id) setExpandedId(null)
      }
    } catch {
      // silently fail
    }
  }

  const filtered = submissions.filter((s) => {
    if (filter !== 'all' && s.statut !== filter) return false
    if (typeFilter !== 'all' && s.type !== typeFilter) return false
    return true
  })

  const counts = {
    total: submissions.length,
    nouveau: submissions.filter((s) => s.statut === 'Nouveau').length,
    contact: submissions.filter((s) => s.type === 'contact').length,
    devis: submissions.filter((s) => s.type === 'devis').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord</h1>
          <p className="text-slate-500 mt-1">Gérez vos demandes de contact et devis</p>
        </div>
        <button
          onClick={fetchSubmissions}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Actualiser
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{counts.total}</p>
            </div>
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <Inbox className="w-5 h-5 text-slate-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-blue-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600">Nouveaux</p>
              <p className="text-2xl font-bold text-blue-700 mt-1">{counts.nouveau}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Contacts</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{counts.contact}</p>
            </div>
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-slate-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Devis</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{counts.devis}</p>
            </div>
            <div className="w-10 h-10 bg-electric/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-electric" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
          {['all', ...STATUTS].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === s ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {s === 'all' ? 'Tous' : s}
              {s !== 'all' && (
                <span className="ml-1 opacity-70">
                  ({submissions.filter((sub) => sub.statut === s).length})
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
          {(['all', 'contact', 'devis'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                typeFilter === t ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {t === 'all' ? 'Tous types' : t === 'contact' ? 'Contact' : 'Devis'}
            </button>
          ))}
        </div>
      </div>

      {/* Submissions List */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg font-semibold text-slate-900">
              Soumissions
            </h2>
            <span className="text-sm text-slate-400">({filtered.length})</span>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400">
            <Inbox className="w-12 h-12 mb-3" />
            <p className="text-sm">
              {submissions.length === 0
                ? 'Aucune soumission pour le moment'
                : 'Aucune soumission ne correspond aux filtres'}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filtered.map((sub) => {
              const isExpanded = expandedId === sub.id
              return (
                <div key={sub.id}>
                  {/* Row */}
                  <div
                    className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-slate-50 transition-colors ${
                      isExpanded ? 'bg-slate-50' : ''
                    } ${sub.statut === 'Nouveau' ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}`}
                    onClick={() => setExpandedId(isExpanded ? null : sub.id)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-slate-900">{sub.nom}</span>
                        <TypeBadge type={sub.type} />
                        <StatusBadge status={sub.statut} />
                        {sub.urgence && urgenceLabels[sub.urgence] && sub.urgence !== 'normal' && (
                          <span className={`inline-flex items-center gap-1 text-xs font-medium ${urgenceLabels[sub.urgence].color}`}>
                            <AlertTriangle className="w-3 h-3" />
                            {urgenceLabels[sub.urgence].label}
                          </span>
                        )}
                        {sub.notes && (
                          <StickyNote className="w-3.5 h-3.5 text-amber-400" />
                        )}
                      </div>
                      <p className="text-sm text-slate-500 truncate mt-0.5">
                        {sub.message.slice(0, 80)}{sub.message.length > 80 ? '...' : ''}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-slate-400 hidden sm:block">{formatDateShort(sub.createdAt)}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Detail */}
                  {isExpanded && (
                    <div className="px-4 pb-4 bg-slate-50 border-l-4 border-l-transparent">
                      <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
                        {/* Contact Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                            <a href={`mailto:${sub.email}`} className="text-electric hover:underline truncate">
                              {sub.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                            <a href={`tel:${sub.telephone}`} className="text-electric hover:underline">
                              {sub.telephone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                            {formatDate(sub.createdAt)}
                          </div>
                        </div>

                        {/* Devis-specific info */}
                        {sub.type === 'devis' && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
                            {sub.service && (
                              <div className="text-sm">
                                <span className="text-slate-400">Service :</span>{' '}
                                <span className="font-medium text-slate-700">{sub.service}</span>
                              </div>
                            )}
                            {sub.urgence && urgenceLabels[sub.urgence] && (
                              <div className="text-sm">
                                <span className="text-slate-400">Urgence :</span>{' '}
                                <span className={`font-medium ${urgenceLabels[sub.urgence].color}`}>
                                  {urgenceLabels[sub.urgence].label}
                                </span>
                              </div>
                            )}
                            {sub.dateSouhaitee && (
                              <div className="text-sm">
                                <span className="text-slate-400">Date souhaitée :</span>{' '}
                                <span className="font-medium text-slate-700">{sub.dateSouhaitee}</span>
                              </div>
                            )}
                            {sub.adresse && (
                              <div className="flex items-start gap-2 text-sm sm:col-span-2 lg:col-span-3">
                                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                <span className="text-slate-700">{sub.adresse}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Message */}
                        <div className="pt-2 border-t border-slate-100">
                          <p className="text-xs font-medium text-slate-400 mb-1.5">Message</p>
                          <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{sub.message}</p>
                        </div>

                        {/* Notes */}
                        <div className="pt-2 border-t border-slate-100">
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-xs font-medium text-slate-400">Notes internes</p>
                            {notesEdit?.id !== sub.id && (
                              <button
                                onClick={() => setNotesEdit({ id: sub.id, value: sub.notes || '' })}
                                className="text-xs text-electric hover:underline"
                              >
                                {sub.notes ? 'Modifier' : 'Ajouter une note'}
                              </button>
                            )}
                          </div>
                          {notesEdit?.id === sub.id ? (
                            <div className="space-y-2">
                              <textarea
                                value={notesEdit.value}
                                onChange={(e) => setNotesEdit({ ...notesEdit, value: e.target.value })}
                                rows={3}
                                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-electric/20 focus:border-electric outline-none resize-none"
                                placeholder="Ajouter une note sur cette demande..."
                              />
                              <div className="flex gap-2">
                                <button
                                  onClick={() => saveNotes(sub.id, notesEdit.value)}
                                  className="px-3 py-1.5 bg-electric text-white text-xs font-medium rounded-lg hover:bg-electric/90 transition-colors"
                                >
                                  Enregistrer
                                </button>
                                <button
                                  onClick={() => setNotesEdit(null)}
                                  className="px-3 py-1.5 text-slate-500 text-xs font-medium rounded-lg hover:bg-slate-100 transition-colors"
                                >
                                  Annuler
                                </button>
                              </div>
                            </div>
                          ) : sub.notes ? (
                            <p className="text-sm text-slate-600 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 whitespace-pre-wrap">
                              {sub.notes}
                            </p>
                          ) : (
                            <p className="text-sm text-slate-400 italic">Aucune note</p>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-medium text-slate-400 mr-1">Statut :</span>
                          {STATUTS.map((s) => (
                            <button
                              key={s}
                              onClick={() => updateStatus(sub.id, s)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                sub.statut === s
                                  ? 'bg-slate-900 text-white shadow-sm'
                                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                          <div className="flex-1" />
                          <a
                            href={`mailto:${sub.email}?subject=Re: Votre demande - ÉlectroPro`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-electric text-white text-xs font-medium rounded-lg hover:bg-electric/90 transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            Répondre par email
                          </a>
                          <a
                            href={`tel:${sub.telephone}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 text-white text-xs font-medium rounded-lg hover:bg-emerald-600 transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            Appeler
                          </a>
                          <button
                            onClick={() => deleteSubmission(sub.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-red-600 text-xs font-medium rounded-lg hover:bg-red-50 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
