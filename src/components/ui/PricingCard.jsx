import { motion } from 'framer-motion'
import { Icon } from '../../lib/icons'
import Button from './Button'
import Reveal from '../Reveal'

export default function PricingCard({ plan, delay = 0, onSelect }) {
  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        id={plan.slug}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className={`h-full flex flex-col border p-7 md:p-9 scroll-mt-28 text-noir hover:shadow-xl hover:shadow-noir/5 transition-[border-color,box-shadow] duration-300 ${
          plan.featured ? 'border-2 border-gold bg-white/60' : 'border-noir/15 bg-paper hover:border-gold/50'
        }`}
      >
        <h3 className="font-display text-2xl md:text-[28px]">{plan.name}</h3>
        <p className="mt-3 font-display text-3xl md:text-4xl leading-tight">
          {plan.pricePrefix && <span className="block text-base font-body opacity-60">{plan.pricePrefix}</span>}
          {plan.price} <span className="text-base font-body opacity-60">{plan.unit}</span>
        </p>

        <p className="mt-5 font-display text-lg">{plan.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed opacity-70">{plan.longTagline}</p>

        {plan.featuresIntro && (
          <p className="mt-7 text-xs font-mono uppercase tracking-wide opacity-60">{plan.featuresIntro}</p>
        )}
        <ul className={`space-y-2.5 text-sm ${plan.featuresIntro ? 'mt-4' : 'mt-7'}`}>
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
              <span className="opacity-90">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <Button onClick={() => onSelect(plan)} variant={plan.featured ? 'dark' : 'outline'} className="w-full text-center" withArrow>
            {plan.cta}
          </Button>
        </div>
      </motion.div>
    </Reveal>
  )
}
