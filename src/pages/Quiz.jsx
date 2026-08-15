import { useState } from 'react'
import { Icon } from '../lib/icons'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { seoData } from '../seoData'
import { quizQuestions, recommendPlan, plans } from '../data'

const initialAnswers = {
  profile: '',
  volume: '',
  monthlyBookings: '',
  platforms: [],
  problem: '',
  needsOptimization: '',
  needsCoordination: '',
  location: '',
  delegation: '',
}

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(initialAnswers)
  const [done, setDone] = useState(false)

  const question = quizQuestions[step]
  const isLast = step === quizQuestions.length - 1

  const select = (id, value, type) => {
    setAnswers((a) => {
      if (type === 'multi') {
        const list = a[id]
        return { ...a, [id]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value] }
      }
      return { ...a, [id]: value }
    })
  }

  const canContinue = question?.type === 'multi' || question?.type === 'text' ? true : Boolean(answers[question?.id])

  const next = () => {
    if (isLast) {
      setDone(true)
    } else {
      setStep((s) => s + 1)
    }
  }

  const restart = () => {
    setAnswers(initialAnswers)
    setStep(0)
    setDone(false)
  }

  const resultSlug = done ? recommendPlan(answers) : null
  const resultPlan = plans.find((p) => p.slug === resultSlug)

  return (
    <>
      <SEO {...seoData['/trouver-ma-formule']} path="/trouver-ma-formule" />
      <PageHero
        kicker="Diagnostic gratuit"
        title="Quelques questions pour cerner votre besoin."
        subtitle="Pas d’intelligence artificielle compliquée : juste les bonnes questions pour vous orienter vers la formule adaptée."
      />

      <Section>
        <div className="max-w-xl mx-auto">
          {!done ? (
            <Reveal key={question.id}>
              <p className="kicker mb-3">Question {step + 1} / {quizQuestions.length}</p>
              <div className="h-1 bg-noir/10 mb-10">
                <div
                  className="h-full bg-gold transition-all duration-300"
                  style={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>

              <h2 className="font-display text-2xl md:text-3xl mb-8">{question.question}</h2>

              {question.type === 'text' ? (
                <input
                  type="text"
                  value={answers[question.id]}
                  onChange={(e) => setAnswers((a) => ({ ...a, [question.id]: e.target.value }))}
                  placeholder={question.placeholder}
                  className="w-full border border-noir/20 px-5 py-4 bg-transparent focus:border-noir outline-none"
                />
              ) : (
                <div className="flex flex-col gap-3">
                  {question.options.map((opt) => {
                    const checked = question.type === 'multi' ? answers[question.id].includes(opt) : answers[question.id] === opt
                    return (
                      <label
                        key={opt}
                        className={`relative flex items-center gap-3 border px-5 py-4 cursor-pointer transition-colors ${checked ? 'border-noir bg-noir text-paper' : 'border-noir/20 hover:border-noir/40'}`}
                      >
                        <input
                          type={question.type === 'multi' ? 'checkbox' : 'radio'}
                          className="sr-only"
                          checked={checked}
                          onChange={() => select(question.id, opt, question.type)}
                        />
                        <span className={`w-4 h-4 shrink-0 border flex items-center justify-center ${question.type === 'multi' ? '' : 'rounded-full'} ${checked ? 'border-gold-light' : 'border-current opacity-40'}`}>
                          {checked && <Icon name="check" className="w-3 h-3" strokeWidth={2} />}
                        </span>
                        {opt}
                      </label>
                    )
                  })}
                </div>
              )}

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-sm opacity-60 disabled:opacity-20"
                >
                  Précédent
                </button>
                <Button onClick={next} variant="dark" withArrow disabled={!canContinue}>
                  {isLast ? 'Voir mon profil' : 'Suivant'}
                </Button>
              </div>
            </Reveal>
          ) : (
            <Reveal className="text-center">
              <p className="kicker mb-4">Votre résultat</p>
              <p className="text-lg opacity-70">Votre profil correspond à :</p>
              <p className="mt-3 font-display text-4xl md:text-5xl">{resultPlan.name}</p>
              <p className="mt-5 max-w-md mx-auto opacity-70 leading-relaxed">{resultPlan.longTagline}</p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <Button to={`/contact?forfait=${resultPlan.slug}`} variant="dark" withArrow>Parler à LARPILOTE</Button>
                <Button onClick={restart} variant="outline">Refaire le test</Button>
              </div>
            </Reveal>
          )}
        </div>
      </Section>
    </>
  )
}
