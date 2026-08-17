# Plano de Restauração de Layout de Preços

O usuário deseja reverter o layout dos planos de preços para o "estilo antigo" (uma lista simples de funcionalidades, como estava antes de uma atualização recente que adicionou descrições complexas), mas mantendo os valores de R$ 249, R$ 299 e R$ 349 e as quantidades de usuários correspondentes.

## Alterações

### Componente de Preços (`src/components/landing/Pricing.tsx`)

- Restaurar a estrutura de `features` no array `plans` para uma lista direta de itens (Usuários, Conexões, Filas, etc.).
- Manter apenas os 3 planos atuais (Starter, Pro, Max).
- Manter os preços atuais:
    - Starter: R$ 249
    - Pro: R$ 299
    - Max: R$ 349
- Manter a contagem de usuários atual:
    - Starter: 3 Usuários
    - Pro: 4 Usuários
    - Max: 6 Usuários
- Garantir que a renderização no `Pricing.tsx` utilize o layout de cards com ícones de `Check` para cada item da lista.

## Detalhes Técnicos

- A estrutura de dados no `Pricing.tsx` já parece estar simplificada no código fonte atual (`features: ["...", "..."]`), mas o usuário mencionou que "ficou mais conversível" o layout antigo. Vou ajustar a lista de funcionalidades para ser idêntica à solicitada anteriormente no mapa mental, mas mantendo a simplicidade visual de lista.

### Lista de funcionalidades sugerida:
- **Starter (R$ 249)**: 3 Usuários, 1 Conexão, 5 Filas, Whatsapp Oficial, Facebook, Instagram, Integrações, Campanhas, Mensagens agendadas, Chat Interno, Agentes de IA, Tarefas, Produtos.
- **Pro (R$ 299)**: 4 Usuários, 2 Conexões, 10 Filas, Whatsapp Oficial, Facebook, Instagram, CRM Kanban Nativo, Follow-up Automático, Integrações, Campanhas, Chat Interno, Agentes de IA.
- **Max (R$ 349)**: 6 Usuários, 3 Conexões, 10 Filas, Whatsapp Oficial, Facebook, Instagram, CRM Kanban + Follow-up, Módulos & Integrações Completas, Disparo em massa inteligente, IA Workflow avançado.
