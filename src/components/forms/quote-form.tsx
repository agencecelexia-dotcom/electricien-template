'use client'

import { useActionState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { quoteFormSchema, type QuoteFormData } from '@/lib/validations'
import { submitQuoteForm } from '@/lib/actions'
import { Input, Textarea, Select } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SERVICES, COMPANY } from '@/lib/constants'
import { FileText, CheckCircle, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const urgencyOptions = [
  { value: 'normal', label: 'Normal - sous 1 semaine', color: 'border-green-200 bg-green-50 text-green-700' },
  { value: 'urgent', label: 'Urgent - sous 48h', color: 'border-amber-200 bg-amber-50 text-amber-700' },
  { value: 'tres-urgent', label: 'Très urgent - aujourd\'hui', color: 'border-red-200 bg-red-50 text-red-700' },
]

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [state, formAction, isPending] = useActionState(submitQuoteForm, null)
  const {
    register,
    formState: { errors },
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { urgency: 'normal' },
  })

  const selectedUrgency = watch('urgency')

  if (state?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-electric/20 bg-electric/5 p-8 text-center"
      >
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-electric" />
        <h3 className="mb-2 text-xl font-semibold text-slate-900">Demande envoyée !</h3>
        <p className="mb-4 text-slate-600">{state.message}</p>
        <div className="flex items-center justify-center gap-2 text-slate-600">
          <Phone className="h-5 w-5" />
          <span>Ou appelez-nous directement : </span>
          <a href={COMPANY.phoneHref} className="font-bold text-electric underline">
            {COMPANY.phone}
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className={cn('grid gap-5', !compact && 'md:grid-cols-2')}>
        <Input
          label="Nom complet *"
          id="quote-name"
          placeholder="Jean Dupont"
          error={errors.name?.message || (state && !state.success ? state.errors?.name?.[0] : undefined)}
          {...register('name')}
        />
        <Input
          label="Email *"
          id="quote-email"
          type="email"
          placeholder="jean@exemple.fr"
          error={errors.email?.message || (state && !state.success ? state.errors?.email?.[0] : undefined)}
          {...register('email')}
        />
      </div>

      <div className={cn('grid gap-5', !compact && 'md:grid-cols-2')}>
        <Input
          label="Téléphone *"
          id="quote-phone"
          type="tel"
          placeholder="01 23 45 67 89"
          error={errors.phone?.message || (state && !state.success ? state.errors?.phone?.[0] : undefined)}
          {...register('phone')}
        />
        <Select
          label="Service souhaité *"
          id="quote-service"
          options={SERVICES.map((s) => ({ value: s.slug, label: s.title }))}
          error={errors.service?.message || (state && !state.success ? state.errors?.service?.[0] : undefined)}
          {...register('service')}
        />
      </div>

      {/* Urgency Selector */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Niveau d&apos;urgence</label>
        <div className={cn('grid gap-3', compact ? 'grid-cols-1' : 'grid-cols-3')}>
          {urgencyOptions.map((option) => (
            <label
              key={option.value}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-xl border-2 px-4 py-3 transition-all duration-200',
                selectedUrgency === option.value ? option.color : 'border-slate-200 bg-white text-slate-500',
              )}
            >
              <input
                type="radio"
                value={option.value}
                className="sr-only"
                {...register('urgency')}
              />
              <span className="text-sm font-medium">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Input
        label="Adresse du chantier *"
        id="quote-address"
        placeholder="15 Rue Voltaire, 75011 Paris"
        error={errors.address?.message || (state && !state.success ? state.errors?.address?.[0] : undefined)}
        {...register('address')}
      />

      {!compact && (
        <Input
          label="Date souhaitée"
          id="quote-date"
          type="date"
          {...register('preferredDate')}
        />
      )}

      <Textarea
        label="Description du projet *"
        id="quote-description"
        rows={compact ? 3 : 5}
        placeholder="Décrivez votre projet en détail : type de travaux, surface, particularités..."
        error={errors.description?.message || (state && !state.success ? state.errors?.description?.[0] : undefined)}
        {...register('description')}
      />

      <Button
        type="submit"
        variant="primary"
        loading={isPending}
        size="lg"
        className="w-full"
        icon={<FileText className="h-5 w-5" />}
      >
        Demander mon devis gratuit
      </Button>

      <p className="text-center text-xs text-slate-500">
        Réponse garantie sous 24h &bull; Sans engagement &bull; 100% gratuit
      </p>
    </form>
  )
}
