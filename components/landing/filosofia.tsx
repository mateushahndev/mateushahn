import Image from 'next/image'

export function Filosofia() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A] bg-[#161616]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Texto - lado esquerdo */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              Sites feitos para quem vive do próprio negócio.
            </h2>
            
            <div className="space-y-4 text-[#A0A0A0] text-base md:text-lg leading-relaxed">
              <p>
                Pequenos negócios funcionam de um jeito diferente. Você não tem tempo para aprender a gerenciar um site. Nem dinheiro para desperdiçar com coisas que não funcionam. E definitivamente não pode perder cliente porque seu concorrente apareceu primeiro no Google.
              </p>
              <p>
                Eu sou Mateus Hahn, desenvolvedor web e trabalho com pequenos empresários do Paraná. Meu objetivo é simples: entregar um site que parece caro, mas é acessível. Que roda liso, aparece no Google e atende cliente até de madrugada.
              </p>
              <p>
                Não uso templates prontos. Não empurro mensalidade. Não sumo depois do contrato assinado. Cada projeto é feito sob medida — porque seu negócio também é.
              </p>
            </div>
          </div>

          {/* Foto - lado direito */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/landing/mateus.webp"
                alt="Mateus Hahn - Desenvolvedor Web"
                fill
                className="object-cover rounded-[5px]"
                priority
              />
              {/* Borda decorativa verde */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#A3E635]/20 rounded-[5px] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}