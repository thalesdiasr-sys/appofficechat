# Padronização das Seções de Contato nas Páginas Legais

O objetivo é uniformizar a seção de contato ("Fale com a gente") em todas as páginas legais (Termos de Serviço, Política de Privacidade e Privacidade Meta App), utilizando a mesma identidade visual, o e-mail `contato@officechat.com.br` e o título padronizado.

## Alterações

### Componentes Legais

- **Política de Privacidade (`PrivacyPolicy.tsx`)**
    - Alterar o título de "Dúvidas sobre privacidade?" para "Fale com a gente".
    - Atualizar o e-mail de `sac@officechat.com.br` para `contato@officechat.com.br`.

- **Termos de Serviço (`TermsOfService.tsx`)**
    - Garantir que o e-mail utilizado seja `contato@officechat.com.br`.

- **Privacidade Meta App (`MetaPrivacy.tsx`)**
    - Atualizar a seção de contato para seguir o layout de card com glassmorphism (`bg-primary/5`, `rounded-2xl`, etc.).
    - Alterar o título para "Fale com a gente".
    - Atualizar o e-mail para `contato@officechat.com.br`.

## Detalhes Técnicos

- Utilizar a classe `bg-primary/5 rounded-2xl p-6 border border-primary/10` para o container da seção.
- Padronizar as cores de texto com `text-foreground` e `text-muted-foreground`.
