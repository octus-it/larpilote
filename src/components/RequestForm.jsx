import { useState } from 'react'
import { LocLink as Link, useLang, useTr } from '../i18n/index.jsx'
import { Icon } from '../lib/icons'
import Button from './ui/Button'
import { requestEmail, requestForms, requestProfiles } from '../data'

// Fonction Netlify (netlify/functions/send-request.js) qui envoie l'e-mail via Resend.
const ENDPOINT = '/api/send-request'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const emptyForm = {
  name: '',
  email: '',
  profile: '',
  units: '',
  bookings: '',
  platforms: [],
  platform: '',
  need: '',
  listingUrl: '',
  objective: '',
  message: '',
  consent: false,
  honey: '',
}

function validate(form, config) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Veuillez indiquer votre nom et prénom.'
  if (!form.email.trim()) errors.email = 'Veuillez indiquer votre adresse e-mail.'
  else if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = 'Veuillez indiquer une adresse e-mail valide.'
  if (!form.profile) errors.profile = 'Veuillez choisir votre profil.'
  if (!(Number(form.units) >= 1)) errors.units = 'Veuillez indiquer le nombre de logements.'
  if (config.bookings && !(Number(form.bookings) >= 0 && form.bookings !== '')) {
    errors.bookings = 'Veuillez indiquer un nombre approximatif de réservations.'
  }
  if (config.platforms && form.platforms.length === 0) errors.platforms = 'Veuillez choisir au moins une plateforme.'
  if (config.needs && !form.need) errors.need = 'Veuillez choisir votre besoin principal.'
  if (config.platform && !form.platform) errors.platform = 'Veuillez choisir la plateforme concernée.'
  if (config.listingUrl) {
    try {
      const url = new URL(form.listingUrl.trim())
      if (!/^https?:$/.test(url.protocol)) throw new Error()
    } catch {
      errors.listingUrl = 'Veuillez indiquer le lien complet de l’annonce (https://…).'
    }
  }
  if (config.objectives && !form.objective) errors.objective = 'Veuillez choisir l’objectif principal de l’audit.'
  if (!form.consent) errors.consent = 'Veuillez accepter l’utilisation de vos informations pour envoyer la demande.'
  return errors
}

function buildPayload(type, form, config, lang) {
  const fields = [
    ['Nom et prénom', form.name.trim()],
    ['Adresse e-mail', form.email.trim()],
    ['Profil', form.profile],
    ['Nombre de logements', form.units],
  ]
  if (config.formule) fields.push(['Formule souhaitée', config.formule])
  if (config.bookings) fields.push(['Réservations par mois (approx.)', form.bookings])
  if (config.platforms) fields.push(['Plateformes utilisées', form.platforms.join(', ')])
  if (config.needs) fields.push(['Besoin principal', form.need])
  if (config.platform) fields.push(['Plateforme concernée', form.platform])
  if (config.listingUrl) fields.push(['Lien de l’annonce', form.listingUrl.trim()])
  if (config.objectives) fields.push(['Objectif principal de l’audit', form.objective])
  fields.push(['Message complémentaire', form.message.trim() || '—'])
  fields.push(['Consentement', 'Accepté'])
  fields.push(['Langue du site', lang === 'en' ? 'Anglais' : 'Français'])
  return { type, email: form.email.trim(), honey: form.honey, fields }
}

