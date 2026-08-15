import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '../../lib/icons'

export default function Modal({ open, onClose, children, labelledBy }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-noir/60 z-[70]"
            aria-hidden="true"
          />
          <div
            className="fixed inset-0 z-[71] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={onClose}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={labelledBy}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-paper text-noir my-8 sm:my-0 shadow-2xl"
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="absolute top-4 right-4 p-2 text-noir/50 hover:text-noir transition-colors"
              >
                <Icon name="close" className="w-5 h-5" strokeWidth={1.5} />
              </button>
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
