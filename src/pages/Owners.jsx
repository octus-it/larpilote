import { Icon } from '../lib/icons'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { plans, whatsappLink } from '../data'

const tasks = [
  'Répondre aux voyageurs.',
  'Suivre les réservations.',
  'Mettre à jour les calendriers.',
  'Répondre aux avis.',
  'Surveiller les prix.',
  'Gérer les imprévus.',
]

const handled = [
  'Communication voyageurs',
  'Suivi des réservations',
  'Gestion Airbnb et Booking',
  'Optimisation des annonces',
  'Suivi des performances',
  'Recommandations tarifaires',
  'Reporting',
  'Coordination à distance des prestataires',
]

const keep = ['Vos comptes', 'Vos revenus', 'Vos prestataires', 'Vos équipes locales', 'Vos décisions']

const network = ['Une femme de ménage ?', 'Un plombier ?', 'Un serrurier ?', 'Un électricien ?', 'Une personne de confiance ?']

const ownerPlans = plans.filter((p) => p.slug !== 'relais')

export default function Owners() {
  return (
    <>
      <SEO {...seoData['/proprietaires']} path="/proprietaires" />
      <PageHero
        image="/images/hero-proprietaires.jpg"
        kicker="Propriétaires"
        title="Vous possédez le bien. Nous pilotons le quotidien."
        subtitle="Vous souhaitez louer votre logement en courte durée sans passer vos journées à gérer Airbnb, Booking et les voyageurs ?"
        text="LARPILOTE vous accompagne à distance tout en vous laissant le contrôle de votre bien."
      >
        <Button href={whatsappLink('Bonjour LARPILOTE, je suis propriétaire et j’aimerais échanger.')} variant="light" withArrow>Parler à LARPILOTE</Button>
      </PageHero>

      <Section kicker="Le constat" title="Votre logement ne devrait pas devenir un deuxième emploi.">
        <div className="grid sm:grid-cols-2 gap-2.5 max-w-2xl">
          {tasks.map((t) => (
            <p key={t} className="text-base opacity-75">{t}</p>
          ))}
        </div>
        <p className="mt-8 font-display text-xl md:text-2xl max-w-xl">Toutes ces tâches s’accumulent.</p>
        <p className="mt-3 opacity-70 max-w-xl">
          LARPILOTE prend en charge la partie digitale et opérationnelle que vous souhaitez déléguer.
        </p>
      </Section>

      <Section tone="beige" kicker="Notre périmètre" title="Ce que nous pouvons prendre en charge">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {handled.map((h, i) => (
            <Reveal key={h} delay={i * 0.04}>
              <div className="h-full border border-noir/10 bg-paper p-5 flex items-start gap-3">
                <Icon name="check" className="w-4 h-4 mt-1 text-gold shrink-0" strokeWidth={1.5} />
                <span className="text-sm">{h}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="noir" kicker="Votre contrôle" title="Et vous gardez le contrôle">
        <p className="max-w-xl opacity-80">
          Votre logement reste votre logement. Vous conservez :
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {keep.map((k) => (
            <li key={k} className="border border-paper/25 px-4 py-2 text-sm">{k}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl opacity-70 text-sm leading-relaxed border-t border-paper/15 pt-6">
          LARPILOTE intervient dans le périmètre que vous nous confiez.
        </p>
      </Section>

      <Section kicker="Votre équipe locale" title="Votre réseau local reste en place">
        <div className="max-w-xl">
          <p className="opacity-80">Vous avez déjà :</p>
          <ul className="mt-4 space-y-2">
            {network.map((n) => (
              <li key={n} className="opacity-75">{n}</li>
            ))}
          </ul>
          <p className="mt-6 font-display text-xl">Parfait.</p>
          <p className="mt-3 opacity-70 leading-relaxed">
            Vous nous transmettez leurs coordonnées et vos consignes. En cas de besoin, LARPILOTE peut
            assurer la coordination à distance.
          </p>
        </div>
      </Section>

      <Section tone="beige" kicker="Nos formules" title="Quelle formule vous correspond ?">
        <div className="grid sm:grid-cols-2 gap-6">
          {ownerPlans.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <div className="h-full border border-noir/15 bg-paper p-6">
                <p className="font-display text-xl">{p.name}</p>
                <p className="mt-1 text-sm font-mono opacity-60">
                  {/^[0-9][0-9\s]*$/.test(p.price) ? `${p.price} ${p.unit}` : p.price}
                </p>
                <p className="mt-3 text-sm opacity-70 leading-relaxed">{p.tagline}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button to="/#tarifs" variant="outline" withArrow>Comparer les formules</Button>
        </div>
      </Section>

      <Section align="center" kicker="Prochaine étape" title="Vous êtes prêt à déléguer ?" subtitle="Parlez-nous de votre logement et de vos besoins.">
        <Button to="/contact?profil=proprietaire" variant="dark" withArrow>Parler à LARPILOTE</Button>
      </Section>
    </>
  )
}
