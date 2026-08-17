# Plano de Atualização dos Planos OfficeChat

Este plano descreve a atualização dos valores e recursos dos planos Starter, Pro e Max para refletir a nova estrutura da plataforma.

## Alterações Propostas

### 1. Atualização do Componente de Preços (`src/components/landing/Pricing.tsx`)
Ajustar os planos para:

- **Starter (R$ 249,00)**
  - 1 Conexão WhatsApp + Instagram + Facebook
  - Até 5 Atendentes
  - Até 10 Departamentos
  - Relatórios de atendimento
  - Suporte especializado

- **Pro (R$ 299,00) - Mais Vendido**
  - 1 Conexão WhatsApp + API Oficial Meta + IG + FB
  - Até 10 Atendentes
  - CRM Kanban Nativo + Follow-up Automático
  - IA Workflow (Agente Central)
  - Módulos de organização de equipe

- **Max (R$ 349,00)**
  - 3 Conexões WhatsApp + API Oficial Meta + IG + FB
  - Atendentes Ilimitados
  - Departamentos Ilimitados
  - CRM Kanban + Follow-up + Módulos & Integrações Completas
  - Disparo em massa inteligente (anti-ban)
  - IA Workflow avançado com especialistas

### 2. Validação
- Verificar se a grade de preços está correta.
- Garantir que o destaque "Mais Vendido" permaneça no plano Pro.
- Verificar a responsividade da seção.

## Detalhes Técnicos
- Edição do array `plans` no arquivo `src/components/landing/Pricing.tsx`.
- Nenhuma alteração de CSS necessária, mantendo a paleta verde/grafite já estabelecida.
