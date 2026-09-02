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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://larpilote.com/#organization',
      name: 'LARPILOTE',
      url: 'https://larpilote.com/',
      logo: 'https://larpilote.com/images/logo-mark.png',
      description: 'Gestion virtuelle et pilotage opérationnel à distance des locations courte durée pour propriétaires et conciergeries.',
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
      inLanguage: 'fr-FR',
    },
  ],
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-noir font-body">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proprietaires" element={<Owners />} />
        <Route path="/conciergeries" element={<Concierges />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/forfaits" element={<Navigate to="/#tarifs" replace />} />
        <Route path="/comment-ca-marche" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/trouver-ma-formule" element={<Quiz />} />
        <Route path="/mentions-legales" element={<LegalPage slug="mentions" path="/mentions-legales" />} />
        <Route path="/confidentialite" element={<LegalPage slug="confidentialite" path="/confidentialite" />} />
        <Route path="/cgv" element={<LegalPage slug="cgv" path="/cgv" />} />
        <Route path="/cookies" element={<LegalPage slug="cookies" path="/cookies" />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  )
}
