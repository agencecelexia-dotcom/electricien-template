import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect /admin/* (except /admin/login) and /api/admin/*
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const authCookie = request.cookies.get('admin_auth')
    if (!authCookie || authCookie.value !== 'electricien-admin-session-v1') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  if (pathname.startsWith('/api/admin') && !pathname.startsWith('/api/admin/login')) {
    const authCookie = request.cookies.get('admin_auth')
    if (!authCookie || authCookie.value !== 'electricien-admin-session-v1') {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
