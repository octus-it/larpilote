import { motion } from 'framer-motion'

export default function GlowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[520px] h-[520px] rounded-full bg-gold/10 blur-[120px]"
        style={{ top: '-15%', left: '-8%' }}
        animate={{ x: [0, 50, 0], y: [0, 35, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[440px] h-[440px] rounded-full bg-sauge/10 blur-[110px]"
        style={{ bottom: '-15%', right: '-8%' }}
        animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full bg-gold-light/10 blur-[100px]"
        style={{ top: '35%', left: '45%' }}
        animate={{ x: [0, 25, 0], y: [0, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
