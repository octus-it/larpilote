import { Icon } from '../lib/icons'
import Reveal from '../components/Reveal'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { servicesDetailed } from '../data'

export default function ServicesPage() {
  return (
    <>
      <SEO {...seoData['/services']} path="/services" />
      <PageHero
        image="/images/services-larpilote.jpeg"
        imagePosition="center 20%"
        minHeight={false}
        kicker="Nos services"
        title="Un pilotage à distance. Une gestion plus fluide."
        subtitle="LARPILOTE centralise les tâches digitales et opérationnelles qui permettent à votre activité de location courte durée de fonctionner au quotidien."
      />

      {servicesDetailed.map((s, i) => (
        <Section key={s.title} tone={i % 2 === 0 ? 'paper' : 'beige'} kicker={s.title} title={s.title} as="h2">
          <div className="max-w-2xl">
            <div className="flex items-start gap-4 mb-6">
              <Icon name={s.icon} className="w-6 h-6 text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <p className="opacity-80 leading-relaxed">{s.intro}</p>
            </div>

            {s.items && (
              <div className="grid sm:grid-cols-2 gap-5 mt-6">
                {s.items.map((it) => (
                  <Reveal key={it.label} className="border-l-2 border-gold/40 pl-4">
                    <p className="font-display text-base">{it.label}</p>
                    <p className="mt-1 text-sm opacity-70">{it.text}</p>
                  </Reveal>
                ))}
              </div>
            )}

            {s.bullets && (
              <ul className="grid sm:grid-cols-2 gap-2.5 mt-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm">
                    <Icon name="check" className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {s.tag && <p className="mt-6 kicker">{s.tag}</p>}

            {s.flow && (
              <div className="flex flex-wrap items-center gap-2 mt-6 text-sm font-mono">
                {s.flow.map((f, idx) => (
                  <span key={f} className="flex items-center gap-2">
                    <span className="border border-current/20 px-3 py-1.5">{f}</span>
                    {idx < s.flow.length - 1 && <span className="opacity-40">→</span>}
                  </span>
                ))}
              </div>
            )}

            {s.note && <p className="mt-6 text-sm opacity-60 italic leading-relaxed">{s.note}</p>}
          </div>
        </Section>
      ))}
    </>
  )
}
