import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { stats } from '../data'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix
    })
    return unsub
  }, [spring, suffix])

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-semibold text-paper">
      0{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-marine-dark">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="text-paper/70 text-sm mt-2 leading-snug max-w-[16ch]">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
