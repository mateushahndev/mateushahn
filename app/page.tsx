import { Hero } from '@/components/landing/hero'
import { Credibilidade } from '@/components/landing/credibilidade'
import { Tese } from '@/components/landing/tese'
import { Diferenciais } from '@/components/landing/diferenciais'
import { Processo } from '@/components/landing/processo'
import { Filosofia } from '@/components/landing/filosofia'
import { FAQ } from '@/components/landing/faq'
import { CtaFinal } from '@/components/landing/cta-final'
import { Footer } from '@/components/landing/footer'

export default function Home() {
  return (
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
    </main>
  )
}