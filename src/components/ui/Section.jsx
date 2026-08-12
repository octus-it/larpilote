import Reveal from '../Reveal'

const tones = {
  paper: 'bg-paper text-noir',
  beige: 'bg-beige text-noir',
  noir: 'bg-noir text-paper',
}

export default function Section({
  id,
  tone = 'paper',
  kicker,
  title,
  subtitle,
  align = 'left',
  children,
  className = '',
  as: Comp = 'h2',
}) {
  return (
    <section id={id} className={`${tones[tone]} py-20 md:py-28 px-6 md:px-10 ${className}`}>
      <div className={`max-w-page mx-auto ${align === 'center' ? 'text-center' : ''}`}>
        {(kicker || title || subtitle) && (
          <Reveal className={`mb-12 md:mb-16 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
            {kicker && <p className="kicker mb-4">{kicker}</p>}
            {title && (
              <Comp className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight">
                {title}
              </Comp>
            )}
            {subtitle && <p className="mt-5 text-base md:text-lg opacity-80 leading-relaxed">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
