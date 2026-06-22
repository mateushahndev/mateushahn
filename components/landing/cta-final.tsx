import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CtaFinal() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
          Pronto para ter um site que trabalha por você?
        </h2>
        <p className="text-[#A0A0A0] text-base md:text-lg mb-8">
          Aceito 3 projetos por mês. Este mês, ainda tenho vagas disponíveis.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link href="https://wa.me/5542998530633?text=Ol%C3%A1%20Mateus%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#A3E635] hover:bg-[#8BCF2A] text-[#0D0D0D] font-semibold px-10 py-7 text-lg rounded-[5px] group transition-all duration-300">
              Solicitar Orçamento Grátis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-[#A0A0A0] text-sm">
            Resposta em até 24h. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  )
}