# 📸 Junior Brunow - Fotógrafo de Casamentos

Site de portfólio profissional com identidade visual **Editorial Luxury** - sofisticada, minimalista e memorável.

![Status](https://img.shields.io/badge/Status-Produção-success)
![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18-blue)

---

## ✨ Destaques

- 🎨 **Design Editorial Luxury** - Identidade visual distintiva e sofisticada
- ♿ **WCAG 2.1 AA Compliant** - Acessível para todos
- 🚀 **Performance Otimizada** - Carregamento rápido e suave
- 📱 **Totalmente Responsivo** - Perfeito em todos os dispositivos
- 🎬 **Micro-interações Deliciosas** - Animações sutis e significativas

---

## 🎨 Identidade Visual

### Paleta de Cores
- **Dominante**: Tons neutros sofisticados (preto profundo + off-white quente)
- **Acento**: Bronze/Dourado sutil (#B8956A, #D4AF77)
- **Contraste**: 20.8:1 (AAA) - Excelente acessibilidade

### Tipografia
- **Display**: Cormorant Garamond (títulos dramáticos)
- **Body**: Inter (legibilidade moderna)
- **Accent**: Playfair Display (CTAs impactantes)

---

## 🏗️ Tecnologias

- **React** 18+ - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS v4** - Styling utilitário
- **Motion** (Framer Motion) - Animações fluidas
- **Lucide React** - Ícones minimalistas

---

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/juniorbrunow/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

---

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Cria build otimizado
npm run preview      # Preview da build de produção

# Qualidade
npm run lint         # Verifica código com ESLint
npm run type-check   # Verifica tipos TypeScript
```

---

## 📁 Estrutura do Projeto

```
Site Junior/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes React
│   │   ├── hooks/           # Custom hooks
│   │   └── utils/           # Utilitários
│   ├── assets/              # Imagens e recursos
│   ├── styles/              # CSS global e temas
│   └── main.tsx             # Entry point
├── public/                  # Arquivos estáticos
├── ACCESSIBILITY.md         # Documentação de acessibilidade
├── IMPLEMENTATION_SUMMARY.md # Resumo da implementação
├── MAINTENANCE_GUIDE.md     # Guia de manutenção
└── README.md                # Este arquivo
```

---

## 🎯 Componentes Principais

### Header
- Logo tipográfico "JB"
- Glassmorphism com backdrop-blur
- Navegação responsiva
- CTA com gradiente dourado

### HeroSection
- Layout assimétrico (bottom-left)
- Tipografia dramática (text-9xl)
- Grain texture cinematográfica
- Linha decorativa animada

### GallerySection
- Grid assimétrico tipo Bento
- Aspect ratios variados
- Hover effects sutis
- Título editorial em 2 colunas

### TestimonialsSection
- Carrossel editorial
- Navegação por teclado (← →)
- Quote SVG decorativo
- Fundo escuro para contraste

### ContactSection
- Cards minimalistas
- Setas animadas
- Touch targets acessíveis
- Hover effects sofisticados

---

## ♿ Acessibilidade

### Conformidade WCAG 2.1 AA
- ✅ Contraste de cores: 20.8:1 (AAA)
- ✅ Navegação por teclado completa
- ✅ ARIA labels em elementos interativos
- ✅ HTML semântico
- ✅ Suporte a `prefers-reduced-motion`
- ✅ Touch targets ≥ 44x44px

### Testes
```bash
# Lighthouse
npx lighthouse http://localhost:5173 --view

# Pa11y
npx pa11y http://localhost:5173
```

Veja [ACCESSIBILITY.md](./ACCESSIBILITY.md) para detalhes completos.

---

## 🎨 Customização

### Cores
Edite `src/styles/theme.css`:
```css
:root {
  --color-primary-900: #0A0908;  /* Preto */
  --color-accent-600: #B8956A;   /* Bronze */
  /* ... */
}
```

### Tipografia
Edite `src/styles/fonts.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&display=swap');
```

### Conteúdo
Edite os componentes em `src/app/components/`:
- Textos
- Imagens
- Links de redes sociais

Veja [MAINTENANCE_GUIDE.md](./MAINTENANCE_GUIDE.md) para guia completo.

---

## 📊 Performance

### Métricas Alvo
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: 90+

### Otimizações
- ✅ Lazy loading de componentes
- ✅ Grain texture em SVG inline
- ✅ Animações com GPU acceleration
- ✅ Fontes com `display=swap`
- ⏳ Imagens WebP (próximo)
- ⏳ Code splitting (próximo)

---

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy pasta dist/
```

### Outras Plataformas
O projeto é compatível com qualquer plataforma que suporte sites estáticos:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

---

## 📝 Documentação

- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - Resumo completo da implementação
- [ACCESSIBILITY.md](./ACCESSIBILITY.md) - Checklist de acessibilidade
- [MAINTENANCE_GUIDE.md](./MAINTENANCE_GUIDE.md) - Guia de manutenção

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é propriedade de **Junior Brunow Fotógrafo**.  
Todos os direitos reservados © 2026

---

## 📧 Contato

**Junior Brunow**
- Instagram: [@juniorbrunow](https://www.instagram.com/juniufotografia/)
- Email: contato@juniorbrunow.com
- WhatsApp: +55 27 99604-2465

---

## 🙏 Agradecimentos

- [Google Fonts](https://fonts.google.com/) - Tipografia premium
- [Lucide](https://lucide.dev/) - Ícones minimalistas
- [Motion](https://motion.dev/) - Animações fluidas
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

---

**Desenvolvido com ❤️ e atenção aos detalhes**

*Fevereiro 2026*