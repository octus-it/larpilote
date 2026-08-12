import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navGroups, whatsappLink } from '../data'
import { Icon, WhatsAppIcon } from '../lib/icons'
import Button from './ui/Button'
import Logo from './Logo'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const [openMobileGroup, setOpenMobileGroup] = useState(null)
  const location = useLocation()
  const closeTimer = useRef(null)

  useEffect(() => {
    setOpen(false)
    setOpenGroup(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const enterGroup = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenGroup(label)
  }
  const leaveGroup = () => {
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120)
  }

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-noir/10">
      <div className="max-w-page mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {navGroups.map((g) =>
            g.items ? (
              <div
                key={g.label}
                className="relative"
                onMouseEnter={() => enterGroup(g.label)}
                onMouseLeave={leaveGroup}
              >
                <button
                  type="button"
                  onClick={() => setOpenGroup(openGroup === g.label ? null : g.label)}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm text-noir/75 hover:text-noir transition-colors"
                  aria-expanded={openGroup === g.label}
                >
                  {g.label}
                  <Icon
                    name="arrowRight"
                    className={`w-3 h-3 rotate-90 transition-transform ${openGroup === g.label ? 'rotate-[270deg]' : ''}`}
                    strokeWidth={1.5}
                  />
                </button>
                <AnimatePresence>
                  {openGroup === g.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full pt-2 w-64"
                    >
                      <div className="bg-paper border border-noir/10 shadow-xl shadow-noir/5">
                        {g.items.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block px-5 py-3.5 border-b border-noir/5 last:border-0 hover:bg-beige/40 transition-colors"
                          >
                            <span className="block text-sm font-display">{item.label}</span>
                            {item.text && <span className="block mt-0.5 text-xs opacity-60">{item.text}</span>}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={g.to}
                to={g.to}
                className="px-4 py-2 text-sm text-noir/75 hover:text-noir transition-colors"
              >
                {g.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={whatsappLink('Bonjour LARPILOTE, j’aimerais échanger sur mon activité.')}
            target="_blank"
            rel="noreferrer"
            aria-label="Parler à LARPILOTE sur WhatsApp"
            className="p-2 text-gold-dark hover:text-noir transition-colors"
          >
            <WhatsAppIcon className="w-[18px] h-[18px]" />
          </a>
          <Button to="/contact" variant="dark">
            Parler à LARPILOTE
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Ouvrir le menu"
        >
          <Icon name="menu" className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-noir/40 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-noir text-paper z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-paper/10 shrink-0">
                <Logo />
                <button type="button" onClick={() => setOpen(false)} aria-label="Fermer le menu" className="p-2 -mr-2">
                  <Icon name="close" className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-3 shrink-0">
                <Button to="/proprietaires" variant="light" className="w-full">
                  Je suis propriétaire
                </Button>
                <Button to="/conciergeries" variant="outlineLight" className="w-full">
                  Je suis une conciergerie
                </Button>
              </div>

              <nav className="flex flex-col px-6 py-2 gap-1 overflow-y-auto">
                {navGroups.map((g) =>
                  g.items ? (
                    <div key={g.label} className="border-b border-paper/10">
                      <button
                        type="button"
                        onClick={() => setOpenMobileGroup(openMobileGroup === g.label ? null : g.label)}
                        className="w-full flex items-center justify-between py-3.5 text-base"
                      >
                        {g.label}
                        <Icon
                          name="arrowRight"
                          className={`w-4 h-4 transition-transform ${openMobileGroup === g.label ? 'rotate-90' : ''}`}
                          strokeWidth={1.5}
                        />
                      </button>
                      <div
                        className="grid transition-all duration-200"
                        style={{ gridTemplateRows: openMobileGroup === g.label ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-3 flex flex-col gap-1">
                            {g.items.map((item) => (
                              <Link key={item.to} to={item.to} className="py-2 pl-3 text-sm opacity-75 border-l border-paper/20">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link key={g.to} to={g.to} className="py-3.5 border-b border-paper/10 text-base">
                      {g.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-auto p-6 border-t border-paper/10 flex flex-col gap-3 shrink-0">
                <a
                  href={whatsappLink('Bonjour LARPILOTE, j’aimerais échanger sur mon activité.')}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 text-sm text-gold-light"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Parler à LARPILOTE sur WhatsApp
                </a>
                <Button to="/contact" variant="light" className="w-full">
                  Parler à LARPILOTE
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
