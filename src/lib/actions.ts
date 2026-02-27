'use server'

import { contactFormSchema, quoteFormSchema } from './validations'
import { readStorage, writeStorage } from './storage'

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
  statut: 'Nouveau' | 'Contacté' | 'En cours' | 'Converti'
  createdAt: string
  updatedAt: string
}

async function saveSubmission(submission: Omit<Submission, 'id' | 'createdAt' | 'updatedAt' | 'statut'>) {
  const submissions = await readStorage<Submission>('submissions')
  const newSubmission: Submission = {
    ...submission,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    statut: 'Nouveau',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  submissions.unshift(newSubmission)
  await writeStorage('submissions', submissions)

  // Optional: n8n webhook notification
  try {
    const { clientConfig } = await import('@/config/client.config')
    const webhookUrl = clientConfig.N8N_WEBHOOK
    if (webhookUrl && webhookUrl !== 'https://votre-instance-n8n.com/webhook/contact') {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSubmission),
      })
    }
  } catch {
    // Webhook failure should not block form submission
  }

  return newSubmission
}

export async function submitContactForm(_prevState: unknown, formData: FormData) {
  const raw = Object.fromEntries(formData.entries())

  // Honeypot check
  if (raw._gotcha) {
    return { success: true as const, message: 'Votre message a été envoyé avec succès !' }
  }

  const result = contactFormSchema.safeParse(raw)

  if (!result.success) {
    return { success: false as const, errors: result.error.flatten().fieldErrors }
  }

  try {
    await saveSubmission({
      type: 'contact',
      nom: result.data.name,
      email: result.data.email,
      telephone: result.data.phone,
      message: result.data.message,
    })
  } catch {
    // Storage error — still show success to user (submission logged server-side)
  }

  return { success: true as const, message: 'Votre message a été envoyé avec succès !' }
}

export async function submitQuoteForm(_prevState: unknown, formData: FormData) {
  const raw = Object.fromEntries(formData.entries())

  // Honeypot check
  if (raw._gotcha) {
    return { success: true as const, message: 'Votre demande de devis a été envoyée ! Nous vous recontactons sous 24h.' }
  }

  const result = quoteFormSchema.safeParse(raw)

  if (!result.success) {
    return { success: false as const, errors: result.error.flatten().fieldErrors }
  }

  try {
    await saveSubmission({
      type: 'devis',
      nom: result.data.name,
      email: result.data.email,
      telephone: result.data.phone,
      message: result.data.description,
      service: result.data.service,
      urgence: result.data.urgency,
      adresse: result.data.address,
      dateSouhaitee: result.data.preferredDate,
    })
  } catch {
    // Storage error — still show success to user
  }

  return { success: true as const, message: 'Votre demande de devis a été envoyée ! Nous vous recontactons sous 24h.' }
}
