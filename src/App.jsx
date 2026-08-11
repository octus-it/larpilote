import { Route, Routes } from 'react-router-dom'
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
import Order from './components/Order'

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <Services />
      <Gallery />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commander/:slug" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  )
}
