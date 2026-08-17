---
name: Update Pricing Plans Data
description: Update the Pricing component with new features, user counts, and connection limits for Starter, Pro, and Max plans.
type: feature
---

## Technical Details
- Modify `src/components/landing/Pricing.tsx`.
- Update the `plans` constant array.
- Update `features`, `price`, and `name` properties to match the user request.
- Ensure the "Pro" plan is correctly highlighted and features are formatted as list items.

## Changes
### Pricing Plan Updates
- **Max (R$ 349,00):** 6 usuários, 3 conexões, 10 filas, WhatsApp Oficial, Facebook, Instagram, Integrações, Campanhas, Mensagens agendadas, Chat Interno, Agentes de IA, Tarefas, Produtos.
- **Pro (R$ 299,00):** 4 usuários, 2 conexões, 10 filas, WhatsApp Oficial, Facebook, Instagram, Integrações, Campanhas, Mensagens agendadas, Chat Interno, Agentes de IA, Tarefas, Produtos.
- **Starter (R$ 249,00):** 3 usuários, 1 conexão, 5 filas, WhatsApp Oficial, Facebook, Instagram, Integrações, Campanhas, Mensagens agendadas, Chat Interno, Agentes de IA, Tarefas, Produtos.
