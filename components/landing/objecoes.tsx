import { X, Check } from 'lucide-react'

const objeções = [
  {
    objeção: '"É caro demais"',
    resposta: 'Um site que traz 1 cliente novo por mês já se pagou. A pergunta certa é: quanto custa não ter um site que vende?',
  },
  {
    objeção: '"Meu sobrinho faz mais barato"',
    resposta: 'Um site sem SEO, lento e que não aparece no Google não é barato — é prejuízo. O barato sai caro.',
  },
  {
    objeção: '"Já tive site e não deu resultado"',
    resposta: 'Provavelmente era um site sem SEO local, lento e que ninguém encontrava. O que eu faço é diferente.',
  },
  {
    objeção: '"Instagram já resolve"',
    resposta: 'Instagram é alugado — o algoritmo muda, a conta pode cair. Site é seu território. E o Google não mostra Instagram nas buscas.',
  },
  {
    objeção: '"Já fui enganado antes"',
    resposta: 'Contrato 50/50. Você só paga o restante quando o site estiver no ar e aprovado. Sem surpresas.',
  },
  {
    objeção: '"Agora não é o momento"',
    resposta: 'Cada mês sem um site profissional é um mês que seu concorrente leva o cliente que pesquisou por você.',
  },
]

export function Objecoes() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-12 text-center">
          Talvez você esteja pensando...
        </h2>

        <div className="space-y-4">
          {objeções.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 border border-[#2A2A2A] rounded-[5px] bg-[#111111] hover:border-[#A3E635]/30 transition-all duration-300"
            >
              {/* Ícone X - fixo à esquerda */}
              <div className="flex-shrink-0 mt-0.5">
                <X className="h-5 w-5 text-red-500" />
              </div>

              {/* Objeção + Resposta */}
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium">{item.objeção}</p>
                <div className="flex items-start gap-3 mt-1.5">
                  <Check className="h-4 w-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}