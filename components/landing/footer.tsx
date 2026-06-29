import Link from 'next/link'
import { analytics } from '@/lib/analytics'

export function Footer() {
  const handleWhatsAppClick = () => {
    analytics.whatsappClick('footer')
  }

  return (
    <footer className="py-8 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-[#A0A0A0]">
          <Link
            href="https://wa.me/5542998530633"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="hover:text-[#A3E635] transition-colors"
          >
            WhatsApp
          </Link>
          <Link
            href="mailto:contato@mateushahn.com"
            className="hover:text-[#A3E635] transition-colors"
          >
            E-mail
          </Link>
          <Link
            href="/contato"
            className="hover:text-[#A3E635] transition-colors"
          >
            Contato
          </Link>
          <Link
            href="/politica-privacidade"
            className="hover:text-[#A3E635] transition-colors"
          >
            Privacidade
          </Link>
          <Link
            href="/termos-uso"
            className="hover:text-[#A3E635] transition-colors"
          >
            Termos
          </Link>
        </div>
        <p className="text-[#A0A0A0] text-sm">
          © 2026 Mateus Hahn. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}