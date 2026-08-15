import { useRef, useState } from 'react'
import { Icon } from '../lib/icons'
import Button from './ui/Button'
import PayPalButton from './PayPalButton'
import { contactPlatforms, contactDelegation } from '../data'

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

export default function ContactForm({ plan, initialProfile = '', onSent }) {
  const [form, setForm] = useState(() => ({
    ...emptyForm,
    profile: initialProfile,
    message: plan ? `Je souhaite en savoir plus sur la formule ${plan.name}.` : '',
  }))
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)
  const paypalPlanId = plan?.paypalPlanId

  const toggle = (key, value) => {
    setForm((f) => ({
      ...f,
      [key]: f[key].includes(value) ? f[key].filter((v) => v !== value) : [...f[key], value],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    onSent?.()
  }

  // The subscription is only created once the visitor has filled in every
  // required field — payment finalizes the request, it doesn't gate filling it.
  const createSubscription = (data, actions) => {
    if (!formRef.current.reportValidity()) {
      return Promise.reject(new Error('form-incomplete'))
    }
    return actions.subscription.create({ plan_id: paypalPlanId })
  }

  if (sent) {
    return (
      <div className="border border-noir/15 p-10 text-center">
        <Icon name="check" className="w-8 h-8 mx-auto text-gold" strokeWidth={1.5} />
        <p className="mt-5 font-display text-2xl">Merci.</p>
        <p className="mt-3 opacity-70 max-w-sm mx-auto">
          {paypalPlanId
            ? 'Votre paiement a bien été confirmé et votre demande transmise. L’équipe LARPILOTE reviendra vers vous rapidement.'
            : 'Votre demande a bien été reçue. L’équipe LARPILOTE reviendra vers vous rapidement.'}
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      {plan && (
        <p className="text-sm border border-gold/40 text-gold-dark px-4 py-3">
          Concernant l’offre <strong>{plan.name}</strong>
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

      {paypalPlanId ? (
        <div>
          <p className="mb-4 text-sm border border-gold/40 text-gold-dark px-4 py-3 leading-relaxed">
            L’abonnement se règle à l’envoi de la demande. Le paiement finalise votre inscription
            à la formule {plan.name}.
          </p>
          <PayPalButton
            planId={paypalPlanId}
            createSubscription={createSubscription}
            onApprove={() => {
              setSent(true)
              onSent?.()
            }}
          />
        </div>
      ) : (
        <Button type="submit" variant="dark" className="w-full sm:w-auto" withArrow>
          Envoyer ma demande
        </Button>
      )}

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
    </form>
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
