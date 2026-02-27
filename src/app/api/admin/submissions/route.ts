import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { readStorage, writeStorage } from '@/lib/storage'

async function checkAuth() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('admin_auth')
  return auth && auth.value === 'electricien-admin-session-v1'
}

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
  statut: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const submissions = await readStorage<Submission>('submissions')
    return NextResponse.json(submissions)
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(request: Request) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const { action, id, statut, notes } = await request.json()
    const submissions = await readStorage<Submission>('submissions')

    switch (action) {
      case 'update-status': {
        const index = submissions.findIndex((s) => s.id === id)
        if (index === -1) {
          return NextResponse.json({ error: 'Soumission non trouvée' }, { status: 404 })
        }
        submissions[index] = {
          ...submissions[index],
          statut: statut || submissions[index].statut,
          notes: notes !== undefined ? notes : submissions[index].notes,
          updatedAt: new Date().toISOString(),
        }
        await writeStorage('submissions', submissions)
        return NextResponse.json(submissions[index])
      }

      case 'delete': {
        const filtered = submissions.filter((s) => s.id !== id)
        if (filtered.length === submissions.length) {
          return NextResponse.json({ error: 'Soumission non trouvée' }, { status: 404 })
        }
        await writeStorage('submissions', filtered)
        return NextResponse.json({ success: true })
      }

      default:
        return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
