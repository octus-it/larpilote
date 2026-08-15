import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import Accordion from '../components/ui/Accordion'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { faqItems } from '../data'

export default function FAQPage() {
  return (
    <>
      <SEO {...seoData['/faq']} path="/faq" />
      <PageHero kicker="FAQ" title="Questions fréquentes" />

      <Section>
        <div className="max-w-2xl mx-auto">
          <Accordion items={faqItems} />
        </div>

        <div className="mt-16 text-center">
          <p className="opacity-70">Une autre question ?</p>
          <div className="mt-5">
            <Button to="/contact" variant="outline" withArrow>Contacter LARPILOTE</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
