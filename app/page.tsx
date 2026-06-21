import { Hero } from '@/components/landing/hero'
import { Credibilidade } from '@/components/landing/credibilidade'
import { Tese } from '@/components/landing/tese'
import { Diferenciais } from '@/components/landing/diferenciais'
import { Processo } from '@/components/landing/processo'
import { Filosofia } from '@/components/landing/filosofia'
import { FAQ } from '@/components/landing/faq'
import { CtaFinal } from '@/components/landing/cta-final'
import { Footer } from '@/components/landing/footer'
import { ChatWidget } from '@/components/chat/ChatWidget'

const faqData = [
  {
    question: 'Quanto custa um site?',
    answer: 'Cada projeto é único. O valor depende do que seu negócio precisa. Entre em contato para uma conversa sem compromisso e receba um orçamento personalizado.'
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer: 'Não. A hospedagem é gratuita. Você só precisa do domínio (ex: meusite.com.br), que custa cerca de R$50 por ano. Sem mensalidade, sem surpresas.'
  },
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'Entre 5 e 7 dias úteis, dependendo da complexidade do projeto. Você acompanha todo o processo e aprova cada etapa.'
  },
  {
    question: 'O site vai aparecer no Google?',
    answer: 'Sim. Cada site é otimizado para SEO local, com estrutura correta, conteúdo relevante e performance máxima. A maioria dos meus clientes começa a receber visitas orgânicas em até 30 dias.'
  },
  {
    question: 'E o chatbot de IA? Como funciona?',
    answer: 'O chatbot é um assistente virtual configurado com as informações do seu negócio. Ele responde clientes automaticamente 24 horas por dia, tirando dúvidas sobre horários, serviços, localização e muito mais.'
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://mateushahn.dev/#person',
      name: 'Mateus Hahn',
      jobTitle: 'Desenvolvedor Web',
      description: 'Criação de sites profissionais para pequenos negócios no Paraná.',
      url: 'https://mateushahn.dev',
      sameAs: [
        'https://github.com/mateushahndev',
        'https://linkedin.com/in/mateushahn',
        'https://instagram.com/mateushahn',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Mateus Hahn - Desenvolvimento Web',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paraná',
        addressCountry: 'BR',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://mateushahn.dev/#website',
      url: 'https://mateushahn.dev',
      name: 'Mateus Hahn | Criação de Sites',
      description: 'Sites profissionais, rápidos e otimizados para o Google. Atendimento com chatbot de IA 24h e hospedagem gratuita.',
      publisher: {
        '@id': 'https://mateushahn.dev/#person',
      },
      inLanguage: 'pt-BR',
    },
    {
      '@type': 'Service',
      '@id': 'https://mateushahn.dev/#service',
      name: 'Criação de Sites para Pequenos Negócios',
      serviceType: 'Desenvolvimento Web',
      description: 'Sites rápidos, otimizados para o Google e com chatbot de IA 24h. Design responsivo, SEO local, hospedagem gratuita.',
      provider: {
        '@id': 'https://mateushahn.dev/#person',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Paraná',
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://wa.me/SEU_NUMERO',
        availabilityMethod: 'WhatsApp',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://mateushahn.dev/#faqpage',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <Credibilidade />
        <Tese />
        <Diferenciais />
        <Processo />
        <Filosofia />
        <FAQ />
        <CtaFinal />
        <Footer />
        <ChatWidget />
      </main>
    </>
  )
}