import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Nav />
      <Hero />
      <Stats />
      <Marquee />
      <Services />
      <Gallery />
      <Process />
      <Pricing onSelectPlan={setSelectedPlan} />
      <Testimonials />
      <FAQ />
      <Contact selectedPlan={selectedPlan} onClearPlan={() => setSelectedPlan(null)} />
      <Footer />
    </div>
  )
}
