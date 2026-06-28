'use client'

import { useEffect, useRef } from 'react'
import { analytics } from '@/lib/analytics'

export function useScrollBottom() {
  const hasTriggered = useRef(false)

  useEffect(() => {
    // Se já disparou, não faz nada
    if (hasTriggered.current) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Detecta quando o usuário chegou nos últimos 100px do rodapé
      if (scrollTop + windowHeight >= documentHeight - 100) {
        if (!hasTriggered.current) {
          hasTriggered.current = true
          analytics.scrollBottom()
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}