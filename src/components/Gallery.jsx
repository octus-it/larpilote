import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { gallery } from '../data'

export default function Gallery() {
  return (
    <section id="biens" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="max-w-xl mb-14">
        <span className="font-mono text-xs tracking-[0.2em] text-marine-dark">
          BIENS PILOTÉS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Un aperçu de ce qu’on gère au quotidien
        </h2>
      </Reveal>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {gallery.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06} className="break-inside-avoid">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-sm group"
            >
              <img
                src={g.image}
                alt={g.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-[10px] tracking-widest text-ochre">
                  {g.tag.toUpperCase()}
                </span>
                <h3 className="font-display text-lg text-paper mt-1">{g.title}</h3>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
