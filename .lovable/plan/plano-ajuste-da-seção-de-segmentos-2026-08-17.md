# Plano: Ajuste da Seção de Segmentos

O usuário solicitou ajustes visuais na seção "Feito para o seu segmento": o título deve ser preto, o letreiro (marquee) deve ser maior e cada item deve conter um emoji correspondente.

## Alterações Propostas

1.  **Título**:
    *   Alterar a cor do título "Feito para o seu segmento" de verde (`text-brand`) para preto/grafite padrão do tema (`text-foreground`).
2.  **Letreiro (Marquee)**:
    *   Aumentar o tamanho da fonte dos itens no letreiro.
    *   Aumentar o padding e a escala visual dos badges para torná-los mais impactantes.
3.  **Emojis nos Segmentos**:
    *   Atualizar a lista de segmentos para incluir um emoji relevante para cada categoria (ex: 👕 Lojas de roupas, 🚗 Auto peças).
    *   Remover o ponto circular colorido (`bg-primary/60`) para dar destaque aos emojis.

## Detalhes Técnicos

*   **Arquivo `src/components/landing/Segments.tsx`**:
    *   Modificar o array `segments` para ser um array de objetos `{ name: string, emoji: string }` ou apenas strings com o emoji incluído.
    *   Remover a classe `text-brand` do `h2`.
    *   Aumentar as classes de tamanho (`text-lg` ou `text-xl` em vez de `text-sm`) e padding nos itens do loop.
*   **CSS**:
    *   Nenhuma mudança necessária no `src/styles.css` se utilizarmos utilitários Tailwind padrão para o redimensionamento.

## Lista de Segmentos com Emojis (Exemplo)
*   👕 Lojas de roupas
*   🚗 Auto peças
*   🐶 Pet shops
*   🏥 Clínicas
*   🚀 Infoprodutores
*   🛒 E-commerce
*   🏠 Imobiliárias
*   🍔 Restaurantes
*   💪 Academias
*   💼 Escritórios
*   ✂️ Salões de beleza
*   📦 Distribuidoras
*   🛠️ Oficinas
*   🛒 Supermercados
*   💊 Farmácias
*   🏫 Escolas
*   ⚖️ Advocacia
*   📊 Contabilidade
