import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations'

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

    // TODO: Integrate email service (Resend, SendGrid, etc.)
    console.log('API contact submission:', result.data)

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
