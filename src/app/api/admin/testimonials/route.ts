import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { readStorage, writeStorage } from '@/lib/storage'

async function checkAuth() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('admin_auth')
  return auth && auth.value === 'electricien-admin-session-v1'
}

interface Testimonial {
  id: string
  nom: string
  ville: string
  texte: string
  note: number
  createdAt: string
  updatedAt: string
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const testimonials = await readStorage<Testimonial>('testimonials')
    return NextResponse.json(testimonials)
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(request: Request) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const { action, data, id } = await request.json()
    const testimonials = await readStorage<Testimonial>('testimonials')

    switch (action) {
      case 'create': {
        const newItem: Testimonial = {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
          nom: data.nom,
          ville: data.ville,
          texte: data.texte,
          note: data.note || 5,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        testimonials.push(newItem)
        await writeStorage('testimonials', testimonials)
        return NextResponse.json(newItem, { status: 201 })
      }

      case 'update': {
        const index = testimonials.findIndex((t) => t.id === id)
        if (index === -1) {
          return NextResponse.json({ error: 'Témoignage non trouvé' }, { status: 404 })
        }
        testimonials[index] = {
          ...testimonials[index],
          nom: data.nom,
          ville: data.ville,
          texte: data.texte,
          note: data.note || testimonials[index].note,
          updatedAt: new Date().toISOString(),
        }
        await writeStorage('testimonials', testimonials)
        return NextResponse.json(testimonials[index])
      }

      case 'delete': {
        const filtered = testimonials.filter((t) => t.id !== id)
        if (filtered.length === testimonials.length) {
          return NextResponse.json({ error: 'Témoignage non trouvé' }, { status: 404 })
        }
        await writeStorage('testimonials', filtered)
        return NextResponse.json({ success: true })
      }

      default:
        return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
