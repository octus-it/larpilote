import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import PricingCard from '../components/ui/PricingCard'
import { plans } from '../data'

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Nos forfaits"
        title="Choisissez votre niveau de pilotage."
        subtitle="Que vous souhaitiez simplement déléguer les voyageurs ou externaliser une grande partie de votre gestion digitale, LARPILOTE s’adapte à votre activité."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {plans.map((p, i) => (
            <PricingCard key={p.slug} plan={p} variant="full" delay={i * 0.06} />
          ))}
        </div>

        <Reveal className="mt-16 text-center border-t border-noir/10 pt-14">
          <p className="font-display text-xl md:text-2xl">Vous ne savez pas quelle formule choisir ?</p>
          <p className="mt-2 opacity-70 max-w-md mx-auto">
            Chaque activité est différente. Répondez à quelques questions et nous vous orienterons vers
            la formule correspondant le mieux à votre situation.
          </p>
          <div className="mt-6">
            <Button to="/trouver-ma-formule" variant="dark" withArrow>Trouver ma formule</Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
