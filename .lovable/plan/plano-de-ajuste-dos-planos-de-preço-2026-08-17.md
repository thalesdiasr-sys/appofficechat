# Plano de Ajuste dos Planos de Preço

Reorganizar os planos de preço para destacar o plano Starter (R$ 249) como o "Mais vendido" e posicioná-lo no centro da grade.

## Alterações

### Componente de Preços
- **Arquivo:** `src/components/landing/Pricing.tsx`
- **Ações:**
    - Reordenar o array `plans` para que o plano "Starter" (R$ 249) fique na segunda posição (índice 1), fazendo com que apareça no meio da grade de 3 colunas.
    - Mover a propriedade `highlight: true` do plano "Pro" para o plano "Starter".
    - Garantir que a etiqueta "Mais vendido" apareça corretamente sobre o plano Starter agora centralizado.
    - A ordem final sugerida para os planos é: Pro (R$ 299), Starter (R$ 249), Max (R$ 349). *Nota: Geralmente o plano mais vendido fica no meio, então a ordem visual será Pro | Starter | Max.*

## Detalhes Técnicos
- A grade atual utiliza `md:grid-cols-2 lg:grid-cols-3`, portanto a segunda posição no array será a coluna central em telas grandes.
- O efeito de escala e brilho (`p.highlight`) será aplicado ao plano do meio.

## Validação
- Verificar visualmente se o plano de R$ 249 está no centro.
- Confirmar se a etiqueta "Mais vendido" está no plano Starter.
