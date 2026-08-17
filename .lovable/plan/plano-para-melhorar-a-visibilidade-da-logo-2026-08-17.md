# Plano para Melhorar a Visibilidade da Logo

O usuário informou que a logo não está muito visível devido às cores preto e verde (grafite e verde, na verdade, conforme o contexto anterior). Atualmente, a logo está sendo exibida sobre um fundo escuro (`oklch(0.17 0.004 145)`), o que dificulta a distinção do elemento grafite da logo.

## Alterações Propostas

### 1. Ajuste de Contraste no CSS
- Adicionar uma classe de utilidade para aplicar um filtro de "brilho" ou "inversão parcial" especificamente para a logo quando em temas escuros ou fundos muito próximos do grafite.
- Alternativamente, adicionar um leve fundo branco ou uma borda suave ao redor da logo para destacá-la.

### 2. Componentes da Landing Page
- **Navbar**: Aplicar um filtro de brilho na imagem da logo (`filter: brightness(1.2) contrast(1.1)` ou similar) para destacar as partes escuras.
- **Footer**: Fazer o mesmo ajuste no rodapé.

### 3. Melhoria na Identidade Visual (Design)
- Se o filtro não for suficiente, envolver a logo em um pequeno círculo ou quadrado com fundo branco suave (com baixa opacidade) para criar separação visual do fundo escuro do site.

## Detalhes Técnicos
- Modificar `src/styles.css` para incluir uma utilidade `@utility logo-glow`.
- Atualizar `src/components/landing/Navbar.tsx` e `src/components/landing/Footer.tsx` para usar essa nova utilidade ou aplicar classes do Tailwind diretamente (`brightness-150` ou similar).

---
**Nota:** Não alterarei o texto ou as cores da marca, apenas a forma como a imagem é renderizada para garantir acessibilidade e visibilidade.
