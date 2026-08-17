---
name: Remove fidelity and update free trial duration
description: Removes mentions of fidelity/fees and updates the free trial duration from 7 days to 2 days across all components.
type: feature
---

## Changes

### FAQ
- Remove the question: "Tem fidelidade ou multa por cancelamento?"
- Update the free trial answer from "7 dias grátis" to "2 dias grátis".

### Pricing
- Update the subtitle: "Todos os planos com 2 dias grátis, sem cartão de crédito e sem fidelidade." (Wait, user said "retira por favor o e o teste gratis e 2 dias somente" - "remove fidelity and the free test is 2 days only").
- So remove "sem fidelidade".
- Update "7 dias grátis" to "2 dias grátis" in the subtitle and all plan buttons.

### Hero
- Update "Testar grátis 7 dias" to "Testar grátis 2 dias".
- Remove "Cancele quando quiser" or "sem fidelidade" if present (check Hero.tsx).

### Steps
- Remove "sem burocracia" or similar if related to fidelity.

### Footer
- Update "7 dias grátis" to "2 dias grátis".
- Update CTA button text.
