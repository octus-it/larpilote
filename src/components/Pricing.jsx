import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { plans } from '../data'

export default function Pricing({ onSelectPlan }) {
  return (
    <section id="tarifs" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="max-w-xl mb-14">
        <span className="font-mono text-xs tracking-[0.2em] text-marine-dark">
          TARIFS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Une offre selon la taille de votre portefeuille
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-sm p-8 border flex flex-col h-full ${
                p.featured
                  ? 'bg-ink text-paper border-ink shadow-xl'
                  : 'bg-paper border-ink/15'
              }`}
            >
              {p.featured && (
                <span className="font-mono text-[10px] tracking-widest text-ochre mb-3">
                  LE PLUS CHOISI
                </span>
              )}
              <h3 className="font-display text-xl font-medium mb-1">{p.name}</h3>
              <p className={`text-sm mb-6 ${p.featured ? 'text-paper/60' : 'text-ink/55'}`}>
                {p.desc}
              </p>
              <div className="mb-6">
                <span className="font-display text-3xl font-semibold">{p.price}</span>
                <div className={`font-mono text-[11px] mt-1 ${p.featured ? 'text-paper/50' : 'text-ink/45'}`}>
                  {p.unit}
                </div>
              </div>
              <ul className="space-y-2 mb-8 text-sm flex-1">
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-2 ${p.featured ? 'text-paper/80' : 'text-ink/70'}`}
                  >
                    <span className={p.featured ? 'text-ochre' : 'text-marine'}>+</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => onSelectPlan?.(p)}
                className={`text-center px-5 py-3 rounded-sm text-sm font-medium transition-colors ${
                  p.featured
                    ? 'bg-ochre text-ink hover:bg-paper'
                    : 'bg-ink text-paper hover:bg-marine'
                }`}
              >
                Choisir {p.name}
              </a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
