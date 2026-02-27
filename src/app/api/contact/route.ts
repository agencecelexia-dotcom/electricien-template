import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'
import { readStorage, writeStorage } from '@/lib/storage'

interface Submission {
  id: string
  type: 'contact' | 'devis'
  nom: string
  email: string
  telephone: string
  message: string
  statut: string
  createdAt: string
  updatedAt: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const submissions = await readStorage<Submission>('submissions')
    const newSubmission: Submission = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      type: 'contact',
      nom: result.data.name,
      email: result.data.email,
      telephone: result.data.phone,
      message: result.data.message,
      statut: 'Nouveau',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    submissions.unshift(newSubmission)
    await writeStorage('submissions', submissions)

    return NextResponse.json({
      success: true,
      message: 'Votre message a été envoyé avec succès !',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Une erreur est survenue.' },
      { status: 500 }
    )
  }
}
