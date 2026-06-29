import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidade | Mateus Hahn',
  description: 'Política de privacidade do site Mateus Hahn. Saiba como seus dados são tratados.',
}

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white px-4 py-16 md:py-24">
      {/* JSON-LD: Breadcrumb + WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Início',
                    item: 'https://mateushahn.com',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Política de Privacidade',
                    item: 'https://mateushahn.com/politica-privacidade',
                  },
                ],
              },
              {
                '@type': 'WebPage',
                url: 'https://mateushahn.com/politica-privacidade',
                name: 'Política de Privacidade | Mateus Hahn',
                description:
                  'Política de privacidade do site Mateus Hahn. Saiba como seus dados são tratados.',
                isPartOf: {
                  '@type': 'WebSite',
                  name: 'Mateus Hahn',
                  url: 'https://mateushahn.com',
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-12">
          <Link href="/" className="text-[#A3E635] hover:underline text-sm">
            ← Voltar para o site
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mt-6">Política de Privacidade</h1>
          <p className="text-[#A0A0A0] text-sm mt-2">Última atualização: Junho de 2026</p>
        </div>

        {/* Conteúdo - mantém o mesmo */}
        <div className="space-y-8 text-[#A0A0A0] text-base leading-relaxed">
          <p>A sua privacidade é importante para mim. Esta política explica como seus dados são tratados ao usar este site.</p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Dados Coletados</h2>
            <p>Este site pode coletar:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Informações que você envia voluntariamente pelo formulário de contato (nome, e-mail, telefone, mensagem)</li>
              <li>Informações que você compartilha ao interagir com o chatbot (dúvidas, nome se mencionado)</li>
              <li>Dados de navegação anônimos via Google Analytics (se ativado), como páginas visitadas e tempo de permanência</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Como Uso Seus Dados</h2>
            <p>Seus dados são usados exclusivamente para:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Responder suas dúvidas e solicitações</li>
              <li>Enviar orçamentos e propostas quando solicitado</li>
              <li>Melhorar a experiência do site (dados anônimos)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Compartilhamento</h2>
            <p>Seus dados NÃO são vendidos, compartilhados ou repassados para terceiros. As únicas exceções:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Google Analytics (dados anônimos e agregados)</li>
              <li>Autoridades legais, se exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Armazenamento</h2>
            <p>As informações de contato são armazenadas de forma segura apenas pelo tempo necessário para atendê-lo. Dados anônimos do Google Analytics são retidos conforme a política do Google.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Seus Direitos (LGPD)</h2>
            <p>Você tem direito a:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Saber quais dados seus estão sendo tratados</li>
              <li>Solicitar correção ou exclusão dos seus dados</li>
              <li>Revogar seu consentimento a qualquer momento</li>
            </ul>
            <p className="mt-2">
              Para exercer esses direitos, entre em contato:{' '}
              <a
                href="mailto:contato@mateushahn.com"
                className="text-[#A3E635] hover:underline"
              >
                contato@mateushahn.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
            <p>Este site pode usar cookies essenciais para funcionamento e cookies analíticos (Google Analytics). Você pode desabilitar cookies nas configurações do seu navegador.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contato</h2>
            <p>
              Dúvidas sobre esta política? Escreva para{' '}
              <a
                href="mailto:contato@mateushahn.com"
                className="text-[#A3E635] hover:underline"
              >
                contato@mateushahn.com
              </a>
              .
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