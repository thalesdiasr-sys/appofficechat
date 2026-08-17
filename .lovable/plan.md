# Plano de Modernização Visual da Landing Page OfficeChat

O objetivo é tornar o site mais "clean", moderno e visualmente integrado, seguindo as referências fornecidas pelo usuário. A estética focará em um estilo "Apple-like", com muito espaço em branco, tipografia nítida, sombras suaves (soft shadows), glassmorphism refinado e elementos de interface (UI) desenhados diretamente via código em vez de imagens pesadas.

## Mudanças Visuais e de Design

### 1. Sistema de Design e Cores (src/styles.css)
- Refinar a paleta de cores para um "Clean Economy Style": fundos quase brancos, cinzas muito claros para superfícies e o verde da marca como acento principal.
- Atualizar a utilidade `card-surface` para usar glassmorphism mais sutil (menos opacidade, mais desfoque).
- Criar utilidades para "Soft Glow" e "Floating Effect".
- Ajustar gradientes para serem quase imperceptíveis, apenas para dar profundidade.

### 2. Hero Section (src/components/landing/Hero.tsx)
- **Substituir a imagem do dashboard**: Em vez de uma imagem estática (hero-dashboard.jpg), criar um "Fake UI Dashboard" usando componentes React e Tailwind. Isso garante nitidez total e um visual "vetorial" ultra-clean.
- Este dashboard simulado mostrará uma conversa de chat com elementos de IA agindo.
- Aumentar o espaçamento (whitespace) entre o texto e a demonstração visual.

### 3. Seção de Economia (src/components/landing/Economy.tsx)
- Redesenhar os cards comparativos para serem mais minimalistas.
- Usar ícones de linha fina e cores pastéis.
- Centralizar o foco nos números de impacto (ROI) com fontes maiores e mais leves.

### 4. Refinamento de Componentes
- **Navbar & Footer**: Garantir que a logo esteja perfeitamente integrada e os links tenham hovers sutis.
- **Features & Comparison**: Remover bordas pesadas, usar divisores finos e mais "respiro" entre os itens.
- **Pricing**: Simplificar os cards de preço, mantendo apenas o essencial e destacando o plano "Starter" com um brilho muito suave em vez de bordas coloridas fortes.

## Detalhes Técnicos

- **Framework**: TanStack Start (React 19).
- **Styling**: Tailwind CSS v4.
- **Ícones**: Lucide React.
- **Dashboard Simulado**:
  - `div`s com `backdrop-blur`.
  - Animações simples para simular mensagens entrando.
  - Uso de `grid` para simular as colunas do CRM Kanban.

Este plano foca na qualidade visual e na legibilidade, eliminando o aspecto de "template pronto" e entregando uma experiência premium.
