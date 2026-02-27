import { promises as fs } from 'fs'
import path from 'path'

const STORAGE_DIR = path.join(process.cwd(), 'storage')

async function ensureStorageDir() {
  try {
    await fs.access(STORAGE_DIR)
  } catch {
    await fs.mkdir(STORAGE_DIR, { recursive: true })
  }
}

export async function readStorage<T>(filename: string): Promise<T[]> {
  try {
    await ensureStorageDir()
    const filePath = path.join(STORAGE_DIR, `${filename}.json`)
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data) as T[]
  } catch {
    return []
  }
}

export async function writeStorage<T>(filename: string, data: T[]): Promise<void> {
  await ensureStorageDir()
  const filePath = path.join(STORAGE_DIR, `${filename}.json`)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

export async function readSubmissions() {
  return readStorage('submissions')
}

export async function writeSubmissions(data: unknown[]) {
  return writeStorage('submissions', data)
}
