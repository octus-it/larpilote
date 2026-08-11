import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { steps } from '../data'

export default function Process() {
  return (
    <section id="comment" className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="max-w-xl mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-ochre">
            COMMENT ÇA MARCHE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
            Trois étapes, aucune complication
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative overflow-hidden rounded-sm mb-6 h-56">
                <motion.img
                  src={s.image}
                  alt={s.title}
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink/20" />
              </div>
              <span className="font-mono text-sm text-ochre">{s.n}</span>
              <h3 className="font-display text-xl font-medium mt-3 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-paper/65 leading-relaxed">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
