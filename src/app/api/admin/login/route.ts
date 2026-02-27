import { NextResponse } from 'next/server'
import { clientConfig } from '@/config/client.config'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === clientConfig.ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true })
      response.cookies.set('admin_auth', 'electricien-admin-session-v1', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 jours
        path: '/',
      })
      return response
    }

    return NextResponse.json(
      { error: 'Mot de passe incorrect' },
      { status: 401 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.set('admin_auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return response
}
