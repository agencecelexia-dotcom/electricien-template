import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const updates = await request.json()

    const clientMdPath = path.join(process.cwd(), 'CLIENT.md')
    let content = await fs.readFile(clientMdPath, 'utf-8')

    for (const [key, value] of Object.entries(updates)) {
      // Match lines like: KEY: "value" or KEY: ""
      const regex = new RegExp(`^(${key}:\\s*)"(.*)"`, 'm')
      if (regex.test(content)) {
        content = content.replace(regex, `$1"${value}"`)
      }
    }

    await fs.writeFile(clientMdPath, content, 'utf-8')

    // Also regenerate client.config.ts
    const configLines: string[] = [
      '// AUTO-GENERATED from CLIENT.md — NE PAS MODIFIER MANUELLEMENT',
      '// Genere par: npm run sync-client',
      '',
      'export const clientConfig = {',
    ]

    for (const [key, value] of Object.entries(updates)) {
      const escapedValue = String(value).replace(/'/g, "\\'")
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
