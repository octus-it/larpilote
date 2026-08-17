import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '../lib/icons'

const languages = [
  { code: 'fr', label: 'Français canadien', short: 'FR', flag: '/images/flags/quebec.svg', available: true },
  { code: 'en', label: 'Anglais canadien', short: 'EN', flag: '/images/flags/canada.svg', available: true },
]

export default function LanguageDropdown({ variant = 'light' }) {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const ref = useRef(null)
  const current = languages.find((l) => l.code === lang)

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const select = (l) => {
    if (!l.available) return
    setLang(l.code)
    setOpen(false)
  }

  const isDark = variant === 'dark'

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Choisir la langue"
        className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
          isDark ? 'text-paper/80 hover:text-paper' : 'text-noir/75 hover:text-noir'
        }`}
      >
        <img src={current.flag} alt="" className="w-5 h-5 rounded-full object-cover" />
        <span className="hidden xl:inline">{current.short}</span>
        <Icon
          name="arrowRight"
          className={`w-3 h-3 rotate-90 transition-transform ${open ? 'rotate-[270deg]' : ''}`}
          strokeWidth={1.5}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full pt-2 w-64 z-10"
          >
            <div className="bg-paper text-noir border border-noir/10 shadow-xl shadow-noir/5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => select(l)}
                  disabled={!l.available}
                  className={`w-full flex items-center gap-3 px-5 py-3.5 border-b border-noir/5 last:border-0 text-left transition-colors ${
                    l.available ? 'hover:bg-beige/40 cursor-pointer' : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  <img src={l.flag} alt="" className="w-6 h-6 rounded-full object-cover shrink-0" />
                  <span className="flex-1">
                    <span className="block text-sm font-display">{l.label}</span>
                    {!l.available && <span className="block mt-0.5 text-xs opacity-60">Bientôt disponible</span>}
                  </span>
                  {lang === l.code && <Icon name="check" className="w-4 h-4 text-gold shrink-0" strokeWidth={1.5} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
