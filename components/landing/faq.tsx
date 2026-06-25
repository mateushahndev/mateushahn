'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    pergunta: 'Quanto custa um site?',
    resposta: 'Cada projeto é único. O valor depende do que seu negócio precisa. Entre em contato para uma conversa sem compromisso e receba um orçamento personalizado.'
  },
  {
    pergunta: 'Preciso pagar mensalidade?',
    resposta: 'Não. A hospedagem é gratuita. Você só precisa do domínio (ex: meusite.com.br), que custa cerca de R$50 por ano. Sem mensalidade, sem surpresas.'
  },
  {
    pergunta: 'Quanto tempo leva para ficar pronto?',
    resposta: 'Entre 7 e 14 dias, dependendo da complexidade do projeto. Você acompanha todo o processo e aprova cada etapa.'
  },
  {
    pergunta: 'O site vai aparecer no Google?',
    resposta: 'Sim. Cada site é otimizado para SEO local, com estrutura correta, conteúdo relevante e performance máxima. A maioria dos meus clientes começa a receber visitas orgânicas em até 30 dias.'
  },
  {
    pergunta: 'E o chatbot de IA? Como funciona?',
    resposta: 'O chatbot é um assistente virtual configurado com as informações do seu negócio. Ele responde clientes automaticamente 24 horas por dia, tirando dúvidas sobre horários, serviços, localização e muito mais.'
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-12 text-center">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-0 divide-y divide-[#2A2A2A]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="py-6">
                <button
                  className="flex justify-between items-center w-full text-left text-white text-lg font-medium group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {faq.pergunta}
                  <ChevronDown
                    className={`h-5 w-5 text-[#A3E635] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-4 text-[#A0A0A0] text-base leading-relaxed">
                    {faq.resposta}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}