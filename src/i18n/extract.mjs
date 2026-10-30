// Liste les textes français traduisibles (data.js, seoData.js, legalContent.js) + vérifie la couverture de en.js.
// Usage : node src/i18n/extract.mjs [--missing]
import * as data from '../data.js'
import { seoData } from '../seoData.js'
import { legalPages } from '../legalContent.js'

const SKIP_KEYS = new Set(['icon', 'slug', 'to', 'form', 'id', 'n', 'type', 'audience', 'image', 'path'])
const found = []
const seen = new Set()
function walk(v, key) {
  if (typeof v === 'string') {
    if (SKIP_KEYS.has(key) || seen.has(v) || !/[A-Za-zÀ-ÿ]{3}/.test(v) || /^(https?:|[\w.+-]+@)/.test(v)) return
    seen.add(v)
    found.push(v)
  } else if (Array.isArray(v)) v.forEach((x) => walk(x, key))
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, k)
}
const { whatsappNumber, whatsappLink, recommendPlan, formatPlanPrice, ...rest } = data
walk(rest); walk(seoData); walk(legalPages)

if (process.argv.includes('--missing')) {
  const { default: en } = await import('./en.js')
  const missing = found.filter((s) => !(s in en))
  console.log(missing.map((s, i) => `${i}|${s}`).join('\n'))
  console.error(`${missing.length} manquants sur ${found.length}`)
} else {
  console.log(found.map((s, i) => `${i}|${s}`).join('\n'))
  console.error(`${found.length} textes`)
}
