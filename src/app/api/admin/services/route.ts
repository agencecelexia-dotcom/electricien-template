import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { readStorage, writeStorage } from '@/lib/storage'

async function checkAuth() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('admin_auth')
  return auth && auth.value === 'electricien-admin-session-v1'
}

interface ServiceItem {
  id: string
  titre: string
  description: string
  createdAt: string
  updatedAt: string
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const services = await readStorage<ServiceItem>('services')
    return NextResponse.json(services)
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(request: Request) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const { action, data, id } = await request.json()
    const services = await readStorage<ServiceItem>('services')

    switch (action) {
      case 'create': {
        const newService: ServiceItem = {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
          titre: data.titre,
          description: data.description,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        services.push(newService)
        await writeStorage('services', services)
        return NextResponse.json(newService, { status: 201 })
      }

      case 'update': {
        const index = services.findIndex((s) => s.id === id)
        if (index === -1) {
          return NextResponse.json({ error: 'Service non trouvé' }, { status: 404 })
        }
        services[index] = {
          ...services[index],
          titre: data.titre,
          description: data.description,
          updatedAt: new Date().toISOString(),
        }
        await writeStorage('services', services)
        return NextResponse.json(services[index])
      }

      case 'delete': {
        const filtered = services.filter((s) => s.id !== id)
        if (filtered.length === services.length) {
          return NextResponse.json({ error: 'Service non trouvé' }, { status: 404 })
        }
        await writeStorage('services', filtered)
        return NextResponse.json({ success: true })
      }

      default:
        return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
