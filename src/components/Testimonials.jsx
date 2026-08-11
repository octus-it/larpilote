import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data'

export default function Testimonials() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[i]

  return (
    <section className="bg-sand border-y border-ink/10 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-2xl sm:text-3xl leading-snug text-ink/90 mb-8">
              « {t.quote} »
            </p>
            <div className="flex items-center justify-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover border border-ink/10"
              />
              <div className="text-left">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="font-mono text-[11px] tracking-widest text-ink/50">
                  {t.role.toUpperCase()}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Témoignage ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? 'w-8 bg-ochre' : 'w-1.5 bg-ink/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
