import { Icon } from '../lib/icons'
import Reveal from '../components/Reveal'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { processDetailed, emergencyContacts } from '../data'

export default function HowItWorksPage() {
  return (
    <>
      <SEO {...seoData['/comment-ca-marche']} path="/comment-ca-marche" />
      <PageHero
        image="/images/hero-comment-ca-marche.jpg"
        minHeight={false}
        kicker="Comment ça marche"
        title="Simple pour vous. Structuré pour nous."
        subtitle="Nous mettons en place votre gestion à distance en quelques étapes."
      />

      <Section>
        <div className="space-y-14 md:space-y-20">
          {processDetailed.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-10 items-start border-t border-noir/10 pt-8">
                <p className="font-mono text-sm text-gold-dark">{s.n}</p>
                <div>
                  <p className="font-display text-2xl md:text-3xl">{s.title}</p>
                  <p className="mt-3 opacity-70 max-w-xl leading-relaxed">{s.text}</p>
                  {s.bullets && (
                    <ul className="mt-5 grid sm:grid-cols-2 gap-2.5 max-w-xl">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm">
                          <Icon name="check" className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="noir" kicker="Contacts d’urgence" title="Le système de contacts d’urgence" subtitle="Lors de l’intégration, vous nous fournissez les personnes à contacter en cas de besoin.">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-4">
          {emergencyContacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.04}>
              <div className="border border-paper/15 p-5 text-center">
                <Icon name={c.icon} className="w-5 h-5 mx-auto text-gold-light" strokeWidth={1.5} />
                <p className="mt-3 text-sm opacity-80">{c.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-paper/15 max-w-2xl">
          <p className="kicker text-gold-light mb-4">En cas de problème</p>
          <p className="text-base md:text-lg opacity-90 leading-relaxed">
            Le voyageur signale → LARPILOTE analyse → le prestataire est contacté → LARPILOTE suit → vous êtes informé.
          </p>
          <p className="mt-5 text-sm opacity-60 leading-relaxed">
            Les interventions physiques et leurs coûts restent sous la responsabilité du propriétaire, de la
            conciergerie ou du prestataire concerné.
          </p>
        </div>
      </Section>

      <Section align="center" kicker="Votre contrôle" title="Vous gardez le contrôle">
        <p className="max-w-xl mx-auto opacity-80">LARPILOTE agit dans le périmètre que vous nous confiez.</p>
        <p className="mt-3 max-w-xl mx-auto opacity-60 text-sm">
          Vous conservez la propriété de votre logement, de vos comptes et de vos revenus.
        </p>
      </Section>
    </>
  )
}
