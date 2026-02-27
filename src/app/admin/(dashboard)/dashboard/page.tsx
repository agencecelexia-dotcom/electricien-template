'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Loader2 } from 'lucide-react'
import { DashboardTab } from '@/components/admin/DashboardTab'
import { ContenuTab } from '@/components/admin/ContenuTab'
import { PhotosTab } from '@/components/admin/PhotosTab'
import { ServicesTab } from '@/components/admin/ServicesTab'
import { TemoignagesTab } from '@/components/admin/TemoignagesTab'
import { ProjetsTab } from '@/components/admin/ProjetsTab'

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
    </div>
  )
}

function DashboardContent() {
  const searchParams = useSearchParams()
  const tab = searchParams.get('tab') || 'dashboard'

  switch (tab) {
    case 'contenu':
      return <ContenuTab />
    case 'photos':
      return <PhotosTab />
    case 'services':
      return <ServicesTab />
    case 'temoignages':
      return <TemoignagesTab />
    case 'projets':
      return <ProjetsTab />
    default:
      return <DashboardTab />
  }
}

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DashboardContent />
    </Suspense>
  )
}
