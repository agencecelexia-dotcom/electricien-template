import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export const quoteFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  urgency: z.enum(['normal', 'urgent', 'tres-urgent']),
  description: z.string().min(20, 'Veuillez décrire votre projet en détail (20 caractères min.)'),
  address: z.string().min(5, 'Veuillez indiquer votre adresse'),
  preferredDate: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type QuoteFormData = z.infer<typeof quoteFormSchema>
