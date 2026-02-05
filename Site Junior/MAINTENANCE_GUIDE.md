# 🛠️ Guia de Manutenção - Site Junior Brunow

## 📋 Visão Geral

Este guia fornece instruções para manter e atualizar o site Junior Brunow, garantindo que a identidade visual **Editorial Luxury** seja preservada em futuras modificações.

---

## 🎨 Sistema de Design - Regras de Ouro

### **1. Paleta de Cores**

#### **Cores Primárias (Neutros)**
```css
/* SEMPRE use estas variáveis, NUNCA valores hardcoded */
var(--color-primary-900)  /* Preto - Textos principais */
var(--color-primary-800)  /* Carvão - Textos secundários */
var(--color-primary-100)  /* Off-white - Textos em fundos escuros */
var(--color-primary-50)   /* Branco cremoso - Fundos claros */
```

#### **Cores de Acento (Bronze/Dourado)**
```css
/* Use para CTAs, destaques e elementos decorativos */
var(--color-accent-600)   /* Bronze médio - Primário */
var(--color-accent-500)   /* Dourado suave - Hover states */
var(--gradient-accent)    /* Gradiente assinatura */
```

#### **❌ NÃO FAZER**
- Adicionar cores vibrantes (vermelho, azul, verde brilhante)
- Usar cores hardcoded como `#FF0000` ou `rgb(255,0,0)`
- Criar gradientes que não sejam dourados/bronze

#### **✅ FAZER**
- Sempre usar variáveis CSS do `theme.css`
- Manter paleta monocromática com acentos dourados
- Validar contraste (mínimo 4.5:1 para texto)

---

### **2. Tipografia**

#### **Hierarquia de Fontes**
```css
/* Display - Títulos principais (h1, h2) */
font-family: var(--font-display)  /* Cormorant Garamond */
font-weight: 300 (light) ou 400 (regular)

/* Body - Textos longos (p, li) */
font-family: var(--font-body)  /* Inter */
font-weight: 300 (light) ou 400 (regular)

/* Accent - CTAs e destaques (buttons, strong) */
font-family: var(--font-accent)  /* Playfair Display */
font-weight: 700 (bold) ou 900 (black)
```

#### **Tamanhos de Texto**
```css
/* Títulos */
h1: text-7xl md:text-9xl (Hero only)
h2: text-5xl md:text-7xl (Seções)
h3: text-2xl md:text-3xl (Subsections)

/* Corpo */
p: text-lg md:text-xl (Descrições)
p: text-base (Textos normais)
small: text-sm (Legendas)
```

#### **❌ NÃO FAZER**
- Usar mais de 3 famílias de fontes
- Usar font-weight bold (700) em Cormorant Garamond para títulos
- Usar text-xs para textos importantes

#### **✅ FAZER**
- Sempre usar `font-light` (300) para títulos grandes
- Manter line-height: `var(--leading-tight)` para títulos
- Usar `var(--leading-relaxed)` para parágrafos

---

### **3. Espaçamento**

#### **Sistema de 8px**
```css
/* Micro spacing (dentro de componentes) */
gap-2  /* 8px */
gap-4  /* 16px */
gap-6  /* 24px */

/* Macro spacing (entre seções) */
py-24 md:py-32  /* Seções principais */
mb-16 md:mb-24  /* Entre blocos */

/* Section padding */
px-8 md:px-16  /* Horizontal */
```

#### **❌ NÃO FAZER**
- Usar valores ímpares (gap-3, py-7)
- Usar padding/margin hardcoded (p-[13px])
- Quebrar o ritmo vertical

#### **✅ FAZER**
- Sempre usar múltiplos de 8px
- Manter consistência entre seções
- Usar max-width: 1600px para containers

---

## 🧩 Componentes - Boas Práticas

### **Adicionando Novo Componente**

#### **Template Base**
```tsx
import { motion } from "motion/react";

interface MyComponentProps {
  // Props aqui
}

export function MyComponent({ ...props }: MyComponentProps) {
  return (
    <section className="py-24 md:py-32 bg-primary-50" id="my-section">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        {/* Título Editorial - Layout 2 Colunas */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="font-light text-primary-900 text-5xl md:text-7xl leading-tight"
              style={{ 
                fontFamily: 'var(--font-display)',
                lineHeight: 'var(--leading-tight)'
              }}
            >
              Título
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-end"
          >
            <p 
              className="font-light text-primary-800 text-lg md:text-xl leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-body)',
                lineHeight: 'var(--leading-relaxed)'
              }}
            >
              Descrição
            </p>
          </motion.div>
        </div>

        {/* Conteúdo aqui */}
      </div>
    </section>
  );
}
```

---

### **Padrões de Animação**

#### **Entrada de Seção**
```tsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
```

#### **Hover em Cards**
```tsx
whileHover={{ y: -8 }}
transition={{ duration: 0.3 }}
```

