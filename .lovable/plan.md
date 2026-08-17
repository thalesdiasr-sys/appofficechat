# Plano de Ajuste Visual do Botão de Teste Grátis

Aumentar o destaque visual do botão "Teste grátis" no cabeçalho (Navbar) para torná-lo mais chamativo e maior, conforme solicitado.

## Alterações

### Componente de Cabeçalho
- **Arquivo:** `src/components/landing/Navbar.tsx`
- **Ações:**
    - Alterar a propriedade `size` do botão "Teste grátis" de `"sm"` para `"default"` (ou aplicar classes personalizadas de padding/font-size se necessário).
    - Ajustar o `font-size` e o `padding` do botão para que ele tenha mais peso visual em comparação aos links de navegação.
    - Garantir que o aumento de tamanho não quebre o layout da barra de navegação em diferentes resoluções.

## Detalhes Técnicos
- O componente `Button` do shadcn será ajustado para usar `size="default"` em vez de `size="sm"`.
- Adição de classes Tailwind adicionais como `px-6 py-2.5 text-base` para garantir que o botão seja significativamente maior.

## Validação
- Verificar se o botão está visivelmente maior no desktop.
- Verificar se o botão mantém um bom layout no menu mobile.
