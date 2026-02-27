/**
 * sync-client.ts
 *
 * Parse CLIENT.md et genere:
 * 1. src/config/client.config.ts (TypeScript config, 78+ keys)
 * 2. src/app/globals.css (design system colors & fonts from hues)
 *
 * Usage : npm run sync-client
 *         npx tsx scripts/sync-client.ts
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'

const ROOT = join(__dirname, '..')
const SOURCE = join(ROOT, 'CLIENT.md')
const OUTPUT_CONFIG = join(ROOT, 'src', 'config', 'client.config.ts')
const OUTPUT_CSS = join(ROOT, 'src', 'app', 'globals.css')

// ---------------------------------------------------------------------------
// 1. Lire CLIENT.md
// ---------------------------------------------------------------------------
const raw = readFileSync(SOURCE, 'utf-8')
const cssContent = readFileSync(OUTPUT_CSS, 'utf-8')

// ---------------------------------------------------------------------------
// 2. Extraire les paires KEY: "value"
// ---------------------------------------------------------------------------
const entries: [string, string][] = []
const entryMap = new Map<string, string>()
const regex = /^([A-Z][A-Z0-9_]+):\s*"(.*)"\s*$/gm
let match: RegExpExecArray | null

while ((match = regex.exec(raw)) !== null) {
  entries.push([match[1], match[2]])
  entryMap.set(match[1], match[2])
}

if (entries.length === 0) {
  console.error('Aucune paire cle-valeur trouvee dans CLIENT.md')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// 3. Generer client.config.ts (TypeScript)
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

const configOutput = lines.join('\n')

// ---------------------------------------------------------------------------
// 4. Mettre a jour globals.css avec les couleurs & fonts
// ---------------------------------------------------------------------------

// Helper : Convertir hue (0-360) -> oklch colors
function generateColorScales(hue: number) {
  // Teintes oklch avec saturation/lightness pour bleu ardoise
  return {
    '900': `oklch(0.22 0.06 ${hue})`,   // Très foncé (texte principal)
    '800': `oklch(0.32 0.08 ${hue})`,   // Foncé
    '700': `oklch(0.42 0.10 ${hue})`,   // Moyen-foncé
    '600': `oklch(0.50 0.12 ${hue})`,   // Moyen
    '500': `oklch(0.60 0.14 ${hue})`,   // Moyen-clair
    '100': `oklch(0.95 0.02 ${hue})`,   // Très clair (backgrounds)
  }
}

// Helper : Convertir hue accent (pour orange, etc.)
function generateAccentColor(hue: number) {
  return `oklch(0.64 0.16 ${hue})`  // Teinte vive pour CTA
}

// Parse PRIMARY_HUE et ACCENT_HUE
const primaryHue = entryMap.get('PRIMARY_HUE') || '217'
const accentHue = entryMap.get('ACCENT_HUE') || '44'

const primaryColors = generateColorScales(parseInt(primaryHue))
const accentColor = generateAccentColor(parseInt(accentHue))

// Construire les nouvelles declarations CSS
const colorDeclarations = [
  `--color-primary-900:   ${primaryColors['900']};`,
  `--color-primary-800:   ${primaryColors['800']};`,
  `--color-primary-700:   ${primaryColors['700']};`,
  `--color-primary-600:   ${primaryColors['600']};`,
  `--color-primary-500:   ${primaryColors['500']};`,
  `--color-primary-100:   ${primaryColors['100']};`,
  `--color-accent-500:    ${accentColor};`,
].join('\n  ')

// Replacer les valeurs dans globals.css
let updatedCss = cssContent

// Matcher les declarations : --color-primary-900: oklch(...)
updatedCss = updatedCss.replace(
  /--color-primary-900:\s*oklch\([^)]+\);/,
  `--color-primary-900:   ${primaryColors['900']};`
)
updatedCss = updatedCss.replace(
  /--color-primary-800:\s*oklch\([^)]+\);/,
  `--color-primary-800:   ${primaryColors['800']};`
)
updatedCss = updatedCss.replace(
  /--color-primary-700:\s*oklch\([^)]+\);/,
  `--color-primary-700:   ${primaryColors['700']};`
)
updatedCss = updatedCss.replace(
  /--color-primary-600:\s*oklch\([^)]+\);/,
  `--color-primary-600:   ${primaryColors['600']};`
)
updatedCss = updatedCss.replace(
  /--color-primary-500:\s*oklch\([^)]+\);/,
  `--color-primary-500:   ${primaryColors['500']};`
)
updatedCss = updatedCss.replace(
  /--color-primary-100:\s*oklch\([^)]+\);/,
  `--color-primary-100:   ${primaryColors['100']};`
)
updatedCss = updatedCss.replace(
  /--color-accent-500:\s*oklch\([^)]+\);/,
  `--color-accent-500:    ${accentColor};`
)

// ---------------------------------------------------------------------------
// 5. Ecrire les fichiers
// ---------------------------------------------------------------------------

mkdirSync(dirname(OUTPUT_CONFIG), { recursive: true })
writeFileSync(OUTPUT_CONFIG, configOutput, 'utf-8')

writeFileSync(OUTPUT_CSS, updatedCss, 'utf-8')

console.log(`[sync-client] ${entries.length} cles extraites de CLIENT.md`)
console.log(`[sync-client] Fichier genere : ${OUTPUT_CONFIG}`)
console.log(`[sync-client] Couleurs mises a jour : ${OUTPUT_CSS}`)
console.log(`[sync-client] PRIMARY_HUE: ${primaryHue}, ACCENT_HUE: ${accentHue}`)
console.log('[sync-client] ✅ Synchronisation terminee !')
