import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const frRoutes = [
  '/',
  '/proprietaires',
  '/conciergeries',
  '/services',
  '/comment-ca-marche',
  '/faq',
  '/contact',
  '/a-propos',
  '/trouver-ma-formule',
  '/mentions-legales',
  '/confidentialite',
  '/cgv',
  '/cookies',
]

// Chaque page existe en français (/…) et en anglais (/en/…).
const routes = [...frRoutes, ...frRoutes.map((r) => (r === '/' ? '/en' : `/en${r}`))]

const entryPath = path.join(ssrDir, 'entry-server.js')
if (!fs.existsSync(entryPath)) {
  console.error(`SSR entry not found at ${entryPath}. Run the SSR build first.`)
  process.exit(1)
}

const { render } = await import(pathToFileURL(entryPath).href)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

for (const url of routes) {
  const { html, helmet } = render(url)

  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter(Boolean)
    .join('\n    ')

  const lang = url === '/en' || url.startsWith('/en/') ? 'en' : 'fr'
  const page = template
    .replace('<html lang="fr">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', headTags)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  // Flat `<route>.html` files (not `<route>/index.html`) avoid nginx's
  // directory-match 301 redirect to a trailing slash, which would otherwise
  // conflict with the trailing-slash-free canonical URLs in <head>.
  const outPath = url === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, `${url.slice(1)}.html`)

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`prerendered ${url} -> ${path.relative(distDir, outPath)}`)
}

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`\nPrerendered ${routes.length} routes.`)
