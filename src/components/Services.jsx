import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { services } from '../data'

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="max-w-xl mb-14">
        <span className="font-mono text-xs tracking-[0.2em] text-marine-dark">
          SERVICES
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Ce qu’on gère pour vous
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-sm bg-ink h-96"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className="font-mono text-[11px] tracking-widest text-ochre mb-2">
                  {s.label}
                </span>
                <h3 className="font-display text-xl font-medium text-paper mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-paper/70 leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
