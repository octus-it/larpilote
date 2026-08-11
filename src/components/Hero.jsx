import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { stubs, stats } from '../data'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const responseStat = stats.find((s) => s.suffix.trim() === 'min')

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % stubs.length)
    }, 3400)
    return () => clearInterval(id)
  }, [])

  const featured = stubs[index]

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.12, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://picsum.photos/seed/larpilote-hero/1800/1200"
          alt="Villa gérée par Larpilote"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent lg:to-ink/5" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 w-full grid lg:grid-cols-[1fr_340px] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-block font-mono text-xs tracking-[0.2em] text-ochre mb-4"
          >
            CONCIERGERIE DIGITALE — DAKAR
          </motion.span>
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-6xl font-semibold leading-[1.05] text-paper mb-6"
          >
            Pilotez vos biens.
            <br />
            On gère la conversation.
          </motion.h1>
          <motion.p
            variants={item}
            className="text-paper/75 text-lg leading-relaxed mb-8 max-w-md"
          >
            Vous avez des biens à louer sur Airbnb ou à vendre. Larpilote répond
            aux voyageurs et aux acheteurs, tient vos annonces à jour et ne vous
            transmet que ce qui mérite votre attention.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-ochre text-ink px-6 py-3 rounded-sm font-medium hover:bg-paper transition-colors"
            >
              Parler à un conseiller
            </a>
            <a
              href="#tarifs"
              className="border border-paper/30 text-paper px-6 py-3 rounded-sm font-medium hover:border-paper/70 transition-colors"
            >
              Voir les offres
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: '-3deg' }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, y: -6, transition: { duration: 0.3 } }}
          className="stub-edge grain hidden lg:block w-full justify-self-end bg-paper border border-ink/10 rounded-sm shadow-[6px_8px_0_rgba(20,36,48,0.25)] p-5 pr-7"
        >
          <div className="relative h-36 overflow-hidden mb-4">
            <AnimatePresence initial={false}>
              <motion.div
                key={featured.time}
                initial={{ y: 44, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -44, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-widest text-marine-dark">
                    {featured.channel}
                  </span>
                  <span className="font-mono text-[10px] text-ink/40">{featured.time}</span>
                </div>
                <p className="font-display text-base text-ink/90 leading-snug mb-3 line-clamp-2">
                  “{featured.excerpt}”
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ink/50">{featured.from}</span>
                  <span className="stamp text-[10px] font-mono tracking-widest px-2 py-0.5 text-ember">
                    RÉPONDU
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-1.5 mb-4">
            {stubs.map((s, i) => (
              <span
                key={s.channel}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-4 bg-ochre' : 'w-1.5 bg-ink/15'
                }`}
              />
            ))}
          </div>

          {responseStat && (
            <div className="flex items-baseline gap-2 pt-4 border-t border-dashed border-ink/15">
              <span className="font-display text-3xl text-marine-dark leading-none">
                {responseStat.value}{responseStat.suffix}
              </span>
              <span className="text-xs text-ink/50 leading-snug">
                de temps de réponse
                <br />
                en moyenne
              </span>
            </div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-paper/60"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="block w-px h-8 bg-paper/40"
        />
        <span className="font-mono text-[10px] tracking-widest">DÉFILER</span>
      </motion.div>
    </section>
  )
}
