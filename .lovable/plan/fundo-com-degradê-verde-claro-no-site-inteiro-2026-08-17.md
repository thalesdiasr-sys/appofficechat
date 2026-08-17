# Fundo com degradê verde claro no site inteiro

O site hoje tem fundo branco puro em quase todas as seções (só o Hero e a área de Planos usam o degradê `bg-hero`). A ideia é levar esse mesmo clima verde bem suave para o resto da página, sem deixar o layout pesado.

## O que muda

- Fundo geral da página deixa de ser branco liso e passa a ter um degradê verde bem claro, contínuo de cima para baixo.
- As seções intermediárias (Passo a passo, Dores, Recursos, Comparativo, Depoimentos, Segmentos, FAQ) ficam alternando entre "verde levíssimo" e "quase branco", criando respiro visual entre blocos.
- Cards e textos continuam iguais; nada de mudança de conteúdo, cópia ou estrutura.

## Detalhes técnicos

- `src/styles.css`:
  - Novo token `--gradient-page`: degradê vertical com brilho verde suave (ex. `oklch(0.58 0.16 143 / 0.06)` no topo, indo para branco) mais um radial discreto de topo, na mesma família do `--gradient-hero` já existente.
  - Novo token `--gradient-soft` para faixas de seção (verde ~3-5% de opacidade sobre branco).
  - Duas utilities novas: `@utility bg-page` e `@utility bg-soft`.
- `src/routes/index.tsx`: o wrapper `min-h-screen bg-background` passa a usar `bg-page` (o gradiente fica fixo/estendido para não cortar entre seções).
- Seções: aplicar `bg-soft` alternado nas seções que hoje não têm fundo, mantendo `bg-hero` no Hero e nos Planos, e garantindo que as seções fiquem com fundo transparente onde o degradê da página deve aparecer.
- Sem alteração de textos, links ou lógica.
