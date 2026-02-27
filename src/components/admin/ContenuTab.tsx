'use client'

import { useState } from 'react'
import { clientConfig } from '@/config/client.config'
import { Save, ChevronDown, ChevronRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

type ConfigValues = Record<string, string>

interface Section {
  title: string
  fields: { key: string; label: string; type?: 'text' | 'textarea' | 'password' }[]
}

const sections: Section[] = [
  {
    title: 'Identité',
    fields: [
      { key: 'NOM_ENTREPRISE', label: 'Nom de l\'entreprise' },
      { key: 'NOM_LEGAL', label: 'Nom légal' },
      { key: 'SIRET', label: 'SIRET' },
      { key: 'FONDATEUR', label: 'Fondateur' },
      { key: 'METIER', label: 'Métier' },
      { key: 'GENRE_DIRIGEANT', label: 'Genre du dirigeant (M/F)' },
      { key: 'ANNEES_EXPERIENCE', label: 'Années d\'expérience' },
      { key: 'ANNEE_CREATION', label: 'Année de création' },
    ],
  },
  {
    title: 'Contact',
    fields: [
      { key: 'TELEPHONE', label: 'Téléphone' },
      { key: 'TELEPHONE_HREF', label: 'Téléphone (format href)' },
      { key: 'EMAIL', label: 'Email' },
      { key: 'ADRESSE', label: 'Adresse' },
      { key: 'VILLE', label: 'Ville' },
      { key: 'CODE_POSTAL', label: 'Code postal' },
      { key: 'DEPARTEMENT', label: 'Département' },
      { key: 'REGION', label: 'Région' },
      { key: 'ZONE_INTERVENTION', label: 'Zone d\'intervention' },
      { key: 'ZONE_KM', label: 'Rayon d\'intervention (km)' },
      { key: 'WHATSAPP', label: 'WhatsApp' },
    ],
  },
  {
    title: 'Horaires',
    fields: [
      { key: 'HORAIRES_SEMAINE', label: 'Horaires semaine' },
      { key: 'HORAIRES_SAMEDI', label: 'Horaires samedi' },
      { key: 'HORAIRES_DIMANCHE', label: 'Horaires dimanche' },
      { key: 'URGENCE', label: 'Urgences' },
    ],
  },
  {
    title: 'Réseaux sociaux',
    fields: [
      { key: 'FACEBOOK', label: 'Facebook' },
      { key: 'INSTAGRAM', label: 'Instagram' },
      { key: 'LINKEDIN', label: 'LinkedIn' },
      { key: 'GOOGLE_MAPS', label: 'Google Maps' },
      { key: 'GOOGLE_REVIEWS', label: 'Google Reviews' },
    ],
  },
  {
    title: 'SEO',
    fields: [
      { key: 'DOMAINE', label: 'Domaine' },
      { key: 'META_TITLE_ACCUEIL', label: 'Meta title (accueil)' },
      { key: 'META_DESC_ACCUEIL', label: 'Meta description', type: 'textarea' },
      { key: 'META_KEYWORDS', label: 'Meta keywords' },
      { key: 'SCHEMA_TYPE', label: 'Schema.org type' },
    ],
  },
  {
    title: 'Contenu',
    fields: [
      { key: 'SLOGAN', label: 'Slogan' },
      { key: 'HERO_TITRE', label: 'Titre héro' },
      { key: 'DESCRIPTION_ENTREPRISE', label: 'Description entreprise', type: 'textarea' },
      { key: 'DESCRIPTION_FOOTER', label: 'Description footer', type: 'textarea' },
      { key: 'DESCRIPTION_A_PROPOS', label: 'Description à propos', type: 'textarea' },
    ],
  },
  {
    title: 'Chiffres',
    fields: [
      { key: 'NOMBRE_INTERVENTIONS', label: 'Nombre d\'interventions' },
      { key: 'NOTE_GOOGLE', label: 'Note Google' },
      { key: 'NOMBRE_AVIS', label: 'Nombre d\'avis' },
      { key: 'DELAI_INTERVENTION', label: 'Délai d\'intervention (min)' },
      { key: 'TAUX_SATISFACTION', label: 'Taux de satisfaction (%)' },
    ],
  },
  {
    title: 'Intégrations',
    fields: [
      { key: 'N8N_WEBHOOK', label: 'Webhook n8n' },
      { key: 'ADMIN_PASSWORD', label: 'Mot de passe admin', type: 'password' },
    ],
  },
]

export function ContenuTab() {
  const [values, setValues] = useState<ConfigValues>(() => {
    const initial: ConfigValues = {}
    for (const key in clientConfig) {
      initial[key] = clientConfig[key as keyof typeof clientConfig]
    }
    return initial
  })
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    sections.forEach((s) => {
      initial[s.title] = true
    })
    return initial
  })
  const [saving, setSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function toggleSection(title: string) {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  function handleChange(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }))
    setSaveStatus('idle')
  }

  async function handleSave() {
    setSaving(true)
    setSaveStatus('idle')

    try {
      const res = await fetch('/api/admin/save-client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (res.ok) {
        setSaveStatus('success')
        setTimeout(() => setSaveStatus('idle'), 3000)
      } else {
        setSaveStatus('error')
      }
    } catch {
      setSaveStatus('error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Contenu du site</h1>
          <p className="text-slate-500 mt-1">Modifiez les informations affichées sur votre site</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {saving ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>

      {/* Save status */}
      {saveStatus === 'success' && (
        <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm">
          <CheckCircle className="w-4 h-4" />
          <span>Modifications enregistrées avec succès</span>
        </div>
      )}
      {saveStatus === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span>Erreur lors de l&apos;enregistrement</span>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-xl border border-slate-200">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
              {openSections[section.title] ? (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-slate-400" />
              )}
            </button>

            {openSections[section.title] && (
              <div className="px-5 pb-5 space-y-4 border-t border-slate-100 pt-4">
                {section.fields.map((field) => (
                  <div key={field.key}>
                    <label
                      htmlFor={field.key}
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      {field.label}
                      <span className="ml-2 text-xs text-slate-400 font-normal">{field.key}</span>
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.key}
                        value={values[field.key] || ''}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        rows={3}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y text-sm"
                      />
                    ) : (
                      <input
                        id={field.key}
                        type={field.type === 'password' ? 'password' : 'text'}
                        value={values[field.key] || ''}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom save button */}
      <div className="flex justify-end pt-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {saving ? 'Enregistrement...' : 'Enregistrer les modifications'}
        </button>
      </div>
    </div>
  )
}
