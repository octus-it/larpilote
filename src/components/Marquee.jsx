import { motion } from 'framer-motion'
import { channels } from '../data'

export default function Marquee() {
  const loop = [...channels, ...channels]

  return (
    <section className="border-y border-ink/10 bg-sand overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <span className="font-mono text-xs tracking-widest text-ink/50">
          CANAUX GÉRÉS POUR VOUS
        </span>
      </div>
      <div className="py-6 overflow-hidden">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 22 }}
        >
          {loop.map((c, i) => (
            <span
              key={i}
              className="font-display text-2xl sm:text-3xl text-ink/25 whitespace-nowrap"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
