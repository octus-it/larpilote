import { Helmet } from 'react-helmet-async'
import { localizePath, useLang, useSeo } from '../i18n/index.jsx'

const SITE = 'https://larpilote.com'
const DEFAULT_IMAGE = '/images/hero-home.jpg'

// `path` est toujours le chemin français ('/faq') ; la version anglaise vit sous '/en'.
export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false }) {
  const lang = useLang()
  const translated = useSeo(path)
  title = translated.title ?? title
  description = translated.description ?? description

  const url = `${SITE}${localizePath(path, lang) === '/' ? '/' : localizePath(path, lang)}`
  const frUrl = `${SITE}${path}`
  const enUrl = `${SITE}${localizePath(path, 'en')}`
  const fullTitle = path === '/' ? title : `${title} | LARPILOTE`
  const absoluteImage = image.startsWith('http') ? image : `${SITE}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={frUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LARPILOTE" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'fr_FR'} />
      <meta property="og:locale:alternate" content={lang === 'en' ? 'fr_FR' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
    </Helmet>
  )
}
