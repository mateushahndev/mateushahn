# mateushahn.com

Código-fonte da landing page pessoal de Mateus Hahn, desenvolvedor web especializado em criação de sites para pequenos negócios no Paraná.

Tecnologias: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui.

---

## Sobre o projeto

Esta é uma single page de vendas. O design é propositalmente técnico, com paleta escura, tipografia geométrica e hierarquia visual agressiva. Nada de templates. Nada de genérico.

O site comunica uma coisa: autoridade técnica.

---

## Tecnologias

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — v4
- [shadcn/ui](https://ui.shadcn.com/) — componentes base
- [Lucide React](https://lucide.dev/) — ícones
- [Vercel](https://vercel.com/) — deploy

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

---

## Estrutura

```
app/                # Rotas e layout
components/
  landing/          # Seções da página
  ui/               # Componentes shadcn
public/             # Imagens, ícones, manifest
lib/                # Utilitários
```

---

## Notas

- O SEO técnico está configurado para 100/100 no Lighthouse.
- Dados estruturados (JSON-LD) implementados.
- Performance otimizada com next/image e next/font.
- Acessibilidade básica garantida.

---

## Deploy

O projeto está preparado para deploy na Vercel. Conecte o repositório e faça o push.

---

## Autor

Mateus Hahn — Paraná, Brasil

---

## Licença

Todos os direitos reservados.