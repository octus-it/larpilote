import { Navigate, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Owners from './pages/Owners'
import Concierges from './pages/Concierges'
import ServicesPage from './pages/ServicesPage'
import HowItWorksPage from './pages/HowItWorksPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import About from './pages/About'
import Quiz from './pages/Quiz'
import LegalPage from './pages/LegalPage'
import { useLang, useTr } from './i18n/index.jsx'

const organizationSchema = (lang, tr) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://larpilote.com/#organization',
      name: 'LARPILOTE',
      url: 'https://larpilote.com/',
      logo: 'https://larpilote.com/images/logo-mark.png',
      description: tr('Gestion virtuelle et pilotage opérationnel à distance des locations courte durée pour propriétaires et conciergeries.'),
      email: 'support@larpilote.com',
      telephone: '+1-819-809-5434',
      areaServed: 'Worldwide',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://larpilote.com/#website',
      name: 'LARPILOTE',
      url: 'https://larpilote.com/',
      publisher: { '@id': 'https://larpilote.com/#organization' },
      inLanguage: lang === 'en' ? 'en' : 'fr-FR',
    },
  ],
})

const pages = [
  ['/', <Home />],
  ['/proprietaires', <Owners />],
  ['/conciergeries', <Concierges />],
  ['/services', <ServicesPage />],
  ['/comment-ca-marche', <HowItWorksPage />],
  ['/faq', <FAQPage />],
  ['/contact', <ContactPage />],
  ['/a-propos', <About />],
  ['/trouver-ma-formule', <Quiz />],
  ['/mentions-legales', <LegalPage slug="mentions" path="/mentions-legales" />],
  ['/confidentialite', <LegalPage slug="confidentialite" path="/confidentialite" />],
  ['/cgv', <LegalPage slug="cgv" path="/cgv" />],
  ['/cookies', <LegalPage slug="cookies" path="/cookies" />],
]

export default function App() {
  const lang = useLang()
  const tr = useTr()
  return (
    <div className="min-h-screen bg-paper text-noir font-body">
      <Helmet htmlAttributes={{ lang }}>
        <script type="application/ld+json">{JSON.stringify(organizationSchema(lang, tr))}</script>
      </Helmet>
      <ScrollToTop />
      <Nav />
      <Routes>
        {['', '/en'].flatMap((prefix) =>
          pages.map(([path, element]) => (
            <Route key={prefix + path} path={path === '/' ? prefix || '/' : prefix + path} element={element} />
          ))
        )}
        <Route path="/forfaits" element={<Navigate to="/#tarifs" replace />} />
        <Route path="/en/forfaits" element={<Navigate to="/en#tarifs" replace />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  )
}
