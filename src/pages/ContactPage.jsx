import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Icon, WhatsAppIcon } from '../lib/icons'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import { contactPlatforms, contactDelegation, plans, whatsappLink } from '../data'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  profile: '',
  city: '',
  units: '',
  platforms: [],
  delegation: [],
  message: '',
}

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

  const [form, setForm] = useState(() => ({
    ...emptyForm,
    profile: initialProfile,
    message: plan ? `Je souhaite en savoir plus sur la formule ${plan.name}.` : '',
  }))
  const [sent, setSent] = useState(false)

  const toggle = (key, value) => {
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const planNote = useMemo(() => plan?.name, [plan])

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
            {sent ? (
              <div className="border border-noir/15 p-10 text-center">
                <Icon name="check" className="w-8 h-8 mx-auto text-gold" strokeWidth={1.5} />
                <p className="mt-5 font-display text-2xl">Merci.</p>
                <p className="mt-3 opacity-70 max-w-sm mx-auto">
                  Votre demande a bien été reçue. L’équipe LARPILOTE reviendra vers vous rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {planNote && (
                  <p className="text-sm border border-gold/40 text-gold-dark px-4 py-3">
                    Concernant l’offre <strong>{planNote}</strong>
                  </p>
                )}

                <p className="kicker">Votre projet</p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Nom et prénom">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input"
                    />
                  </Field>
                  <Field label="Adresse e-mail">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input"
                    />
                  </Field>
                </div>

                <Field label="Téléphone / WhatsApp">
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="input"
                  />
                </Field>

                <Field label="Vous êtes">
                  <div className="flex gap-3">
                    {['Propriétaire', 'Conciergerie'].map((v) => (
                      <label key={v} className={`relative flex-1 border px-4 py-3 text-sm text-center cursor-pointer transition-colors ${form.profile === v ? 'border-noir bg-noir text-paper' : 'border-noir/20'}`}>
                        <input
                          type="radio"
                          name="profile"
                          className="sr-only"
                          checked={form.profile === v}
                          onChange={() => setForm({ ...form, profile: v })}
                        />
                        {v}
                      </label>
                    ))}
                  </div>
                </Field>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Ville / pays du logement">
                    <input
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="input"
                    />
                  </Field>
                  <Field label="Nombre de logements">
                    <input
                      value={form.units}
                      onChange={(e) => setForm({ ...form, units: e.target.value })}
                      className="input"
                    />
                  </Field>
                </div>

                <Field label="Plateformes utilisées">
                  <div className="flex flex-wrap gap-3">
                    {contactPlatforms.map((p) => (
                      <Checkbox key={p} label={p} checked={form.platforms.includes(p)} onChange={() => toggle('platforms', p)} />
                    ))}
                  </div>
                </Field>

                <Field label="Que souhaitez-vous déléguer ?">
                  <div className="flex flex-wrap gap-3">
                    {contactDelegation.map((d) => (
                      <Checkbox key={d} label={d} checked={form.delegation.includes(d)} onChange={() => toggle('delegation', d)} />
                    ))}
                  </div>
                </Field>

                <Field label="Parlez-nous de votre besoin">
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input resize-none"
                  />
                </Field>

                <Button type="submit" variant="dark" className="w-full sm:w-auto" withArrow>
                  Envoyer ma demande
                </Button>
              </form>
            )}
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

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(17,16,17,0.2);
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
        }
        .input:focus { outline: none; border-color: #111111; }
      `}</style>
    </>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-mono uppercase tracking-wide opacity-60 mb-2.5">{label}</span>
      {children}
    </label>
  )
}

function Checkbox({ label, checked, onChange }) {
  return (
    <label className={`relative border px-3.5 py-2 text-sm cursor-pointer transition-colors ${checked ? 'border-noir bg-noir text-paper' : 'border-noir/20'}`}>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      {label}
    </label>
  )
}
