import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as frData from '../data'
import { seoData } from '../seoData'
import { legalPages } from '../legalContent'
import en from './en'

export const LANGS = ['fr', 'en']

// Clés dont la valeur n'est jamais du texte à traduire (identifiants, liens, icônes…).
const SKIP_KEYS = new Set(['icon', 'slug', 'to', 'form', 'id', 'n', 'type', 'audience', 'image', 'path'])

export function langFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr'
}

export function stripLang(pathname) {
  if (pathname === '/en') return '/'
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname
}

// '/faq' -> '/en/faq', '/' -> '/en', '/#tarifs' -> '/en#tarifs'
export function localizePath(path, lang) {
  if (lang !== 'en' || typeof path !== 'string' || !path.startsWith('/')) return path
  if (path === '/') return '/en'
  if (path.startsWith('/#') || path.startsWith('/?')) return `/en${path.slice(1)}`
  return `/en${path}`
}

export function translate(text, lang) {
  return lang === 'en' && typeof text === 'string' ? en[text] ?? text : text
}

function translateDeep(value, lang, key) {
  if (typeof value === 'string') return SKIP_KEYS.has(key) ? value : translate(value, lang)
  if (Array.isArray(value)) return value.map((v) => translateDeep(v, lang, key))
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, translateDeep(v, lang, k)]))
  }
  return value
}

export function useLang() {
  return langFromPath(useLocation().pathname)
}

// tr('Texte français') -> texte dans la langue courante (fallback : le français)
export function useTr() {
  const lang = useLang()
  return (text) => translate(text, lang)
}

export function useLocalePath() {
  const lang = useLang()
  return (path) => localizePath(path, lang)
}

export function LocLink({ to, ...rest }) {
  const lp = useLocalePath()
  return <Link to={lp(to)} {...rest} />
}

// Données du site (data.js) dans la langue courante.
export function useData() {
  const lang = useLang()
  return useMemo(() => (lang === 'en' ? translateDeep({ ...frData }, 'en') : frData), [lang])
}

export function useLegalPage(slug) {
  const lang = useLang()
  return useMemo(() => translateDeep(legalPages[slug], lang), [slug, lang])
}

export function useSeo(path) {
  const lang = useLang()
  return useMemo(() => translateDeep(seoData[path] ?? {}, lang), [path, lang])
}
