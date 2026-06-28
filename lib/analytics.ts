// lib/analytics.ts

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: {
        event_category: string
        event_label?: string
        value?: number
        [key: string]: string | number | undefined
      }
    ) => void
  }
}

export const analytics = {
  /**
   * Dispara evento de clique no WhatsApp
   * @param label - Origem do clique: 'hero' | 'cta_final' | 'footer' | 'chatbot' | 'cases'
   */
  whatsappClick: (label: string) => {
    if (typeof window === 'undefined' || !window.gtag) return
    window.gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: label,
    })
  },

  /**
   * Dispara evento de abertura do chatbot
   */
  chatbotOpen: () => {
    if (typeof window === 'undefined' || !window.gtag) return
    window.gtag('event', 'chatbot_open', {
      event_category: 'engagement',
    })
  },

  /**
   * Dispara evento de visualização de portfólio/case
   * @param label - Nome do case: 'pet-shop' | 'loja-moda' | 'salao-beleza'
   */
  portfolioView: (label: string) => {
    if (typeof window === 'undefined' || !window.gtag) return
    window.gtag('event', 'portfolio_view', {
      event_category: 'engagement',
      event_label: label,
    })
  },

  /**
   * Dispara evento de scroll até o final da página (apenas uma vez)
   */
  scrollBottom: () => {
    if (typeof window === 'undefined' || !window.gtag) return
    window.gtag('event', 'scroll_bottom', {
      event_category: 'engagement',
    })
  },
}