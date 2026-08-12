import { whatsappLink } from '../data'
import { WhatsAppIcon } from '../lib/icons'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Bonjour LARPILOTE, j’aimerais échanger sur mon activité.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Parler à LARPILOTE sur WhatsApp"
      className="lg:hidden fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-noir text-paper flex items-center justify-center shadow-lg shadow-noir/20"
    >
      <WhatsAppIcon className="w-5 h-5" />
    </a>
  )
}
