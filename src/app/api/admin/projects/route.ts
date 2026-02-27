import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { readStorage, writeStorage } from '@/lib/storage'

async function checkAuth() {
  const cookieStore = await cookies()
  const auth = cookieStore.get('admin_auth')
  return auth && auth.value === 'electricien-admin-session-v1'
}

interface Project {
  id: string
  titre: string
  slug: string
  categorie: string
  description: string
  challenge: string
  solution: string
  tags: string
  featured: boolean
  createdAt: string
  updatedAt: string
}

export async function GET() {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const projects = await readStorage<Project>('projects')
    return NextResponse.json(projects)
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(request: Request) {
  if (!(await checkAuth())) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  try {
    const { action, data, id } = await request.json()
    const projects = await readStorage<Project>('projects')

    switch (action) {
      case 'create': {
        const newItem: Project = {
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
          titre: data.titre,
          slug: data.slug,
          categorie: data.categorie || '',
          description: data.description || '',
          challenge: data.challenge || '',
          solution: data.solution || '',
          tags: data.tags || '',
          featured: data.featured || false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
        projects.push(newItem)
        await writeStorage('projects', projects)
        return NextResponse.json(newItem, { status: 201 })
      }

      case 'update': {
        const index = projects.findIndex((p) => p.id === id)
        if (index === -1) {
          return NextResponse.json({ error: 'Projet non trouvé' }, { status: 404 })
        }
        projects[index] = {
          ...projects[index],
          titre: data.titre ?? projects[index].titre,
          slug: data.slug ?? projects[index].slug,
          categorie: data.categorie ?? projects[index].categorie,
          description: data.description ?? projects[index].description,
          challenge: data.challenge ?? projects[index].challenge,
          solution: data.solution ?? projects[index].solution,
          tags: data.tags ?? projects[index].tags,
          featured: data.featured ?? projects[index].featured,
          updatedAt: new Date().toISOString(),
        }
        await writeStorage('projects', projects)
        return NextResponse.json(projects[index])
      }

      case 'delete': {
        const filtered = projects.filter((p) => p.id !== id)
        if (filtered.length === projects.length) {
          return NextResponse.json({ error: 'Projet non trouvé' }, { status: 404 })
        }
        await writeStorage('projects', filtered)
        return NextResponse.json({ success: true })
      }

      default:
        return NextResponse.json({ error: 'Action non reconnue' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
