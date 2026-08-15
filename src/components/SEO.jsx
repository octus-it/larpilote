import { Helmet } from 'react-helmet-async'

const SITE = 'https://larpilote.com'
const DEFAULT_IMAGE = '/images/hero-home.jpg'

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false }) {
  const url = `${SITE}${path}`
  const fullTitle = path === '/' ? title : `${title} | LARPILOTE`
  const absoluteImage = image.startsWith('http') ? image : `${SITE}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LARPILOTE" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
    </Helmet>
  )
}
