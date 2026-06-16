import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mateus Hahn | Sites profissionais para pequenos negócios',
  description: 'Criação de sites rápidos, otimizados para o Google e com chatbot de IA para pequenos negócios no Paraná.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.className}>
      <body className="bg-[#0D0D0D] text-white antialiased">{children}</body>
    </html>
  )
}