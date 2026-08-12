import { useState } from 'react'
import { Icon } from '../../lib/icons'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="divide-y divide-noir/10 border-y border-noir/10">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg md:text-xl">{item.q}</span>
              <Icon
                name="arrowRight"
                strokeWidth={1.5}
                className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-gold' : 'opacity-40'}`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-sm md:text-base leading-relaxed opacity-75 max-w-2xl">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
