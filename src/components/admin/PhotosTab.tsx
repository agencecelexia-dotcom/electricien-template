'use client'

import { useState } from 'react'
import { images } from '@/config/images'
import { Image as ImageIcon, Grid, List } from 'lucide-react'

interface ImageItem {
  key: string
  path: string
  category: string
}

function getAllImages(): ImageItem[] {
  const result: ImageItem[] = []

  // Heroes
  if (images.heroes && typeof images.heroes === 'object') {
    for (const [key, path] of Object.entries(images.heroes)) {
      result.push({ key, path: path as string, category: 'heroes' })
    }
  }

  // Services
  if (images.services && typeof images.services === 'object') {
    for (const [key, path] of Object.entries(images.services)) {
      result.push({ key, path: path as string, category: 'services' })
    }
  }

  // Réalisations
  if (images.realisations && typeof images.realisations === 'object') {
    for (const [key, path] of Object.entries(images.realisations)) {
      result.push({ key, path: path as string, category: 'realisations' })
    }
  }

  // Team
  if (images.team && typeof images.team === 'object') {
    for (const [key, path] of Object.entries(images.team)) {
      result.push({ key, path: path as string, category: 'team' })
    }
  }

  // OG
  if (images.og) {
    result.push({ key: 'og-image', path: images.og, category: 'general' })
  }

  return result
}

const categoryLabels: Record<string, string> = {
  heroes: 'Héros / Bannières',
  services: 'Services',
  realisations: 'Réalisations',
  team: 'Équipe',
  general: 'Général',
}

export function PhotosTab() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filterCategory, setFilterCategory] = useState<string>('all')

  const allImages = getAllImages()
  const categories = [...new Set(allImages.map((img) => img.category))]

  const filteredImages =
    filterCategory === 'all'
      ? allImages
      : allImages.filter((img) => img.category === filterCategory)

  // Group by category for display
  const grouped: Record<string, ImageItem[]> = {}
  for (const img of filteredImages) {
    if (!grouped[img.category]) grouped[img.category] = []
    grouped[img.category].push(img)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Galerie photos</h1>
          <p className="text-slate-500 mt-1">
            {allImages.length} images enregistrées
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {categoryLabels[cat] || cat}
              </option>
            ))}
          </select>

          {/* View toggle */}
          <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      {Object.entries(grouped).map(([category, imgs]) => (
        <div key={category} className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-800">
            {categoryLabels[category] || category}
          </h2>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {imgs.map((img) => (
                <div
                  key={img.path}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden group"
                >
                  <div className="aspect-video bg-slate-100 relative flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.path}
                      alt={img.key}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          const placeholder = document.createElement('div')
                          placeholder.className = 'flex flex-col items-center justify-center text-slate-400 absolute inset-0'
                          placeholder.innerHTML = '<svg class="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg><span class="text-xs">Image non disponible</span>'
                          parent.appendChild(placeholder)
                        }
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-slate-900 truncate">{img.key}</p>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{img.path}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
              {imgs.map((img) => (
                <div key={img.path} className="flex items-center gap-4 p-4">
                  <div className="w-16 h-12 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.path}
                      alt={img.key}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <ImageIcon className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">{img.key}</p>
                    <p className="text-xs text-slate-400 truncate">{img.path}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {categoryLabels[img.category] || img.category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {filteredImages.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          <ImageIcon className="w-12 h-12 mx-auto mb-3" />
          <p>Aucune image trouvée</p>
        </div>
      )}
    </div>
  )
}
