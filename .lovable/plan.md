# Plano: Carrossel de Segmentos "Feito para o seu segmento"

O usuário solicitou um design mais atrativo para a seção de segmentos e que os itens passem da direita para a esquerda (efeito de rolagem infinita/marquee).

## Alterações Visuais e de Comportamento

1.  **Transformação em Marquee**:
    *   Substituir o layout de lista estática (`flex-wrap`) por um contêiner de rolagem horizontal infinita.
    *   Implementar a animação "marquee" no CSS para mover o conteúdo da direita para a esquerda continuamente.
2.  **Design dos Itens**:
    *   Melhorar o visual dos badges dos segmentos com bordas mais suaves, fundo semi-transparente e tipografia refinada.
    *   Adicionar um efeito de gradiente nas laterais do contêiner para suavizar a entrada e saída dos itens.
3.  **Refinamento do Cabeçalho**:
    *   Ajustar o espaçamento e a hierarquia visual para tornar a seção mais moderna e integrada ao novo fundo da página.

## Detalhes Técnicos

*   **Componente `Segments.tsx`**:
    *   Duplicar a lista de segmentos internamente para permitir o loop infinito sem cortes visuais.
    *   Adicionar classes Tailwind para animação e overflow.
*   **CSS (`src/styles.css`)**:
    *   Adicionar a animação `@keyframes marquee` que move de `0%` (0) para `100%` (`translateX(-50%)`).
    *   Criar uma utilidade `@utility animate-marquee` para facilitar a aplicação.
*   **Ajustes de Layout**:
    *   Garantir que a velocidade da animação seja suave e não cause desconforto visual.

O objetivo é criar uma vitrine dinâmica que demonstre a versatilidade do OfficeChat de forma moderna e fluida.
