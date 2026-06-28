import Link from 'next/link'

export const metadata = {
  title: 'Termos de Uso | Mateus Hahn',
  description: 'Termos de uso do site Mateus Hahn. Saiba as condições de uso do site.',
}

export default function TermosUso() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-4 py-16 md:py-24">
      {/* JSON-LD: WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: 'https://mateushahn.com/termos-uso',
            name: 'Termos de Uso | Mateus Hahn',
            description: 'Termos de uso do site Mateus Hahn. Saiba as condições de uso do site.',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Mateus Hahn',
              url: 'https://mateushahn.com',
            },
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-12">
          <Link href="/" className="text-[#A3E635] hover:underline text-sm">
            ← Voltar para o site
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-6">Termos de Uso</h1>
          <p className="text-[#A0A0A0] text-sm mt-2">Última atualização: Junho de 2026</p>
        </div>

        {/* Conteúdo */}
        <div className="space-y-8 text-[#A0A0A0] text-base leading-relaxed">
          <p>Ao acessar este site, você concorda com estes termos.</p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Serviço</h2>
            <p>
              Este site apresenta os serviços de desenvolvimento web oferecidos por Mateus Hahn,
              desenvolvedor freelancer no Paraná. As informações aqui contidas são para fins de
              apresentação e contato comercial.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site — textos, imagens, logotipo, design e código — é de
              propriedade de Mateus Hahn. Não é permitida a reprodução total ou parcial sem
              autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Uso do Chatbot</h2>
            <p>
              O assistente virtual disponível neste site é um primeiro canal de atendimento. Para
              questões complexas, orçamentos ou contato direto, utilize o WhatsApp ou e-mail
              informados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Limitação de Responsabilidade</h2>
            <p>
              As informações deste site são fornecidas de boa-fé e atualizadas periodicamente, mas
              não garantem resultados específicos. Cada projeto de desenvolvimento web tem escopo e
              resultados próprios, definidos em contrato específico entre as partes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Links Externos</h2>
            <p>
              Este site contém links para WhatsApp e outras plataformas. Não me responsabilizo pelo
              conteúdo ou políticas de privacidade desses serviços terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contrato de Serviços</h2>
            <p>
              A apresentação dos serviços neste site não constitui contrato. Todo projeto é
              formalizado por contrato específico com escopo, prazo, valor e condições definidos
              entre as partes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Foro</h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca do
              Paraná para dirimir quaisquer questões.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contato</h2>
            <p>
              Dúvidas sobre estes termos?{' '}
              <a
                href="mailto:contato@mateushahn.com"
                className="text-[#A3E635] hover:underline"
              >
                contato@mateushahn.com
              </a>
            </p>
          </section>
        </div>

        {/* Rodapé da página */}
        <div className="mt-16 pt-8 border-t border-[#2A2A2A] text-sm text-[#A0A0A0]">
          <Link href="/" className="text-[#A3E635] hover:underline">
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </main>
  )
}