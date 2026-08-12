import { motion } from 'framer-motion'
import Reveal from '../Reveal'

function Connector({ delay = 0 }) {
  return (
    <div className="relative hidden md:block w-14 shrink-0 self-center h-px">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        style={{ transformOrigin: 'left' }}
        className="absolute inset-x-0 top-0 h-px bg-gold/40"
      />
      <motion.span
        className="absolute top-1/2 w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-gold-light"
        animate={{ left: ['0%', '92%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 }}
      />
    </div>
  )
}

export default function Flow({ items, tone = 'paper' }) {
  const border = tone === 'noir' ? 'border-paper/15' : 'border-noir/15'
  return (
    <div className="flex flex-col md:flex-row items-stretch max-w-5xl mx-auto">
      {items.map((item, i) => (
        <div key={item.title} className="flex flex-col md:flex-row items-center flex-1">
          <Reveal delay={i * 0.1} className="w-full h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`h-full border ${border} px-6 py-8 text-center hover:border-gold/50 transition-colors duration-300`}
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-gold/50 text-gold-light font-mono text-xs">
                {i + 1}
              </span>
              <p className="mt-4 font-display text-lg md:text-xl">{item.title}</p>
              {item.text && <p className="mt-2 text-sm opacity-70">{item.text}</p>}
            </motion.div>
          </Reveal>
          {i < items.length - 1 && <Connector delay={i * 0.1 + 0.15} />}
          {i < items.length - 1 && (
            <div className="md:hidden flex justify-center py-2">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-px h-6 bg-gold/40"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
