import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { plans } from '../data'

export default function Order() {
  const { slug } = useParams()
  const plan = plans.find((p) => p.slug === slug)

  const [form, setForm] = useState({ name: '', contact: '', biens: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  if (!plan) {
    return (
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center">
        <p className="font-display text-2xl mb-4">Offre introuvable.</p>
        <Link to="/#tarifs" className="text-marine-dark underline underline-offset-4">
          Retour aux tarifs
        </Link>
      </section>
    )
  }

  return (
    <section className="max-w-5xl mx-auto px-6 pt-28 pb-24">
      <Reveal>
        <Link
          to="/#tarifs"
          className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-ochre transition-colors mb-10"
        >
          ← Retour aux tarifs
        </Link>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 items-start">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.2em] text-marine-dark">
            VOUS CHOISISSEZ
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold mt-3 mb-4 leading-tight">
            {plan.name}
          </h1>
          <div className="mb-6">
            <span className="font-display text-3xl font-semibold text-ink">
              {plan.price}
            </span>
            <span className="ml-2 font-mono text-xs text-ink/50">{plan.unit}</span>
          </div>
          <p className="text-ink/60 leading-relaxed mb-8 max-w-sm">{plan.desc}</p>
          <ul className="space-y-2.5 text-sm">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-ink/75">
                <span className="text-ochre">+</span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="stub-edge grain bg-paper border border-ink/10 rounded-sm shadow-[6px_8px_0_rgba(20,36,48,0.12)] p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <p className="font-display text-2xl mb-2">Demande envoyée.</p>
                <p className="text-sm text-ink/60">
                  On revient vers vous très vite au sujet de l’offre {plan.name}.
                </p>
              </motion.div>
            ) : (
              <div className="grid gap-4">
                <div className="flex items-center justify-between pb-4 mb-2 border-b border-dashed border-ink/15">
                  <span className="font-mono text-[10px] tracking-widest text-marine-dark">
                    DEMANDE
                  </span>
                  <span className="stamp text-[10px] font-mono tracking-widest px-2 py-0.5 text-ember">
                    {plan.name.toUpperCase()}
                  </span>
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest text-ink/50 mb-1">
                    NOM
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-sand/60 border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest text-ink/50 mb-1">
                    EMAIL OU WHATSAPP
                  </label>
                  <input
                    required
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    className="w-full bg-sand/60 border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest text-ink/50 mb-1">
                    NOMBRE DE BIENS
                  </label>
                  <input
                    name="biens"
                    value={form.biens}
                    onChange={handleChange}
                    className="w-full bg-sand/60 border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
                    placeholder="Ex : 2 biens à louer, 1 à vendre"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest text-ink/50 mb-1">
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-sand/60 border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
                    placeholder="Un contexte, une contrainte, une échéance..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-2 bg-ink text-paper px-6 py-3 rounded-sm font-medium hover:bg-marine transition-colors"
                >
                  Envoyer ma demande
                </motion.button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
