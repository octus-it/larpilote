import { Link } from 'react-router-dom'
import { Icon } from '../../lib/icons'

const variants = {
  dark: 'bg-noir text-paper hover:bg-gold-dark border border-noir hover:border-gold-dark',
  light: 'bg-paper text-noir hover:bg-white border border-paper',
  outline: 'bg-transparent text-noir border border-noir/30 hover:border-noir',
  outlineLight: 'bg-transparent text-paper border border-paper/40 hover:border-paper',
  ghost: 'bg-transparent text-noir border border-transparent px-0 hover:text-gold-dark',
}

export default function Button({ to, href, onClick, type = 'button', variant = 'dark', className = '', children, withArrow = false, ...rest }) {
  const base = `inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.12em] uppercase px-6 py-4 transition-colors duration-200 ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {withArrow && <Icon name="arrowRight" className="w-4 h-4" strokeWidth={1.75} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={base} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={base} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={base} {...rest}>
      {content}
    </button>
  )
}
