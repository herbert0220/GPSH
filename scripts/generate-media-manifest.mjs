import { readdir, writeFile } from 'node:fs/promises'
import { extname, join } from 'node:path'

const root = new URL('../public/', import.meta.url)
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'])
const videoExtensions = new Set(['.mp4', '.webm', '.mov', '.m4v'])
const naturalSort = new Intl.Collator('zh-Hant', { numeric: true, sensitivity: 'base' }).compare

async function filesIn(folder, allowed) {
  try {
    const files = await readdir(new URL(`media/${folder}/`, root))
    return files
      .filter((file) => allowed.has(extname(file).toLowerCase()))
      .sort(naturalSort)
      .map((file) => `/media/${folder}/${encodeURIComponent(file)}`)
  } catch {
    return []
  }
}

const legacy = {
  exterior: Array.from({ length: 16 }, (_, index) => `/ext-${index + 1}.png`),
  interior: Array.from({ length: 5 }, (_, index) => `/int-${index + 1}.png`),
  floor2: Array.from({ length: 6 }, (_, index) => `/floor2-${index + 1}.png`),
  videos: ['/house-video.mp4']
}

const manifest = {
  exterior: [...legacy.exterior, ...await filesIn('exterior', imageExtensions)],
  interior: [...legacy.interior, ...await filesIn('interior', imageExtensions)],
  floor2: [...legacy.floor2, ...await filesIn('floor2', imageExtensions)],
  videos: [...legacy.videos, ...await filesIn('videos', videoExtensions)],
  generatedAt: new Date().toISOString()
}

await writeFile(join(root.pathname, 'media-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Media manifest generated: ${Object.values(manifest).flat().length - 1} items`)
