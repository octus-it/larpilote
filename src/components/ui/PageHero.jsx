import Reveal from '../Reveal'

export default function PageHero({ image, imagePosition = 'center', kicker, title, subtitle, text, children, minHeight = true }) {
  if (image) {
    return (
      <section className={`relative isolate flex items-end bg-noir ${minHeight ? 'min-h-[560px] md:min-h-[92vh]' : 'py-28'} px-6 md:px-10 pb-8 md:pb-24 pt-24 md:pt-32`}>
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="w-full h-full object-cover" style={{ objectPosition: imagePosition }} />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/55 to-transparent" />
        </div>
        <div className="max-w-page mx-auto w-full text-paper">
          <Reveal>
            {kicker && <p className="kicker mb-3 md:mb-5 text-gold-light">{kicker}</p>}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.08] md:leading-[1.05] tracking-tight max-w-3xl">
              {title}
            </h1>
            {subtitle && <p className="mt-4 md:mt-6 text-base md:text-xl max-w-xl opacity-90">{subtitle}</p>}
            {text && <p className="mt-3 md:mt-4 text-sm md:text-base max-w-xl opacity-70 leading-relaxed hidden sm:block">{text}</p>}
            {children && <div className="mt-6 md:mt-9">{children}</div>}
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-paper text-noir px-6 md:px-10 pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="max-w-page mx-auto">
        <Reveal>
          {kicker && <p className="kicker mb-5">{kicker}</p>}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            {title}
          </h1>
          {subtitle && <p className="mt-6 text-lg md:text-xl max-w-xl opacity-80">{subtitle}</p>}
          {text && <p className="mt-4 text-sm md:text-base max-w-xl opacity-70 leading-relaxed">{text}</p>}
          {children && <div className="mt-9">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
