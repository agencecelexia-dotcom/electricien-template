'use client'

import { useActionState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { submitContactForm } from '@/lib/actions'
import { Input, Textarea } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  const {
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  if (state?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-electric/20 bg-electric/5 p-8 text-center"
      >
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-electric" />
        <h3 className="mb-2 text-xl font-semibold text-slate-900">Message envoyé !</h3>
        <p className="text-slate-600">{state.message}</p>
      </motion.div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot field */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="Nom complet"
          id="name"
          placeholder="Jean Dupont"
          error={errors.name?.message || (state && !state.success ? state.errors?.name?.[0] : undefined)}
          {...register('name')}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="jean@exemple.fr"
          error={errors.email?.message || (state && !state.success ? state.errors?.email?.[0] : undefined)}
          {...register('email')}
        />
      </div>
      <Input
        label="Téléphone"
        id="phone"
        type="tel"
        placeholder="01 23 45 67 89"
        error={errors.phone?.message || (state && !state.success ? state.errors?.phone?.[0] : undefined)}
        {...register('phone')}
      />
      <Textarea
        label="Votre message"
        id="message"
        rows={5}
        placeholder="Décrivez votre besoin..."
        error={errors.message?.message || (state && !state.success ? state.errors?.message?.[0] : undefined)}
        {...register('message')}
      />
      {/* RGPD Consent */}
      <label className="flex items-start gap-2 cursor-pointer">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-electric focus:ring-electric" />
        <span className="text-xs text-slate-500">
          J&apos;accepte que mes données soient traitées conformément à la{' '}
          <a href="/politique-confidentialite" className="text-electric underline" target="_blank">
            politique de confidentialité
          </a>.
        </span>
      </label>
      <Button type="submit" variant="primary" loading={isPending} size="lg" className="w-full" icon={<Send className="h-5 w-5" />}>
        Envoyer le message
      </Button>
    </form>
  )
}
