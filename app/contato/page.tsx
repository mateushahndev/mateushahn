import Link from 'next/link'
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Contato | Mateus Hahn',
  description:
    'Fale com Mateus Hahn. Solicite um orçamento, tire dúvidas ou apenas diga oi. Respondo em até 24h.',
  openGraph: {
    title: 'Contato | Mateus Hahn',
    description: 'Fale com Mateus Hahn. Solicite um orçamento, tire dúvidas ou apenas diga oi.',
    url: 'https://mateushahn.com/contato',
    siteName: 'Mateus Hahn',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mateushahn.com/contato',
  },
}

export default function Contato() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-4 py-16 md:py-24">
      {/* JSON-LD: ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: 'https://mateushahn.com/contato',
            name: 'Contato | Mateus Hahn',
            description:
              'Fale com Mateus Hahn. Solicite um orçamento, tire dúvidas ou apenas diga oi.',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Mateus Hahn',
              url: 'https://mateushahn.com',
            },
            mainEntity: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: 'contato@mateushahn.com',
              availableLanguage: ['Portuguese'],
              contactOption: 'WhatsApp',
              url: 'https://wa.me/5542998530633',
            },
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-12">
          <Link href="/" className="text-[#A3E635] hover:underline text-sm">
            ← Voltar para o site
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mt-6">Fale comigo</h1>
          <p className="text-[#A0A0A0] text-base md:text-lg mt-4 max-w-2xl">
            Solicite um orçamento, tire dúvidas ou apenas diga oi. Respondo em até 24h.
          </p>
        </div>

        {/* Grid de contato */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5542998530633?text=Ol%C3%A1%20Mateus%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border border-[#2A2A2A] rounded-[5px] bg-[#111111] hover:border-[#A3E635]/30 transition-all duration-300 group"
          >
            <div className="p-3 border border-[#2A2A2A] rounded-[5px] text-[#A3E635] group-hover:border-[#A3E635]/30">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">WhatsApp</p>
              <p className="text-xs text-[#A0A0A0]">(42) 99853-0633</p>
            </div>
          </a>

          {/* E-mail */}
          <a
            href="mailto:contato@mateushahn.com"
            className="flex items-center gap-4 p-5 border border-[#2A2A2A] rounded-[5px] bg-[#111111] hover:border-[#A3E635]/30 transition-all duration-300 group"
          >
            <div className="p-3 border border-[#2A2A2A] rounded-[5px] text-[#A3E635] group-hover:border-[#A3E635]/30">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">E-mail</p>
              <p className="text-xs text-[#A0A0A0]">contato@mateushahn.com</p>
            </div>
          </a>
        </div>

        {/* Informações adicionais */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="flex items-center gap-3 p-4 border border-[#2A2A2A] rounded-[5px] bg-[#111111]">
            <MapPin className="h-4 w-4 text-[#A3E635]" />
            <span className="text-sm text-[#A0A0A0]">Paraná, Brasil</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-[#2A2A2A] rounded-[5px] bg-[#111111]">
            <Clock className="h-4 w-4 text-[#A3E635]" />
            <span className="text-sm text-[#A0A0A0]">Resposta em até 24h</span>
          </div>
        </div>

        {/* Mensagem final */}
        <div className="border-t border-[#2A2A2A] pt-8">
          <p className="text-[#A0A0A0] text-base leading-relaxed italic">
            "Cada projeto começa com uma conversa. Me conte sobre seu negócio e o que você precisa. Sem compromisso, sem enrolação."
          </p>
        </div>

        {/* Rodapé da página */}
        <div className="mt-16 pt-8 border-t border-[#2A2A2A] text-sm text-[#A0A0A0]">
          <Link href="/" className="text-[#A3E635] hover:underline">
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </main>
  )
}