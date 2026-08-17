import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './ui/Button'

const STORAGE_KEY = 'larpilote-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const choose = (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Préférences cookies"
          className="fixed bottom-0 inset-x-0 z-[80] bg-noir text-paper border-t border-paper/10"
        >
          <div className="max-w-page mx-auto px-6 md:px-10 py-6 md:py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <p className="text-sm opacity-80 leading-relaxed flex-1">
              Nous utilisons des cookies pour améliorer votre expérience, mesurer notre audience et faciliter le
              fonctionnement du site. Vous pouvez accepter, refuser, ou consulter notre{' '}
              <Link to="/cookies" className="underline hover:text-gold-light">
                politique de cookies
              </Link>
              .
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => choose('refused')}
                className="font-mono text-xs tracking-[0.12em] uppercase px-5 py-4 text-paper/70 hover:text-paper transition-colors"
              >
                Refuser
              </button>
              <Button variant="light" onClick={() => choose('accepted')}>
                Accepter
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
