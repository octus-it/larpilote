export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="font-display text-lg font-semibold">Larpilote</span>
        <div className="flex gap-6 text-sm text-ink/60">
          <a href="#services" className="hover:text-marine transition-colors">Services</a>
          <a href="#tarifs" className="hover:text-marine transition-colors">Tarifs</a>
          <a href="#faq" className="hover:text-marine transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-marine transition-colors">Contact</a>
        </div>
        <span className="font-mono text-xs text-ink/40">Dakar, Sénégal</span>
      </div>
    </footer>
  )
}
