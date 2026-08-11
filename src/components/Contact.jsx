import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Contact({ selectedPlan, onClearPlan }) {
  const [form, setForm] = useState({ name: '', contact: '', biens: '', message: '', offer: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (selectedPlan) {
      setForm((f) => ({ ...f, offer: selectedPlan.name }))
    }
  }, [selectedPlan])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function clearPlan() {
    onClearPlan?.()
    setForm((f) => ({ ...f, offer: '' }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-stretch">
      <Reveal className="relative rounded-sm overflow-hidden min-h-[320px]">
        <img
          src="https://picsum.photos/seed/larpilote-contact/1000/1200"
          alt="Équipe Larpilote"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <span className="font-mono text-xs tracking-[0.2em] text-ochre mb-3">
            CONTACT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-4">
            Parlons de vos biens
          </h2>
          <p className="text-paper/75 leading-relaxed max-w-sm">
            Dites-nous ce que vous gérez aujourd’hui, on revient vers vous sous
            24h avec une offre adaptée.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="bg-sand rounded-sm p-8 h-full">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <p className="font-display text-2xl mb-2">Message envoyé.</p>
              <p className="text-sm text-ink/60">
                {form.offer
                  ? `On revient vers vous très vite au sujet de l’offre ${form.offer}.`
                  : 'On revient vers vous très vite.'}
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-4">
              {selectedPlan && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between gap-3 rounded-sm border border-dashed border-ochre/50 bg-paper px-4 py-3"
                >
                  <div>
                    <span className="block font-mono text-[10px] tracking-widest text-marine-dark mb-0.5">
                      OFFRE SÉLECTIONNÉE
                    </span>
                    <span className="font-display text-sm text-ink">{selectedPlan.name}</span>
                    <span className="ml-2 font-mono text-[11px] text-ink/50">
                      {selectedPlan.price} {selectedPlan.unit}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={clearPlan}
                    aria-label="Retirer l’offre sélectionnée"
                    className="text-lg leading-none text-ink/40 transition-colors hover:text-ochre"
                  >
                    &times;
                  </button>
                </motion.div>
              )}
              <input type="hidden" name="offer" value={form.offer} />
              <div>
                <label className="block text-xs font-mono tracking-widest text-ink/50 mb-1">
                  NOM
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-paper border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
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
                  className="w-full bg-paper border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
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
                  className="w-full bg-paper border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
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
                  className="w-full bg-paper border border-ink/15 rounded-sm px-4 py-2.5 focus:border-marine outline-none transition-colors"
                  placeholder="Un contexte, une contrainte, une échéance..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-2 bg-ink text-paper px-6 py-3 rounded-sm font-medium hover:bg-marine transition-colors"
              >
                Envoyer
              </motion.button>
            </div>
          )}
        </form>
      </Reveal>
    </section>
  )
}
