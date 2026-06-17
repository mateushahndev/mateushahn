import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-6 text-sm text-[#A0A0A0]">
          <Link 
            href="https://wa.me/SEU_NUMERO" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#A3E635] transition-colors"
            aria-label="Entre em contato pelo WhatsApp"
          >
            WhatsApp
          </Link>
          <Link 
            href="mailto:mateus@hahn.dev" 
            className="hover:text-[#A3E635] transition-colors"
            aria-label="Enviar e-mail para Mateus Hahn"
          >
            E-mail
          </Link>
        </div>
        <p className="text-[#A0A0A0] text-sm">
          © 2026 Mateus Hahn. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}