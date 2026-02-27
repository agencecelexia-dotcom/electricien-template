import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Zap } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-electric/10">
            <Zap className="h-10 w-10 text-electric" />
          </div>
        </div>
        <h1 className="mb-2 font-heading text-6xl font-bold text-electric">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">Page introuvable</h2>
        <p className="mb-8 text-slate-600">
          Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/" variant="primary" icon={<ArrowLeft className="h-5 w-5" />}>
          Retour à l&apos;accueil
        </Button>
      </div>
    </section>
  )
}
