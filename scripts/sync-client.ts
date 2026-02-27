/**
 * sync-client.ts
 *
 * Lit CLIENT.md a la racine du projet et genere
 * src/config/client.config.ts avec toutes les paires cle-valeur.
 *
 * Usage : npm run sync-client
 *         npx tsx scripts/sync-client.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'

const ROOT = join(__dirname, '..')
const SOURCE = join(ROOT, 'CLIENT.md')
const OUTPUT = join(ROOT, 'src', 'config', 'client.config.ts')

// ---------------------------------------------------------------------------
// 1. Lire CLIENT.md
// ---------------------------------------------------------------------------
const raw = readFileSync(SOURCE, 'utf-8')

// ---------------------------------------------------------------------------
// 2. Extraire les paires KEY: "value"
// ---------------------------------------------------------------------------
const entries: [string, string][] = []
const regex = /^([A-Z][A-Z0-9_]+):\s*"(.*)"\s*$/gm
let match: RegExpExecArray | null

while ((match = regex.exec(raw)) !== null) {
  entries.push([match[1], match[2]])
}

if (entries.length === 0) {
  console.error('Aucune paire cle-valeur trouvee dans CLIENT.md')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// 3. Generer le fichier TypeScript
// ---------------------------------------------------------------------------
const lines: string[] = [
  '// AUTO-GENERATED from CLIENT.md — NE PAS MODIFIER MANUELLEMENT',
  '// Genere par: npm run sync-client',
  `// Date: ${new Date().toISOString()}`,
  '',
  'export const clientConfig = {',
]

for (const [key, value] of entries) {
  // Echapper les guillemets simples dans la valeur
  const escaped = value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
  lines.push(`  ${key}: '${escaped}',`)
}

lines.push('} as const')
lines.push('')
lines.push('export type ClientConfigKey = keyof typeof clientConfig')
lines.push('')

const output = lines.join('\n')

// ---------------------------------------------------------------------------
// 4. Ecrire le fichier
// ---------------------------------------------------------------------------
mkdirSync(dirname(OUTPUT), { recursive: true })
writeFileSync(OUTPUT, output, 'utf-8')

console.log(`[sync-client] ${entries.length} cles extraites de CLIENT.md`)
console.log(`[sync-client] Fichier genere : ${OUTPUT}`)
