import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const passos = [
  {
    numero: '01',
    titulo: 'Conversamos sobre seu negócio',
    descricao: 'Entendo o que você faz, quem é seu cliente e o que você precisa. Sem enrolação, sem jargão técnico.'
  },
  {
    numero: '02',
    titulo: 'Construo seu site em até 14 dias',
    descricao: 'Entrego um site rápido, bonito e otimizado. Você acompanha o processo e aprova cada etapa.'
  },
  {
    numero: '03',
    titulo: 'Seu site no ar e trabalhando por você',
    descricao: 'Publicamos o site, configuramos o chatbot e você começa a receber clientes. Simples assim.'
  },
]

export function Processo() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-12 text-center">
          Do primeiro contato ao site no ar.
          <br />
          <span className="text-[#A3E635]">Simples, rápido e sem enrolação.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {passos.map((passo) => (
            <div key={passo.numero} className="text-center space-y-4">
              <p className="text-5xl md:text-6xl font-bold text-[#A3E635] opacity-60">
                {passo.numero}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {passo.titulo}
              </h3>
              <p className="text-[#A0A0A0] text-base leading-relaxed">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="https://wa.me/5542998530633?text=Ol%C3%A1%20Mateus%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#A3E635] hover:bg-[#8BCF2A] text-[#0D0D0D] font-semibold px-8 py-6 text-base rounded-[5px] group transition-all duration-300">
              Quero Começar
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}