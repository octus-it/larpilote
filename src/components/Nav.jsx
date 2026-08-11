import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#biens', label: 'Biens pilotés' },
  { href: '/#comment', label: 'Comment ça marche' },
  { href: '/#tarifs', label: 'Tarifs' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
          scrolled ? 'bg-paper/90 backdrop-blur border-b border-ink/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/#top"
            className={`font-display text-xl font-semibold tracking-tight transition-colors ${
              scrolled ? 'text-ink' : 'text-paper'
            }`}
          >
            Larpilote
          </a>
          <nav
            className={`hidden md:flex items-center gap-8 text-sm transition-colors ${
              scrolled ? 'text-ink/80' : 'text-paper/90'
            }`}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative group">
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-ochre transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className={`hidden md:inline-block text-sm font-medium px-4 py-2 rounded-sm transition-colors ${
                scrolled
                  ? 'bg-ink text-paper hover:bg-marine'
                  : 'bg-paper text-ink hover:bg-ochre hover:text-paper'
              }`}
            >
              Nous contacter
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`md:hidden flex w-10 h-10 flex-col items-center justify-center gap-[5px] transition-colors ${
                scrolled ? 'text-ink' : 'text-paper'
              }`}
            >
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 self-end mr-2 bg-current" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grain stub-edge-left fixed top-0 right-0 z-50 flex h-full w-full max-w-xs flex-col bg-paper text-ink shadow-2xl md:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-dashed border-ink/15 px-6">
                <span className="font-display text-lg font-semibold tracking-tight">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="stamp flex h-9 w-9 items-center justify-center text-ink transition-colors hover:border-ochre hover:text-ochre"
                >
                  <span className="text-lg leading-none">&times;</span>
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-6 py-8 font-display text-2xl">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between border-b border-dashed border-ink/10 py-3"
                  >
                    {l.label}
                    <span className="text-ochre opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto border-t border-dashed border-ink/15 px-6 py-6">
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-sm bg-ink px-4 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-marine"
                >
                  Nous contacter
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