export default function RequestForm({ type }) {
  const tr = useTr()
  const lang = useLang()
  const config = requestForms[type]
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))
  }

  const toggle = (key, value) =>
    set(key, form[key].includes(value) ? form[key].filter((v) => v !== value) : [...form[key], value])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(form, config)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = e.currentTarget.querySelector(`[data-field="${Object.keys(found)[0]}"]`)
      first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    // Honeypot rempli : robot probable, on simule un succès sans rien envoyer.
    if (form.honey) {
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(buildPayload(type, form, config, lang)),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success !== true) throw new Error('send failed')
      setStatus('sent')
      window.gtag?.('event', 'form_submit', { form_name: type })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-noir/15 p-8 sm:p-10 text-center" role="status">
        <Icon name="check" className="w-8 h-8 mx-auto text-gold" strokeWidth={1.5} />
        <p className="mt-5 opacity-80 max-w-sm mx-auto leading-relaxed">
          {tr('Merci pour votre demande. Votre message a bien été transmis à LARPILOTE. Nous reviendrons vers vous pour étudier votre besoin et vous préciser les prochaines étapes.')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Field name="name" label="Nom et prénom" error={errors.name}>
          <input
            autoComplete="name"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            className="input"
          />
        </Field>
        <Field name="email" label="Adresse e-mail" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <Field name="profile" label="Profil" error={errors.profile} group>
        <div className="flex flex-col sm:flex-row gap-3">
          {requestProfiles.map((v) => (
            <Choice key={v} type="radio" name={`${type}-profile`} label={v} checked={form.profile === v} onChange={() => set('profile', v)} />
          ))}
        </div>
      </Field>

      <div className="grid sm:grid-cols-2 gap-6">
        <Field name="units" label="Nombre de logements" error={errors.units}>
          <input
            type="number"
            min="1"
            inputMode="numeric"
            value={form.units}
            onChange={(e) => set('units', e.target.value)}
            className="input"
          />
        </Field>
        {config.formule && (
          <Field name="formule" label="Formule souhaitée">
            <input value={config.formule} readOnly className="input bg-beige/40 cursor-default" />
          </Field>
        )}
        {config.bookings && (
          <Field name="bookings" label="Réservations par mois (approx.)" error={errors.bookings}>
            <input
              type="number"
              min="0"
              inputMode="numeric"
              value={form.bookings}
              onChange={(e) => set('bookings', e.target.value)}
              className="input"
            />
          </Field>
        )}
      </div>

      {config.platforms && (
        <Field name="platforms" label="Plateformes utilisées" error={errors.platforms} group>
          <div className="flex flex-wrap gap-3">
            {config.platforms.map((p) => (
              <Choice key={p} type="checkbox" label={p} checked={form.platforms.includes(p)} onChange={() => toggle('platforms', p)} />
            ))}
          </div>
        </Field>
      )}

      {config.needs && (
        <Field name="need" label="Besoin principal" error={errors.need}>
          <Select value={form.need} onChange={(v) => set('need', v)} options={config.needs} />
        </Field>
      )}

      {config.platform && (
        <Field name="platform" label="Plateforme concernée" error={errors.platform} group>
          <div className="flex flex-wrap gap-3">
            {config.platform.map((p) => (
              <Choice key={p} type="radio" name={`${type}-platform`} label={p} checked={form.platform === p} onChange={() => set('platform', p)} />
            ))}
          </div>
        </Field>
      )}

      {config.listingUrl && (
        <Field name="listingUrl" label="Lien de l’annonce à auditer" error={errors.listingUrl}>
          <input
            type="url"
            inputMode="url"
            placeholder="https://"
            value={form.listingUrl}
            onChange={(e) => set('listingUrl', e.target.value)}
            className="input"
          />
        </Field>
      )}

      {config.objectives && (
        <Field name="objective" label="Objectif principal de l’audit" error={errors.objective}>
          <Select value={form.objective} onChange={(v) => set('objective', v)} options={config.objectives} />
        </Field>
      )}

      <Field name="message" label="Message complémentaire (facultatif)">
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          className="input resize-none"
        />
      </Field>

      {/* Champ piège anti-spam : invisible pour les visiteurs, rempli par les robots. */}
      <div aria-hidden="true" className="hidden">
        <label>
          Ne pas remplir
          <input tabIndex={-1} autoComplete="off" value={form.honey} onChange={(e) => set('honey', e.target.value)} />
        </label>
      </div>

      <div data-field="consent">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set('consent', e.target.checked)}
            className="mt-0.5 w-5 h-5 shrink-0 accent-noir"
          />
          <span className="text-sm opacity-80 leading-relaxed">
            {tr('J’accepte que LARPILOTE utilise ces informations pour répondre à ma demande.')}{' '}
            <Link to="/confidentialite" target="_blank" className="underline hover:text-gold-dark">
              {tr('Voir la politique de confidentialité.')}
            </Link>
          </span>
        </label>
        {errors.consent && <p className="mt-2 text-xs text-red-700">{tr(errors.consent)}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm border border-red-700/40 text-red-800 px-4 py-3" role="alert">
          {tr('Votre demande n’a pas pu être envoyée. Veuillez réessayer dans quelques instants ou nous écrire directement à')}{' '}
          <a href={`mailto:${requestEmail}`} className="underline">{requestEmail}</a>.
        </p>
      )}

      <Button type="submit" variant="dark" className="w-full sm:w-auto" withArrow disabled={status === 'sending'}>
        {status === 'sending' ? tr('Envoi en cours…') : tr('Envoyer ma demande')}
      </Button>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(17,16,17,0.2);
          padding: 0.85rem 1rem;
          font-size: 16px;
        }
        .input:focus { outline: none; border-color: #111111; }
      `}</style>
    </form>
  )
}

function Field({ name, label, error, group = false, children }) {
  const tr = useTr()
  const Comp = group ? 'fieldset' : 'label'
  const Title = group ? 'legend' : 'span'
  return (
    <Comp className="block" data-field={name}>
      <Title className="block text-xs font-mono uppercase tracking-wide opacity-60 mb-2.5">{tr(label)}</Title>
      {children}
      {error && <p className="mt-2 text-xs text-red-700">{tr(error)}</p>}
    </Comp>
  )
}

function Choice({ type, name, label, checked, onChange }) {
  const tr = useTr()
  return (
    <label
      className={`relative flex-1 sm:flex-none border px-4 py-3 text-sm text-center cursor-pointer transition-colors ${
        checked ? 'border-noir bg-noir text-paper' : 'border-noir/20 hover:border-noir/40'
      }`}
    >
      <input type={type} name={name} className="sr-only" checked={checked} onChange={onChange} />
      {tr(label)}
    </label>
  )
}

function Select({ value, onChange, options }) {
  const tr = useTr()
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="input appearance-auto">
      <option value="">{tr('Choisir…')}</option>
      {options.map((o) => (
        <option key={o} value={o}>{tr(o)}</option>
      ))}
    </select>
  )
}
