'use server'

import { contactFormSchema, quoteFormSchema } from './validations'

export async function submitContactForm(_prevState: unknown, formData: FormData) {
  const raw = Object.fromEntries(formData.entries())
  const result = contactFormSchema.safeParse(raw)

  if (!result.success) {
    return { success: false as const, errors: result.error.flatten().fieldErrors }
  }

  // TODO: Integrate email service (Resend, SendGrid, etc.)
  console.log('Contact form submission:', result.data)

  return { success: true as const, message: 'Votre message a été envoyé avec succès !' }
}

export async function submitQuoteForm(_prevState: unknown, formData: FormData) {
  const raw = Object.fromEntries(formData.entries())
  const result = quoteFormSchema.safeParse(raw)

  if (!result.success) {
    return { success: false as const, errors: result.error.flatten().fieldErrors }
  }

  // TODO: Integrate email service (Resend, SendGrid, etc.)
  console.log('Quote form submission:', result.data)

  return { success: true as const, message: 'Votre demande de devis a été envoyée ! Nous vous recontactons sous 24h.' }
}
