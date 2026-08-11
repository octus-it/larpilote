import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { faq } from '../data'

function Item({ q, a, open, onClick }) {
  return (
    <div className="border-b border-ink/10 py-6">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left gap-6"
      >
        <span className="font-display text-lg sm:text-xl font-medium">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-2xl text-ochre shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-ink/65 leading-relaxed pt-4 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
      <Reveal className="max-w-xl mb-10">
        <span className="font-mono text-xs tracking-[0.2em] text-marine-dark">
          QUESTIONS FRÉQUENTES
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Avant de vous lancer
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div>
          {faq.map((f, i) => (
            <Item
              key={i}
              q={f.q}
              a={f.a}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
