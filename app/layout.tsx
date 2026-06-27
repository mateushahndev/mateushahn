import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Mateus Hahn | Criação de Sites para Pequenos Negócios',
  description:
    'Sites profissionais, rápidos e otimizados para o Google. Atendimento com chatbot de IA 24h e hospedagem gratuita. Atendo todo o Paraná.',
  keywords:
    'criação de sites, desenvolvimento web, SEO local, chatbot IA, pequenos negócios, Paraná, Maringá, Londrina',
  authors: [{ name: 'Mateus Hahn' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Mateus Hahn | Criação de Sites para Pequenos Negócios',
    description:
      'Sites profissionais, rápidos e otimizados para o Google. Atendimento com chatbot de IA 24h e hospedagem gratuita.',
    url: 'https://mateushahn.com',
    siteName: 'Mateus Hahn',
    images: [
      {
        url: 'https://mateushahn.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mateus Hahn - Criação de Sites para Pequenos Negócios',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mateus Hahn | Criação de Sites para Pequenos Negócios',
    description:
      'Sites profissionais, rápidos e otimizados para o Google. Atendimento com chatbot de IA 24h.',
    images: ['https://mateushahn.com/og-image.jpg'],
    creator: '@mateushahn',
  },
  alternates: {
    canonical: 'https://mateushahn.com',
    languages: {
      'pt-BR': 'https://mateushahn.com',
    },
  },
  verification: {
    google: 'gEETncCm1v6caHy_nHk2N0j4PbkoBeBlh7fsBtUkxgQ',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D0D0D" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://wa.me" />
        <meta
          name="google-site-verification"
          content="gEETncCm1v6caHy_nHk2N0j4PbkoBeBlh7fsBtUkxgQ"
        />
      </head>
      <body className="bg-[#0D0D0D] text-white antialiased">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EFG4Y7J16G"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EFG4Y7J16G');
            `,
          }}
        />
      </body>
    </html>
  )
}