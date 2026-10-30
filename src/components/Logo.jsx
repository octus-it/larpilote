import { LocLink as Link } from '../i18n/index.jsx'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <img src="/images/logo-mark.png" alt="LARPILOTE" className="w-8 h-8 rounded-md object-cover" />
      <span className="font-display text-xl tracking-tight">LARPILOTE</span>
    </Link>
  )
}
