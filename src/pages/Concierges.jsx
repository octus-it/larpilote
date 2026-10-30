import { Icon } from '../lib/icons'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { useData, useTr } from '../i18n/index.jsx'

const keep = ['Vos clients.', 'Votre marque.', 'Vos équipes terrain.']

const scope = [
  { icon: 'message', title: 'Communication', text: 'Messages voyageurs, questions, assistance et communication avant, pendant et après le séjour.' },
  { icon: 'calendar', title: 'Réservations', text: 'Suivi des réservations, modifications, annulations et calendriers.' },
  { icon: 'globe', title: 'Plateformes', text: 'Airbnb, Booking et autres plateformes selon votre organisation.' },
  { icon: 'file', title: 'Annonces', text: 'Création, mise à jour, optimisation et référencement interne.' },
  { icon: 'clipboard', title: 'Reporting', text: 'Suivi de l’activité, des demandes et des performances.' },
  { icon: 'alert', title: 'Incidents', text: 'Réception des signalements, contact des personnes désignées, coordination et suivi.' },
]

const provide = ['Vos procédures', 'Vos consignes', 'Vos contacts', 'Vos prestataires']
const flow = ['reçoit', 'analyse', 'contacte', 'coordonne', 'suit', 'informe']

export default function Concierges() {
  const tr = useTr()
  const relais = useData().plans.find((p) => p.slug === 'relais')
  return (
    <>
      <SEO {...seoData['/conciergeries']} path="/conciergeries" />
      <PageHero
        image="/images/services-larpilote.jpeg"
        kicker="Conciergeries"
        title={tr("Votre conciergerie grandit. Votre back-office aussi.")}
        subtitle={tr("Plus de logements signifie plus de messages, plus de réservations et plus de tâches administratives.")}
        text={tr("LARPILOTE devient votre équipe opérationnelle à distance.")}
      >
        <Button to="/contact?profil=conciergerie" variant="light" withArrow>
          {tr("Demander une proposition")}
        </Button>
      </PageHero>

      <Section kicker={tr("Le constat")} title={tr("Vous n’avez pas besoin d’une nouvelle conciergerie.")}>
        <p className="max-w-xl font-display text-xl md:text-2xl">{tr("Vous avez besoin de plus de capacité opérationnelle.")}</p>
        <p className="mt-4 max-w-xl opacity-70 leading-relaxed">
          {tr("LARPILOTE travaille en arrière-plan pour absorber une partie de votre charge de travail.")}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {keep.map((k) => (
            <span key={k} className="border border-noir/15 px-4 py-2 text-sm">{tr(k)}</span>
          ))}
        </div>
        <p className="mt-6 font-display text-lg">{tr("Nous nous occupons du back-office.")}</p>
      </Section>

      <Section tone="beige" kicker={tr("Notre périmètre")} title={tr("Ce que LARPILOTE peut prendre en charge")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {scope.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full border border-noir/10 bg-paper p-6">
                <Icon name={s.icon} className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <p className="mt-4 font-display text-lg">{tr(s.title)}</p>
                <p className="mt-2 text-sm opacity-70 leading-relaxed">{tr(s.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="noir" align="center" kicker={tr("Marque blanche")} title={tr("Votre marque. Vos clients. Notre back-office.")}>
        <p className="max-w-lg mx-auto opacity-80">{tr("LARPILOTE peut travailler en marque blanche.")}</p>
        <p className="mt-3 max-w-lg mx-auto opacity-70 leading-relaxed text-sm">
          {tr("Pour vos clients, votre conciergerie reste leur interlocuteur. En arrière-plan, LARPILOTE vous aide à absorber le volume opérationnel.")}
        </p>
      </Section>

      <Section kicker={tr("Le fonctionnement")} title={tr("Comment ça fonctionne ?")}>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="kicker mb-4 !text-noir/50">{tr("Vous nous fournissez")}</p>
            <ul className="space-y-2.5">
              {provide.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm">
                  <Icon name="check" className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  {tr(p)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker mb-4 !text-noir/50">LARPILOTE</p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
              {flow.map((f, i) => (
                <span key={f} className="flex items-center gap-2">
                  <span className="border border-noir/15 px-3 py-1.5 capitalize">{tr(f)}</span>
                  {i < flow.length - 1 && <span className="opacity-40">→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="beige" kicker="Relais" title="Relais">
        <div className="max-w-xl">
          <p className="text-base opacity-60">{relais.pricePrefix}</p>
          <p className="font-display text-3xl md:text-4xl">{relais.price} <span className="text-base font-body opacity-60">{relais.unit}</span></p>
          <p className="mt-6 text-sm opacity-70">{tr("Offre sur étude personnalisée, adaptée à votre portefeuille.")}</p>
          <div className="mt-8">
            <Button to="/#relais" variant="dark" withArrow>{relais.cta}</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
