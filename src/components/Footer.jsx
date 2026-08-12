import { Link } from 'react-router-dom'
import { footerColumns } from '../data'

export default function Footer() {
  return (
    <footer className="bg-noir text-paper">
      <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          <div className="col-span-2">
            <img src="/images/logo-lockup.png" alt="LARPILOTE" className="h-9 w-auto -ml-1" />
            <p className="mt-4 text-sm opacity-60 max-w-[220px] leading-relaxed">
              Votre logement. Votre contrôle. Notre pilotage.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="kicker mb-4 text-gold-light">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10 text-xs opacity-50">
          © 2026 LARPILOTE — Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
