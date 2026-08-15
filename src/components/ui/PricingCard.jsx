import { motion } from 'framer-motion'
import { Icon } from '../../lib/icons'
import Button from './Button'
import Reveal from '../Reveal'

export default function PricingCard({ plan, delay = 0, onSelect }) {
  const isSimplePrice = /^[0-9][0-9\s]*$/.test(plan.price)

  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        id={plan.slug}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className={`h-full flex flex-col border p-8 md:p-9 scroll-mt-28 ${
          plan.featured
            ? 'border-noir bg-noir text-paper shadow-xl shadow-noir/10 hover:shadow-2xl hover:shadow-gold/10'
            : 'border-noir/15 bg-paper text-noir hover:border-gold/50 hover:shadow-xl hover:shadow-noir/5'
        } transition-[border-color,box-shadow] duration-300`}
      >
        {plan.badge && (
          <p className={`kicker mb-4 ${plan.featured ? 'text-gold-light' : ''}`}>{plan.badge}</p>
        )}
        <h3 className="font-display text-2xl md:text-[28px]">{plan.name}</h3>
        <p className="mt-3 font-display text-3xl md:text-4xl">
          {plan.price}
          {isSimplePrice && <span className="text-base font-body opacity-60"> {plan.unit}</span>}
        </p>
        {!isSimplePrice && <p className="mt-1 text-sm opacity-60 font-mono">{plan.unit}</p>}

        <p className={`mt-5 text-sm leading-relaxed ${plan.featured ? 'opacity-80' : 'opacity-70'}`}>
          {plan.longTagline}
        </p>

        {plan.featuresIntro && (
          <p className="mt-7 text-xs font-mono uppercase tracking-wide opacity-60">{plan.featuresIntro}</p>
        )}
        <ul className={`mt-4 space-y-2.5 text-sm ${!plan.featuresIntro ? 'mt-7' : ''}`}>
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Icon name="check" className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? 'text-gold-light' : 'text-gold'}`} strokeWidth={1.5} />
              <span className="opacity-90">{f}</span>
            </li>
          ))}
        </ul>
        {plan.limit && <p className="mt-6 text-xs font-mono opacity-60">{plan.limit}</p>}
        {plan.note && <p className="mt-6 text-xs opacity-60 leading-relaxed">{plan.note}</p>}
        {plan.disclaimer && <p className="mt-6 text-xs opacity-50 leading-relaxed italic">{plan.disclaimer}</p>}

        <div className="mt-auto pt-8">
          <Button onClick={() => onSelect(plan)} variant={plan.featured ? 'light' : 'outline'} className="w-full" withArrow>
            {plan.cta}
          </Button>
        </div>
      </motion.div>
    </Reveal>
  )
}
