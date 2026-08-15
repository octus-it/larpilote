import Reveal from '../components/Reveal'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { legalPages } from '../legalContent'

export default function LegalPage({ slug, path }) {
  const page = legalPages[slug]

  return (
    <>
      <SEO {...seoData[path]} path={path} />
      <PageHero kicker="Informations" title={page.title} subtitle={page.updated} />
      <Section>
        <div className="max-w-2xl space-y-12">
          {page.sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-display text-xl md:text-2xl mb-4">{section.heading}</h2>
              <div className="space-y-3">
                {section.blocks.map((block, i) =>
                  block.type === 'ul' ? (
                    <ul key={i} className="space-y-2 pl-1">
                      {block.items.map((it) => (
                        <li key={it} className="flex items-start gap-2.5 text-sm md:text-base opacity-75 leading-relaxed">
                          <span className="mt-2.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className="text-sm md:text-base opacity-75 leading-relaxed">
                      {block.text}
                    </p>
                  )
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
