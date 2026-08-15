import { useSearchParams } from 'react-router-dom'
import { Icon, WhatsAppIcon } from '../lib/icons'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import ContactForm from '../components/ContactForm'
import { plans, whatsappLink } from '../data'

export default function ContactPage() {
  const [params] = useSearchParams()
  const forfaitSlug = params.get('forfait')
  const profilParam = params.get('profil')
  const plan = plans.find((p) => p.slug === forfaitSlug)

  const initialProfile = profilParam === 'proprietaire'
    ? 'Propriétaire'
    : profilParam === 'conciergerie'
      ? 'Conciergerie'
      : plan?.audience === 'conciergerie'
        ? 'Conciergerie'
        : plan?.audience === 'proprietaire'
          ? 'Propriétaire'
          : ''

  return (
    <>
      <PageHero
        image="/images/hero-contact.jpg"
        minHeight={false}
        kicker="Contact"
        title="Parlons de votre activité."
        subtitle="Vous êtes propriétaire d’une location courte durée ou dirigez une conciergerie ?"
        text="Expliquez-nous votre situation. Nous déterminerons ensemble le niveau de pilotage dont vous avez besoin."
      />

      <Section>
        <div className="grid lg:grid-cols-[1fr_360px] gap-14">
          <div>
            <ContactForm plan={plan} initialProfile={initialProfile} />
          </div>

          <div>
            <p className="kicker mb-6">Besoin d’une réponse rapide ?</p>
            <div className="space-y-6">
              <a
                href={whatsappLink('Bonjour LARPILOTE, j’aimerais échanger sur mon activité.')}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 border border-noir/10 p-5 hover:border-noir/30 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-display text-lg">WhatsApp</p>
                  <p className="text-sm opacity-70 mt-1">Échangez directement avec notre équipe.</p>
                </div>
              </a>
              <a
                href="mailto:contact@larpilote.com"
                className="flex items-start gap-4 border border-noir/10 p-5 hover:border-noir/30 transition-colors"
              >
                <Icon name="mail" className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="font-display text-lg">E-mail</p>
                  <p className="text-sm opacity-70 mt-1">Pour les demandes détaillées et professionnelles.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
