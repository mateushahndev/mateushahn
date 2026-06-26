import { ShieldCheck } from 'lucide-react'

export function Garantia() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A] bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 border border-[#2A2A2A] rounded-[5px] text-[#A3E635]">
            <ShieldCheck className="h-10 w-10" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
          Zero risco. Zero surpresa.
        </h2>

        <div className="space-y-4 text-[#A0A0A0] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            Você aprova o protótipo antes de eu codar. Só paga os 50% finais quando o site estiver no ar e você aprovar.
          </p>
          <p>
            Se não gostar do layout inicial, ajusto sem custo adicional — até ficar do jeito que você quer.
          </p>
          <p className="text-white font-medium">
            Contrato claro, pagamento 50/50, sem letras miúdas.
          </p>
        </div>
      </div>
    </section>
  )
}