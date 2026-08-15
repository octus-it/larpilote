import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from '../lib/icons'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export function HeroCTA({ to, children, variant = 'secondary' }) {
  const primary = variant === 'primary'
  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Link
        to={to}
        className={`group relative inline-flex items-center gap-3 rounded-full px-7 py-4 font-mono text-xs tracking-[0.14em] uppercase overflow-hidden transition-shadow duration-300 ${
          primary
            ? 'bg-paper text-noir hover:shadow-[0_0_0_1px_rgba(184,154,90,0.6),0_8px_24px_-4px_rgba(184,154,90,0.35)]'
            : 'text-paper border border-paper/40 hover:border-gold-light/70'
        }`}
      >
        {!primary && (
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-gold to-gold-light origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
        )}
        <span className={!primary ? 'transition-colors duration-300 group-hover:text-noir' : ''}>{children}</span>
        <Icon
          name="arrowRight"
          className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${!primary ? 'group-hover:text-noir' : ''}`}
          strokeWidth={1.75}
        />
      </Link>
    </motion.div>
  )
}

export default function HeroHome({ image, kicker, title, subtitle, text, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '8%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7])

  return (
    <section
      ref={ref}
      className="relative isolate flex items-center min-h-[620px] md:min-h-screen bg-noir px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src={image}
          alt=""
          style={{ y }}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.09, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[15%] left-0 w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/45 to-noir/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/75 via-noir/15 to-transparent" />
        <motion.div className="absolute inset-0 bg-noir" style={{ opacity: overlayOpacity }} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-page mx-auto w-full text-paper pt-20 pb-16 md:pt-16 md:pb-16"
      >
        {kicker && (
          <motion.p variants={item} className="kicker mb-5 text-gold-light flex items-center gap-3">
            <span className="w-8 h-px bg-gold-light/60" />
            {kicker}
          </motion.p>
        )}
        <motion.h1 variants={item} className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={item} className="mt-6 text-base md:text-2xl max-w-xl font-light opacity-85">
            {subtitle}
          </motion.p>
        )}
        {text && (
          <motion.p variants={item} className="mt-4 text-sm md:text-sm italic max-w-xl font-light opacity-65 leading-relaxed hidden sm:block">
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div variants={item} className="mt-8 md:mt-10">
            {children}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-paper/50"
      >
        <span className="kicker !text-paper/50">Découvrir</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <Icon name="arrowRight" className="w-4 h-4 rotate-90" strokeWidth={1.5} />
        </motion.span>
      </motion.div>
    </section>
  )
}
