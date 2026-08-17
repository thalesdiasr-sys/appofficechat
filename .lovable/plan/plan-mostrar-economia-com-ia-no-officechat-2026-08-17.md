# Plan - Mostrar economia com IA no OfficeChat

Adicionar uma nova seção à landing page focada em demonstrar visualmente a economia financeira e de tempo ao utilizar IA para atendimento em comparação com métodos tradicionais.

## Mudanças propostas

### Landing Page
- Criar o componente `src/components/landing/Economy.tsx`.
- A seção incluirá um comparativo de custos: "Atendimento Tradicional" vs "OfficeChat IA".
- Adicionar estatísticas de economia (ex: Redução de 70% no custo por lead, atendimento 24/7 sem custos extras).
- Incluir um pequeno gráfico ou cards comparativos destacando a eficiência operacional.

### Integração
- Adicionar a seção `Economy` no arquivo `src/routes/index.tsx`, posicionando-a após a seção `Features` para reforçar o valor do produto antes da tabela de preços.

## Detalhes técnicos
- O componente seguirá o estilo visual existente (Glassmorphism, gradientes suaves e ícones da Lucide).
- Utilizará a utilidade `card-surface` e `text-brand` para consistência visual.
- A animação de entrada será feita via classes do Tailwind.

## Conteúdo sugerido
- **Título**: "Economize mais de 70% no seu custo operacional"
- **Comparativo**:
    - **Humano**: Horário comercial limitado, alto custo por pessoa, demora na resposta.
    - **IA OfficeChat**: 24h por dia, responde em segundos, custo fixo independente do volume.
