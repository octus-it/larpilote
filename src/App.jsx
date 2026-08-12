import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Owners from './pages/Owners'
import Concierges from './pages/Concierges'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import HowItWorksPage from './pages/HowItWorksPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import About from './pages/About'
import Quiz from './pages/Quiz'
import LegalPage from './pages/LegalPage'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-noir font-body">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proprietaires" element={<Owners />} />
        <Route path="/conciergeries" element={<Concierges />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/forfaits" element={<PricingPage />} />
        <Route path="/comment-ca-marche" element={<HowItWorksPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/trouver-ma-formule" element={<Quiz />} />
        <Route path="/mentions-legales" element={<LegalPage slug="mentions" />} />
        <Route path="/confidentialite" element={<LegalPage slug="confidentialite" />} />
        <Route path="/cgv" element={<LegalPage slug="cgv" />} />
        <Route path="/cookies" element={<LegalPage slug="cookies" />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
