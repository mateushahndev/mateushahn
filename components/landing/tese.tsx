import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Tese() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
          Você tentou o site feito pelo sobrinho. Ou aquele template barato. Não funcionou. Aqui está o porquê.
        </h2>

        <div className="space-y-6 text-[#A0A0A0] text-base md:text-lg leading-relaxed">
          <p>
            A maioria dos sites de pequenos negócios tem o mesmo destino: bonitos por fora, invisíveis por dentro. Não aparecem no Google. Não funcionam no celular. Não transformam visitante em cliente.
          </p>
          <p>
            Enquanto isso, seu concorrente aparece primeiro na busca. O cliente pesquisa, encontra ele, e você perde a venda sem nem saber que ela existiu.
          </p>
          <p>
            Meu método é diferente. Cada site que construo é feito para resolver um problema específico: fazer seu negócio ser encontrado, gerar confiança em segundos e transformar visitas em clientes reais.
          </p>
        </div>

        <div className="mt-8">
          <Link href="https://wa.me/SEU_NUMERO" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-[#A3E635] text-[#A3E635] hover:bg-[#A3E635] hover:text-[#0D0D0D] px-8 py-6 text-base rounded-[5px] group transition-all duration-300">
              Quero Entender Como Funciona
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}