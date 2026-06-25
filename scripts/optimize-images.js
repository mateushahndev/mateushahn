const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

// ===== CONFIGURAÇÕES =====
const PASTA_RAIZ = "./public"
const QUALIDADE = 82
const LARGURA_MAXIMA = 1200   // redimensiona imagens muito grandes
const ALTURA_MAXIMA = 1200

// Extensões que serão processadas
const EXTENSOES = [".webp", ".jpg", ".jpeg", ".png"]

// Pastas que serão IGNORADAS (ex: ícones, favicon)
const IGNORAR_PASTAS = ["icons", "favicon.ico", "og-image.jpg"]

// ===== FUNÇÃO PRINCIPAL =====
function processarPasta(pasta) {
  if (!fs.existsSync(pasta)) {
    console.log(`⚠️ Pasta não encontrada: ${pasta}`)
    return
  }

  const items = fs.readdirSync(pasta)

  for (const item of items) {
    const caminho = path.join(pasta, item)
    const stat = fs.statSync(caminho)

    // Se for pasta, processa recursivamente
    if (stat.isDirectory()) {
      // Pula pastas ignoradas
      if (IGNORAR_PASTAS.includes(item)) {
        console.log(`⏭️ Ignorando pasta: ${item}`)
        continue
      }
      processarPasta(caminho)
      continue
    }

    // Se for arquivo de imagem
    const ext = path.extname(item).toLowerCase()
    if (EXTENSOES.includes(ext)) {
      const nomeSemExt = path.basename(item, ext)
      const output = path.join(pasta, nomeSemExt + ".webp")

      // Pula se já existe um .webp com o mesmo nome
      if (fs.existsSync(output) && ext !== ".webp") {
        console.log(`⏭️ Pulando ${item} (já existe .webp)`)
        continue
      }

      console.log(`🔄 Processando: ${item}`)

      sharp(caminho)
        .resize(LARGURA_MAXIMA, ALTURA_MAXIMA, { 
          fit: "inside",   // mantém proporção, não estica
          withoutEnlargement: true // não aumenta imagens pequenas
        })
        .webp({ quality: QUALIDADE })
        .toFile(output + ".tmp")
        .then(() => {
          // Remove original se não for .webp
          if (ext !== ".webp") {
            fs.unlinkSync(caminho)
          }
          fs.renameSync(output + ".tmp", output)
          console.log(`✅ ${item} → ${nomeSemExt}.webp`)
        })
        .catch((err) => {
          console.error(`❌ Erro em ${item}:`, err.message)
        })
    }
  }
}

// ===== INICIAR =====
console.log(`🚀 Otimizando imagens em: ${PASTA_RAIZ}`)
console.log(`📐 Largura máxima: ${LARGURA_MAXIMA}px, Altura máxima: ${ALTURA_MAXIMA}px`)
console.log(`🎯 Qualidade: ${QUALIDADE}%\n`)

processarPasta(PASTA_RAIZ)

console.log("\n✅ Processamento concluído!")