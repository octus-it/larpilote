import Reveal from '../components/Reveal'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { useTr } from '../i18n/index.jsx'

const combine = ['Technologie', 'Organisation', 'Communication', 'Pilotage humain']

export default function About() {
  const tr = useTr()
  return (
    <>
      <SEO {...seoData['/a-propos']} path="/a-propos" />
      <PageHero
        image="/images/a-propos-larpilote.jpeg"
        imagePosition="center 30%"
        minHeight={false}
        kicker={tr("À propos")}
        title={tr("LARPILOTE est né d’une idée simple.")}
      />

      <Section>
        <div className="max-w-2xl space-y-4 text-lg md:text-xl font-display leading-snug">
          <p>{tr("La gestion d’une location courte durée ne devrait pas dépendre de la présence physique de son propriétaire.")}</p>
          <p className="opacity-70 text-base font-body">{tr("Les propriétaires peuvent vivre loin de leurs logements.")}</p>
          <p className="opacity-70 text-base font-body">{tr("Les conciergeries peuvent rapidement être dépassées par leur croissance.")}</p>
          <p className="opacity-70 text-base font-body">{tr("Et pourtant, une grande partie de la gestion quotidienne peut être organisée et pilotée à distance.")}</p>
          <p>{tr("C’est le rôle de LARPILOTE.")}</p>
        </div>
      </Section>

      <Section tone="beige" kicker={tr("Notre mission")} title={tr("Notre mission")}>
        <p className="max-w-xl opacity-80 leading-relaxed">
          {tr("Permettre aux propriétaires et aux professionnels de la location courte durée de déléguer une partie de leur gestion sans perdre le contrôle de leur activité.")}
        </p>
        <p className="mt-6 text-sm opacity-60">{tr("Nous combinons :")}</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {combine.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <span className="border border-noir/15 px-4 py-2 text-sm">{tr(c)}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section kicker={tr("Notre vision")} title={tr("Notre vision")}>
        <p className="max-w-xl opacity-80 leading-relaxed">
          {tr("Nous ne cherchons pas à devenir une conciergerie physique présente partout.")}
        </p>
        <p className="mt-4 max-w-xl font-display text-xl">
          {tr("Nous voulons devenir le partenaire opérationnel à distance des propriétaires et des conciergeries.")}
        </p>
      </Section>

      <Section tone="noir" align="center" kicker={tr("Notre promesse")} title={tr("Notre promesse")}>
        <p className="font-display text-2xl md:text-3xl">
          {tr("Votre logement. Votre contrôle. Notre pilotage.")}
        </p>
      </Section>
    </>
  )
}