#### **Hover em Imagens**
```tsx
whileHover={{ scale: 0.95 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

#### **❌ NÃO FAZER**
- Animações muito rápidas (< 0.2s)
- Animações muito lentas (> 1.5s)
- Bounce ou elastic exagerados

#### **✅ FAZER**
- Usar easing customizado: `[0.22, 1, 0.36, 1]`
- Sempre adicionar `viewport={{ once: true }}`
- Delays incrementais: 0.1s, 0.2s, 0.3s

---

## ♿ Acessibilidade - Checklist

### **Ao Adicionar Novo Elemento**

- [ ] Contraste de cores ≥ 4.5:1 (texto) ou ≥ 3:1 (texto grande)
- [ ] `aria-label` em botões de ícones
- [ ] `alt` text em imagens
- [ ] Navegável por teclado (Tab)
- [ ] Touch target ≥ 44x44px (mobile)
- [ ] HTML semântico (`<section>`, `<article>`, etc.)
- [ ] Hierarquia de títulos correta

### **Ferramentas de Validação**
```bash
# Lighthouse (Chrome DevTools)
# Alvo: 100/100 em Acessibilidade

# axe DevTools (Extensão)
# 0 violações críticas

# WAVE (Web Accessibility Evaluation Tool)
# 0 erros
```

---

## 🖼️ Adicionando Imagens

### **Formato e Otimização**
```bash
# 1. Converter para WebP
npx @squoosh/cli --webp auto image.jpg

# 2. Criar versões responsivas
# - Mobile: 800px width
# - Tablet: 1200px width
# - Desktop: 1920px width

# 3. Adicionar à pasta assets
src/assets/nome-descritivo.webp
```

### **Uso no Componente**
```tsx
import imgExample from "../../assets/nome-descritivo.webp";

<img
  src={imgExample}
  alt="Descrição detalhada da imagem"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### **❌ NÃO FAZER**
- Usar imagens > 500KB
- Esquecer `alt` text
- Usar formatos não otimizados (BMP, TIFF)

### **✅ FAZER**
- Sempre usar WebP ou AVIF
- Adicionar `loading="lazy"` em imagens abaixo da dobra
- Usar nomes descritivos

---

## 🎯 CTAs (Call-to-Actions)

### **Padrão Primário**
```tsx
<motion.a
  href="#contato"
  whileHover={{ backgroundColor: "var(--color-primary-900)" }}
  className="inline-block border-2 border-primary-900 px-12 py-4 transition-all group"
>
  <span 
    className="font-bold text-primary-900 text-sm uppercase tracking-widest group-hover:text-primary-50 transition-colors"
    style={{ fontFamily: 'var(--font-accent)' }}
  >
    Texto do CTA
  </span>
</motion.a>
```

### **Padrão Secundário (com gradiente)**
```tsx
<motion.a
  href="#contato"
  whileHover={{ scale: 1.05 }}
  className="inline-block px-12 py-4"
  style={{ background: 'var(--gradient-accent)' }}
>
  <span 
    className="font-bold text-primary-900 text-sm uppercase tracking-widest"
    style={{ fontFamily: 'var(--font-accent)' }}
  >
    Texto do CTA
  </span>
</motion.a>
```

---

## 🔧 Comandos Úteis

### **Desenvolvimento**
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

### **Testes de Acessibilidade**
```bash
# Lighthouse CLI
npx lighthouse http://localhost:5173 --view

# Pa11y
npx pa11y http://localhost:5173
```

---

## 📝 Atualizando Conteúdo

### **Textos**
- Editar diretamente nos componentes
- Manter tom de voz: profissional, acolhedor, sofisticado
- Evitar jargões técnicos

### **Imagens**
1. Adicionar à pasta `src/assets/`
2. Importar no componente
3. Atualizar array de dados

### **Cores**
1. Editar `src/styles/theme.css`
2. Validar contraste com [WebAIM](https://webaim.org/resources/contrastchecker/)
3. Testar em todos os componentes

---

## 🚨 Troubleshooting

### **Problema: Animações não funcionam**
- Verificar se `motion/react` está importado
- Verificar se `initial`, `animate` ou `whileInView` estão definidos
- Verificar console para erros

### **Problema: Cores não aplicadas**
- Verificar se variável CSS existe em `theme.css`
- Verificar sintaxe: `var(--color-primary-900)`
- Limpar cache do navegador

### **Problema: Layout quebrado em mobile**
- Verificar breakpoints: `md:`, `lg:`
- Testar em DevTools (responsive mode)
- Verificar overflow-x

---

## 📚 Recursos

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Motion Docs](https://motion.dev/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 🆘 Suporte

Para dúvidas ou problemas:
1. Consultar este guia
2. Revisar `IMPLEMENTATION_SUMMARY.md`
3. Verificar `ACCESSIBILITY.md`
4. Consultar documentação oficial das bibliotecas

---

**Última atualização: Fevereiro 2026**
