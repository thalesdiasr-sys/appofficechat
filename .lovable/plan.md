---
name: Compact Pricing Cards
description: Optimize pricing section to be significantly more compact and visually modern.
type: design
---

# Plan

The user feels the pricing cards are still too long ("cumprida") and wants them to be even more compact and modern.

## Proposed Changes

### 1. Pricing Section Optimization (`src/components/landing/Pricing.tsx`)
- **Grid Layout for Features**: Instead of a vertical list, use a 2-column grid for features to drastically reduce card height.
- **Tighten Spacing**: Reduce padding and margins throughout the card.
- **Modern Typography**: Slightly reduce font sizes for features and secondary text to maintain a clean, compact look.
- **Visual Refinement**: Enhance the glassmorphism effect and use subtle gradients to make cards look more premium.

## Technical Details

- Modify `src/components/landing/Pricing.tsx`.
- Update the `ul` to use `grid grid-cols-2 gap-x-4 gap-y-2` (or similar) instead of `space-y-3`.
- Reduce `p-7` to `p-6`.
- Adjust font sizes to `text-xs` or `text-sm` where appropriate to keep elements tight.
