'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => {
      setIsAnimating(true)
    })
  }

  const handleClose = () => {
    setIsAnimating(false)
    document.body.style.overflow = ''
    setTimeout(() => setIsOpen(false), 250)
  }

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const assistantId = (Date.now() + 1).toString()
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          content: '',
        },
      ])

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error('Erro na resposta')

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) throw new Error('Stream não disponível')

      let fullContent = ''
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() || ''

        for (const line of lines) {
          if (line.trim()) {
            fullContent += line
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === assistantId
                  ? { ...msg, content: fullContent }
                  : msg
              )
            )
          }
        }
      }

      if (buffer.trim()) {
        fullContent += buffer
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? { ...msg, content: fullContent }
              : msg
          )
        )
      }

      if (!fullContent) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantId
              ? { ...msg, content: 'Desculpe, não consegui processar sua pergunta. Tente novamente.' }
              : msg
          )
        )
      }
    } catch (error) {
      console.error('Erro no chat:', error)
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === (Date.now() + 1).toString()
            ? { ...msg, content: 'Desculpe, ocorreu um erro. Tente novamente.' }
            : msg
        )
      )
    }

    setIsLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => (isOpen ? handleClose() : handleOpen())}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-[5px] bg-[#A3E635] text-[#0D0D0D] shadow-lg transition-all hover:scale-105 hover:bg-[#8BCF2A] focus:outline-none focus:ring-2 focus:ring-[#A3E635] md:h-16 md:w-16"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? <X className="h-6 w-6 md:h-7 md:w-7" /> : <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />}
      </button>

      {/* Overlay escuro (mobile apenas) */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 md:hidden ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleClose}
        />
      )}

      {/* Janela do chat */}
      {isOpen && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 flex h-[90vh] max-h-[500px] w-full flex-col rounded-t-[5px] border border-[#2A2A2A] bg-[#0D0D0D] shadow-xl transition-all duration-300 ease-out md:bottom-24 md:right-6 md:left-auto md:h-[500px] md:w-[380px] md:max-h-none md:rounded-[5px] ${
            isAnimating
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-8 scale-95 opacity-0'
          }`}
        >
          {/* Cabeçalho */}
          <div className="flex items-center justify-between rounded-t-[5px] border-b border-[#2A2A2A] bg-[#0D0D0D] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#A3E635] text-[#0D0D0D]">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Assistente 24h</p>
                <p className="text-xs text-[#A0A0A0]">Online</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-[#A0A0A0] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <span
                  className={`max-w-[80%] rounded-[5px] px-4 py-2 text-sm whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-[#A3E635] text-[#0D0D0D]'
                      : 'border border-[#2A2A2A] bg-[#111111] text-white'
                  }`}
                >
                  {msg.content || (isLoading && msg.role === 'assistant' ? '...' : '')}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-[#2A2A2A] bg-[#0D0D0D] p-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-transparent text-sm text-white placeholder-[#A0A0A0] focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-[5px] bg-[#A3E635] p-2 text-[#0D0D0D] transition-colors hover:bg-[#8BCF2A] disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Rodapé WhatsApp */}
          <div className="rounded-b-[5px] border-t border-[#2A2A2A] bg-[#0D0D0D] px-4 py-2 text-center">
            <a
              href="https://wa.me/SEU_NUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#A0A0A0] hover:text-[#A3E635] transition-colors"
            >
              Falar no WhatsApp →
            </a>
          </div>
        </div>
      )}
    </>
  )
}