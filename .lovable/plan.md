# Plano: Deixar a Seção de Economia e a Chamada para Ação Mais "Clean"

O objetivo é remover o bloco preto na parte inferior da seção de Economia, alinhando-o com a identidade visual clara (clean) do restante do site, e ajustar o estilo dos cards/imagens para um padrão mais suave.

## Alterações Propostas

### 1. Componente `Economy.tsx`
- **Remover o fundo preto (`bg-foreground`)**: Alterar o container da chamada para ação (CTA) final para um fundo claro com degradê suave ou borda sutil, em vez de preto sólido.
- **Ajustar cores de texto**: Mudar de `text-white` para `text-foreground` (grafite) para garantir contraste no fundo claro.
- **Estilo dos Cards de Estatística**: Ajustar os boxes de "-75%" e "+300%" para usarem `bg-white` ou `bg-primary/5` com bordas suaves, removendo o estilo de "glassmorphism" escuro.
- **Botão de CTA**: Manter o botão de destaque, mas garantir que ele harmonize com o novo fundo claro.

### 2. Estilo Visual e Imagens
- **Ajustar filtros/efeitos**: Se houver imagens ou ícones com filtros escuros, eles serão removidos ou substituídos por versões com transparência ou cores da marca (verde/grafite) sobre fundo claro.

## Detalhes Técnicos
- Utilizar classes Tailwind como `bg-primary/5`, `border-primary/10`, e `text-foreground`.
- Manter a responsividade e o espaçamento atual.

---
Estou pronto para aplicar essas mudanças para deixar o site com um visual mais uniforme e moderno.
