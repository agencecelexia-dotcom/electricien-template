import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: Request) {
  const cookieStore = await cookies()
  const auth = cookieStore.get('admin_auth')
  if (!auth || auth.value !== 'electricien-admin-session-v1') {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const updates = await request.json()

    const clientMdPath = path.join(process.cwd(), 'CLIENT.md')
    let content = await fs.readFile(clientMdPath, 'utf-8')

    for (const [key, value] of Object.entries(updates)) {
      const regex = new RegExp(`^(${key}:\\s*)"(.*)"`, 'm')
      if (regex.test(content)) {
        content = content.replace(regex, `$1"${value}"`)
      }
    }

    await fs.writeFile(clientMdPath, content, 'utf-8')

    // Regenerate client.config.ts from the FULL updated CLIENT.md
    const allPairs: Record<string, string> = {}
    const pairRegex = /^([A-Z_]+):\s*"(.*)"/gm
    let match
    while ((match = pairRegex.exec(content)) !== null) {
      allPairs[match[1]] = match[2]
    }

    const configLines: string[] = [
      '// AUTO-GENERATED from CLIENT.md — NE PAS MODIFIER MANUELLEMENT',
      '// Genere par: npm run sync-client',
      '',
      'export const clientConfig = {',
    ]

    for (const [key, value] of Object.entries(allPairs)) {
      const escapedValue = value.replace(/'/g, "\\'")
      configLines.push(`  ${key}: '${escapedValue}',`)
    }

    configLines.push('} as const')
    configLines.push('')
    configLines.push('export type ClientConfigKey = keyof typeof clientConfig')
    configLines.push('')

    const configPath = path.join(process.cwd(), 'src', 'config', 'client.config.ts')
    await fs.writeFile(configPath, configLines.join('\n'), 'utf-8')

    return NextResponse.json({ success: true, message: 'Configuration mise à jour' })
  } catch (error) {
    console.error('Erreur save-client:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde' },
      { status: 500 }
    )
  }
}
