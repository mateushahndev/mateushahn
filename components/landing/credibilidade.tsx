'use client'

import { useEffect, useState, useRef } from 'react'
import { 
  Gauge, 
  MapPin, 
  Bot, 
  Cloud, 
  Smartphone, 
  FileText 
} from 'lucide-react'

const badges = [
  { 
    icon: Gauge, 
    label: 'Google PageSpeed 100',
    description: 'Nota máxima em performance'
  },
  { 
    icon: MapPin, 
    label: 'SEO Local',
    description: 'Ranqueie na sua cidade'
  },
  { 
    icon: Bot, 
    label: 'Chatbot de IA 24h',
    description: 'Atendimento automático'
  },
  { 
    icon: Cloud, 
    label: 'Hospedagem Gratuita',
    description: 'Sem mensalidade'
  },
  { 
    icon: Smartphone, 
    label: 'Design Responsivo',
    description: 'Funciona em qualquer tela'
  },
  { 
    icon: FileText, 
    label: 'Contrato Transparente',
    description: 'Sem letras miúdas'
  },
]

export function Credibilidade() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentTranslate, setCurrentTranslate] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const totalItems = badges.length
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null)

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalItems)
      }, 3000)
    } else {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current)
        autoPlayInterval.current = null
      }
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current)
      }
    }
  }, [isAutoPlaying, isDragging, totalItems])

  // Touch/Mouse handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setIsAutoPlaying(false)
    setStartX(clientX)
    setCurrentTranslate(currentIndex * -100)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    const percentage = (diff / (containerRef.current?.offsetWidth || 1)) * 100
    setCurrentTranslate((currentIndex * -100) + percentage)
  }

  const handleDragEnd = (clientX: number) => {
    if (!isDragging) return
    setIsDragging(false)
    
    const diff = clientX - startX
    const threshold = 50 // pixels mínimos para considerar um swipe
    
    if (diff < -threshold && currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (diff > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      // Volta para o item atual
      setCurrentTranslate(currentIndex * -100)
    }
    
    setIsAutoPlaying(true)
  }

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0]
    handleDragEnd(touch.clientX)
  }

  // Mouse events (para desktop também funcionar com drag)
  const onMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  const onMouseMove = (e: MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const onMouseUp = (e: MouseEvent) => {
    handleDragEnd(e.clientX)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(true)
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 border-t border-b border-[#2A2A2A]">
      <div className="max-w-6xl mx-auto">
        {/* Versão desktop: grid 3 colunas */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div 
                key={badge.label}
                className="flex items-center gap-4 p-4 border border-[#2A2A2A] rounded-[5px] hover:border-[#A3E635]/30 transition-all duration-300"
              >
                <div className="p-3 border border-[#2A2A2A] rounded-[5px] text-[#A3E635] flex-shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{badge.label}</p>
                  <p className="text-[#A0A0A0] text-xs">{badge.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Versão mobile: carrossel com drag */}
        <div className="md:hidden relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex cursor-grab active:cursor-grabbing select-none"
            style={{ 
              transform: `translateX(${isDragging ? currentTranslate : currentIndex * -100}%)`,
              transition: isDragging ? 'none' : 'transform 500ms ease-in-out'
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
          >
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div 
                  key={badge.label}
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="border border-[#2A2A2A] rounded-[5px] p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 border border-[#2A2A2A] rounded-[5px] text-[#A3E635]">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <p className="text-white font-medium text-base">{badge.label}</p>
                    <p className="text-[#A0A0A0] text-sm mt-1">{badge.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center gap-2 mt-4">
            {badges.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 bg-[#A3E635]' 
                    : 'w-1.5 bg-[#2A2A2A]'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}