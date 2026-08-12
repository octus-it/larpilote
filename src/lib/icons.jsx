import {
  MessageCircle,
  CalendarDays,
  Globe2,
  Star,
  Coins,
  ShieldAlert,
  BarChart3,
  Compass,
  SlidersHorizontal,
  Eye,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Home,
  Building2,
  UserRound,
  KeyRound,
  Droplet,
  Zap,
  Sparkles,
  Shirt,
  Snowflake,
  Wrench,
  ShieldCheck,
  Handshake,
  Layers,
  Megaphone,
  ClipboardCheck,
  Mail,
  Phone,
  MapPin,
  FileText,
  Settings2,
} from 'lucide-react'

export const iconMap = {
  message: MessageCircle,
  calendar: CalendarDays,
  globe: Globe2,
  star: Star,
  coins: Coins,
  alert: ShieldAlert,
  chart: BarChart3,
  distance: Compass,
  flexible: SlidersHorizontal,
  transparent: Eye,
  performance: TrendingUp,
  check: CheckCircle2,
  arrowRight: ArrowRight,
  menu: Menu,
  close: X,
  home: Home,
  building: Building2,
  user: UserRound,
  key: KeyRound,
  droplet: Droplet,
  zap: Zap,
  sparkles: Sparkles,
  shirt: Shirt,
  snowflake: Snowflake,
  wrench: Wrench,
  shield: ShieldCheck,
  handshake: Handshake,
  layers: Layers,
  megaphone: Megaphone,
  clipboard: ClipboardCheck,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  file: FileText,
  settings: Settings2,
}

export function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.5 }) {
  const Cmp = iconMap[name]
  if (!Cmp) return null
  return <Cmp className={className} strokeWidth={strokeWidth} />
}

export function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.892.526 3.66 1.438 5.166L2 22l4.958-1.396A9.955 9.955 0 0012.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm0 18.111a8.09 8.09 0 01-4.13-1.132l-.296-.176-3.048.858.822-3.006-.192-.309A8.083 8.083 0 013.889 12c0-4.478 3.634-8.112 8.112-8.112 4.477 0 8.111 3.634 8.111 8.112 0 4.477-3.634 8.111-8.111 8.111z"/>
    </svg>
  )
}
