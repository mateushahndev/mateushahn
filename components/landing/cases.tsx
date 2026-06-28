'use client'

import Image from 'next/image'
import { CheckCircle, XCircle } from 'lucide-react'
import { analytics } from '@/lib/analytics'

const cases = [
  {
    id: '01',
    image: '/landing/casesalao.webp',
    alt: 'Site de salão de beleza - depois',
    label: 'salao-beleza',
    before: {
      label: 'Antes',
      items: [
        'Site abandonado, seções vazias',
        'Nota 42 no Google PageSpeed',
        'Sem formulário de contato',
        'Zero presença no Google',
      ],
    },
    after: {
      label: 'Depois',
      items: [
        'SEO local — aparece nas buscas da cidade',
        'Chatbot IA 24h atendendo clientes',
        'Nota 98 no PageSpeed',
        'Carrega em 1.4 segundos',
      ],
    },
  },
  {
    id: '02',
    image: '/landing/caseloja.webp',
    alt: 'Site de loja de moda - depois',
    label: 'loja-moda',
    before: {
      label: 'Antes',
      items: [
        'Site feito no Google Sites (visual de 2000)',
        'Nota 33 no PageSpeed',
        'Zero SEO, zero conversão',
        'Não funcionava direito no celular',
      ],
    },
    after: {
      label: 'Depois',
      items: [
        'Design moderno e responsivo',
        'Copywriting orientado a dados do público',
        'GEO — site preparado para buscas com IA',
        'Performance nota máxima',
      ],
    },
  },
  {
    id: '03',
    image: '/landing/casepetshop.webp',
    alt: 'Site de petshop - depois',
    label: 'pet-shop',
    before: {
      label: 'Antes',
      items: [
        'Nem site próprio tinha — só página alugada',
        'Nota 33 no PageSpeed',
        'Informações desorganizadas',
        'Invisível no Google',
      ],
    },
    after: {
      label: 'Depois',
      items: [
        'Site institucional completo',
        'Dados estruturados para rich snippets',
        'Integração com WhatsApp',
        'Carrega em menos de 2 segundos',
      ],
    },
  },
]

export function Cases() {
  const handlePortfolioClick = (label: string) => {
    analytics.portfolioView(label)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            É assim que seu site vai ficar
          </h2>
          <p className="text-[#A0A0A0] text-base md:text-lg mt-4 max-w-2xl mx-auto">
            Antes e depois de negócios que precisavam de um site profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="border border-[#2A2A2A] bg-[#111111] rounded-[5px] overflow-hidden hover:border-[#A3E635]/30 transition-all duration-300 cursor-pointer"
              onClick={() => handlePortfolioClick(item.label)}
            >
              <div className="relative w-full aspect-[918/923] md:aspect-[918/923] bg-[#0D0D0D]">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={95}
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-[#2A2A2A] text-sm">
                    [Print do site]
                  </div>
                )}
              </div>

              <div className="p-5 md:p-6 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#A0A0A0]">
                  <span className="text-[#2A2A2A] font-mono font-bold">0{item.id}</span>
                  <span className="h-px flex-1 bg-[#2A2A2A]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                        {item.before.label}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {item.before.items.map((point, idx) => (
                        <li key={idx} className="text-sm text-[#A0A0A0] leading-relaxed">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <CheckCircle className="h-4 w-4 text-[#A3E635]" />
                      <span className="text-xs font-bold text-[#A3E635] uppercase tracking-wider">
                        {item.after.label}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {item.after.items.map((point, idx) => (
                        <li key={idx} className="text-sm text-[#A0A0A0] leading-relaxed">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}