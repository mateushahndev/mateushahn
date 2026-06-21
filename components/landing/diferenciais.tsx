import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  MapPin, 
  Bot, 
  Zap, 
  Smartphone, 
  Cloud,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const diferenciais = [
  {
    id: '01',
    icon: MapPin,
    title: 'Negócio no Google',
    subtitle: 'SEO local de verdade',
    text: 'Quando alguém pesquisa "dentista em Maringá" ou "restaurante em Londrina", o Google mostra sites — não perfis de Instagram. A maioria dos pequenos negócios está invisível nessas buscas. O concorrente aparece primeiro. Você não. Eu otimizo cada página do seu site para ranquear nas buscas locais que importam para o seu negócio. Não é SEO genérico — é feito para sua cidade e seu serviço.',
    cta: 'Solicitar Orçamento Grátis',
    image: '/landing/seo.png',
    alt: 'Resultados de busca no Google mostrando sites de empresas locais',
  },
  {
    id: '02',
    icon: Shield,
    title: 'GEO — Otimização para IA',
    subtitle: 'Seu site pronto para a nova era das buscas',
    text: 'O Google mudou. Hoje, as pessoas perguntam e a IA responde — citando os sites que considera mais confiáveis. Eu preparo cada site com dados estruturados, FAQ otimizada e conteúdo semântico para que sua empresa seja citada por essas inteligências artificiais. Enquanto seu concorrente não aparece em lugar nenhum, você é a resposta que a IA recomenda.',
    cta: 'Quero Ser Citado pela IA',
    image: '/landing/geo.png',
    alt: 'IA respondendo com base em sites confiáveis',
  },
  {
    id: '03',
    icon: Zap,
    title: 'Performance real',
    subtitle: 'Carrega em 2 segundos',
    text: 'Sites lentos perdem visitantes antes mesmo de mostrar o que você oferece. O Google também penaliza — você some das buscas e não sabe por quê. Meus sites entregam nota máxima no Google PageSpeed. Carregam em menos de 2 segundos — em qualquer dispositivo.',
    cta: 'Quero um Site Rápido',
    image: '/landing/performance.png',
    alt: 'Google PageSpeed Insights mostrando nota máxima em performance',
  },
  {
    id: '04',
    icon: Bot,
    title: 'Chatbot de IA',
    subtitle: 'Atendimento 24 horas',
    text: 'Um assistente virtual configurado com todas as informações do seu negócio: horários, serviços, localização, dúvidas frequentes. Enquanto você está ocupado, em uma consulta, ou fora do horário comercial, o chatbot responde seus clientes. Nenhum concorrente na região entrega isso.',
    cta: 'Quero Isso no Meu Site',
    image: '/landing/chat.png',
    alt: 'Chatbot de IA atendendo cliente automaticamente',
  },
  {
    id: '05',
    icon: Smartphone,
    title: 'Design responsivo',
    subtitle: 'Funciona em qualquer celular',
    text: 'Seu site quebrado no celular está afastando a maioria dos seus clientes. Cada site que entrego funciona perfeitamente em qualquer tela — sem texto minúsculo, sem botão impossível de clicar.',
    cta: 'Solicitar Orçamento Grátis',
    image: '/landing/responsivo.png',
    alt: 'Site responsivo funcionando em celular e desktop',
  },
  {
    id: '06',
    icon: Cloud,
    title: 'Hospedagem gratuita',
    subtitle: 'Sem custo mensal escondido',
    text: 'A hospedagem é gratuita. Você só precisa de um domínio com o nome do seu negócio — cerca de R$50 por ano. Nada de mensalidade obrigatória ou surpresas na fatura.',
    cta: 'Quero Começar',
    image: '/landing/cloud.png',
    alt: 'Dashboard da Vercel mostrando plano gratuito',
  },
]

export function Diferenciais() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-16 text-center">
          O que você ganha com um site de verdade
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-6">
          {diferenciais.map((item, index) => {
            const Icon = item.icon

            return (
              <div 
                key={item.id}
                className="border border-[#2A2A2A] bg-[#111111] rounded-[5px] transition-all duration-300 hover:border-[#A3E635]/30 overflow-hidden"
              >
                {/* Imagem ou placeholder - EM CIMA */}
                <div className="w-full border-b border-[#2A2A2A] bg-[#0D0D0D] flex items-center justify-center">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={800}
                      height={450}
                      className="w-full h-auto object-contain"
                      quality={95}
                      priority={index < 2}
                    />
                  ) : (
                    <div className="text-center p-8 py-12">
                      <Icon className="h-16 w-16 text-[#A3E635] opacity-30 mx-auto mb-2" />
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wider">
                        Visual do diferencial
                      </p>
                    </div>
                  )}
                </div>

                {/* Texto - EMBAIXO */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-[#A3E635] font-mono text-sm font-bold opacity-60">
                      {item.id}
                    </span>
                    <div className="p-2 border border-[#2A2A2A] rounded-[5px] text-[#A3E635]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg font-medium text-[#A3E635]">
                    {item.subtitle}
                  </p>
                  <p className="text-[#A0A0A0] text-base leading-relaxed">
                    {item.text}
                  </p>
                  <div className="pt-2">
                    <Link href="https://wa.me/SEU_NUMERO" target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="outline" 
                        className="border-[#A3E635] text-[#A3E635] hover:bg-[#A3E635] hover:text-[#0D0D0D] px-6 py-5 text-sm rounded-[5px] group transition-all duration-300"
                      >
                        {item.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}