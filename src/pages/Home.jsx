import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '../lib/icons'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import Flow from '../components/ui/Flow'
import PricingCard from '../components/ui/PricingCard'
import GlowBackground from '../components/ui/GlowBackground'
import HeroHome, { HeroCTA } from '../components/HeroHome'
import PlanModal from '../components/PlanModal'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { useData, useTr } from '../i18n/index.jsx'

const incidentIcons = ['alert', 'chart', 'wrench', 'clipboard', 'shield']

function HoverCard({ icon, title, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group h-full border border-noir/10 bg-paper p-6 md:p-7 hover:border-gold/50 hover:shadow-xl hover:shadow-noir/5 transition-[border-color,box-shadow] duration-300"
      >
        <Icon
          name={icon}
          className="w-6 h-6 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
          strokeWidth={1.5}
        />
        <p className="mt-4 font-display text-lg md:text-xl">{title}</p>
        <p className="mt-2 text-sm opacity-70 leading-relaxed">{text}</p>
        <div className="mt-4 h-px w-8 bg-gold/40 origin-left scale-x-100 group-hover:w-full transition-[width] duration-300" />
      </motion.div>
    </Reveal>
  )
}

export default function Home() {
  const tr = useTr()
  const { painPoints, solutionFlow, services, processSteps, whyUs, plans, audit, commonConditions, engagementTerms, diagnosticBookingUrl, incidentFlow } = useData()
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <>
      <SEO {...seoData['/']} path="/" />
      <HeroHome
        image="/images/hero-home.jpg"
        kicker="Larpilote"
        title={tr("Votre logement. Votre contrôle. Notre pilotage.")}
        subtitle={tr("Gestion virtuelle et pilotage opérationnel des locations courte durée.")}
        text={tr("Vous avez le logement. Vous gardez le contrôle. LARPILOTE prend en charge une grande partie de votre gestion quotidienne à distance.")}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <HeroCTA to="/proprietaires" variant="primary">{tr("Je suis propriétaire")}</HeroCTA>
          <HeroCTA to="/conciergeries" variant="secondary">{tr("Je suis une conciergerie")}</HeroCTA>
        </div>
      </HeroHome>

      <section className="bg-paper text-noir py-20 md:py-28 px-6 md:px-10 overflow-hidden">
        <div className="max-w-page mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center">
          <div>
            <Reveal>
              <p className="kicker mb-4">{tr("Votre activité")}</p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight">
                {tr("Vous avez le logement. Nous pilotons le quotidien.")}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4 max-w-xl">
              <Reveal delay={0.1}>
                <p className="text-base md:text-lg opacity-80 leading-relaxed">
                  {tr("Gérer une location courte durée ne se résume pas à accueillir des voyageurs.")}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-base md:text-lg opacity-80 leading-relaxed">
                  {tr("Messages, réservations, calendriers, annonces, avis, tarification, incidents… Au fil des réservations, la gestion peut rapidement devenir chronophage.")}
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="font-display text-xl md:text-2xl leading-snug">
                  {tr("LARPILOTE vous permet de déléguer cette charge sans abandonner le contrôle de votre activité.")}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="relative h-[280px] md:h-[380px]">
            {[
              { label: 'Messages', top: '4%', left: '6%' },
              { label: 'Réservations', top: '0%', left: '48%' },
              { label: 'Calendriers', top: '30%', left: '0%' },
              { label: 'Annonces', top: '26%', left: '58%' },
              { label: 'Avis', top: '58%', left: '18%' },
              { label: 'Tarification', top: '54%', left: '56%' },
              { label: 'Incidents', top: '82%', left: '34%' },
            ].map((c, i) => (
              <motion.div
                key={tr(c.label)}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ position: 'absolute', top: c.top, left: c.left }}
              >
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className="inline-block border border-noir/15 bg-beige/70 px-4 py-2 text-xs md:text-sm font-mono uppercase tracking-wide text-noir/70 whitespace-nowrap"
                >
                  {tr(c.label)}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section tone="beige" kicker={tr("Le quotidien")} title={tr("Ce qui vous prend du temps")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {painPoints.map((p, i) => (
            <HoverCard key={p.title} icon={p.icon} title={p.title} text={p.text} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-noir text-paper py-20 md:py-28 px-6 md:px-10">
        <GlowBackground />
        <div className="relative z-10 max-w-page mx-auto">
          <Reveal className="mb-14 max-w-2xl">
            <p className="kicker mb-4 text-gold-light">{tr("La solution")}</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight">
              {tr("LARPILOTE prend le relais à distance.")}
            </h2>
            <p className="mt-5 text-base md:text-lg opacity-80 leading-relaxed">
              {tr("Nous devenons votre pilote opérationnel à distance. Vous conservez la gestion physique de votre logement et vos équipes locales. Nous prenons en charge les tâches digitales, administratives et relationnelles définies dans votre formule.")}
            </p>
          </Reveal>
          <Flow items={solutionFlow} tone="noir" />
        </div>
      </section>

      <Section id="services" kicker={tr("Nos services")} title={tr("Nos services")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {services.map((s, i) => (
            <HoverCard key={s.title} icon={s.icon} title={s.title} text={s.text} delay={i * 0.05} />
          ))}
        </div>
      </Section>

      <Section tone="beige" id="comment-ca-marche" kicker={tr("Le processus")} title={tr("Comment ça marche ?")}>
        <div className="relative mt-4">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-noir/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gold/50"
          />
          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                  <span className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-beige border border-gold/50 font-mono text-sm text-gold-dark">
                    {s.n}
                  </span>
                  <p className="mt-4 font-display text-lg leading-snug">{s.title}</p>
                  <p className="mt-2 text-sm opacity-70 leading-relaxed">{s.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section kicker={tr("Pourquoi LARPILOTE")} title={tr("Pourquoi LARPILOTE ?")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="group">
                <Icon
                  name={w.icon}
                  className="w-6 h-6 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  strokeWidth={1.5}
                />
                <p className="mt-4 font-display text-lg">{w.title}</p>
                <p className="mt-2 text-sm opacity-70 leading-relaxed">{w.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="beige" id="tarifs" kicker={tr("Nos forfaits")} title={tr("Nos forfaits")}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <PricingCard key={p.slug} plan={p} delay={i * 0.06} onSelect={setSelectedPlan} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm opacity-75">
          {tr("Pas sûr de votre choix ?")}{' '}
          <a href={diagnosticBookingUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-gold-dark">
            {tr("Réservez un diagnostic gratuit de 30 minutes.")}
          </a>
        </p>
      </Section>

      <Section id="audit" kicker={tr("Prestation ponctuelle")} title={audit.title} subtitle={audit.tagline}>
        <Reveal>
          <div className="border border-noir/15 bg-paper p-7 md:p-10 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
            <div>
              <p className="opacity-80 leading-relaxed">{audit.text}</p>
              <ul className="mt-7 space-y-2.5 text-sm">
                {audit.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-gold" strokeWidth={1.5} />
                    <span className="opacity-90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col lg:border-l lg:border-noir/10 lg:pl-14">
              <p className="font-display text-4xl md:text-5xl leading-tight">
                {audit.price} <span className="text-base font-body opacity-60">{audit.unit}</span>
              </p>
              <p className="mt-6 text-sm opacity-70 leading-relaxed">{audit.note}</p>
              <div className="mt-8 lg:mt-auto lg:pt-8">
                <Button onClick={() => setSelectedPlan(audit)} variant="dark" className="w-full" withArrow>
                  {audit.cta}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 max-w-3xl space-y-3 text-xs md:text-sm opacity-60 leading-relaxed">
          {commonConditions.map((c) => (
            <p key={c}>{c}</p>
          ))}
          {engagementTerms && (
            <div className="pt-4">
              <p className="font-display text-base text-noir">{engagementTerms.title}</p>
              <ul className="mt-2 space-y-1.5">
                {engagementTerms.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3">{engagementTerms.relais}</p>
            </div>
          )}
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-noir text-paper py-20 md:py-28 px-6 md:px-10">
        <GlowBackground />
        <div className="relative z-10 max-w-page mx-auto">
          <Reveal className="mb-12 max-w-2xl">
            <p className="kicker mb-4 text-gold-light">Incidents</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight">
              {tr("Un incident survient ? Nous pilotons la suite.")}
            </h2>
          </Reveal>
          <div className="max-w-lg">
            <ul className="space-y-3">
              {incidentFlow.map((step, i) => (
                <Reveal key={`${step.who}-${step.action}`} delay={i * 0.06}>
                  <motion.li
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="flex items-center gap-4 border border-paper/10 px-5 py-4 hover:border-gold/40 transition-colors duration-300"
                  >
                    <Icon name={incidentIcons[i]} className="w-5 h-5 text-gold-light shrink-0" strokeWidth={1.5} />
                    <span className="text-base md:text-lg">
                      <span className="font-display">{step.who}</span>
                      <span className="opacity-50 mx-2 font-mono text-xs">→</span>
                      <span className="opacity-75">{step.action}</span>
                    </span>
                  </motion.li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 text-sm md:text-base opacity-70 leading-relaxed border-t border-paper/15 pt-6">
              {tr("Vous gardez la décision. Nous assurons le pilotage à distance.")}
            </p>
          </div>
        </div>
      </section>

      <Section align="center" kicker={tr("Prêt ?")} title={tr("Prêt à déléguer la gestion de votre logement ?")}>
        <div className="flex flex-col items-center gap-2 text-lg md:text-xl font-display opacity-80">
          {['Moins de messages.', 'Moins de stress.', 'Plus de temps.', 'Un logement mieux piloté.'].map((line, i) => (
            <Reveal key={line} delay={i * 0.08}>
              <p>{tr(line)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4} className="mt-9">
          <Button to="/contact" variant="dark" withArrow>{tr("Parler à LARPILOTE")}</Button>
        </Reveal>
      </Section>

      <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </>
  )
}
