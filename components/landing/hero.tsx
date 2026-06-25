import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto w-full">
        {/* Mobile: texto alinhado à esquerda / Desktop: centralizado */}
        <div className="text-left md:text-center space-y-6 md:space-y-8">
          {/* Tag com nome + subtítulo */}
          <div className="space-y-2">
            <p className="text-[#A3E635] font-medium text-sm md:text-base tracking-wider uppercase">
              Mateus Hahn
            </p>
            <p className="text-[#A0A0A0] text-lg md:text-xl">
              Sites profissionais para pequenos negócios
            </p>
          </div>

          {/* Headline principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Clientes encontram você.
            <br />
            <span className="text-[#A3E635]">Não seu concorrente.</span>
          </h1>

          {/* Texto de apoio */}
          <p className="text-[#A0A0A0] text-base md:text-lg max-w-2xl md:mx-auto leading-relaxed">
            Seu site deveria estar trazendo clientes enquanto você trabalha. Se não está, algo está errado.
          </p>

          {/* Texto secundário */}
          <p className="text-[#A0A0A0] text-sm md:text-base max-w-2xl md:mx-auto leading-relaxed">
            Sites rápidos, otimizados para o Google e com chatbot de IA que atende por você 24 horas por dia — sem mensalidade de hospedagem.
          </p>

          {/* CTA e texto abaixo */}
          <div className="flex flex-col items-start md:items-center gap-4 pt-4">
            <Link href="https://wa.me/5542998530633?text=Ol%C3%A1%20Mateus%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#A3E635] hover:bg-[#8BCF2A] text-[#0D0D0D] font-semibold px-8 py-6 text-base rounded-[5px] group transition-all duration-300">
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-[#A0A0A0] text-sm">
              Resposta em até 24h. Sem compromisso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}