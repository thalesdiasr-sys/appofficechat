---
name: Modernize Pricing Cards
description: Update pricing section to be more compact, modern, and visually appealing.
type: design
---

# Plan

The user wants to modernize the pricing section, making the cards less "long" (cumprida) and more visually appealing.

## Proposed Changes

- **Layout**: Change the feature list from a single column to a multi-column layout or a more compact grid if appropriate, or simply reduce vertical spacing and font sizes.
- **Styling**: Enhance the cards with glassmorphism, better gradients, and more distinct highlighting for the "Pro" plan.
- **Compactness**: Group similar features or use icons to save vertical space. Limit the number of features shown initially if the list is too long, or use a "grid" for features instead of a vertical list.

### Technical Details

- Modify `src/components/landing/Pricing.tsx`.
- Use a 2-column grid for the `ul` of features to reduce height.
- Adjust `py` and `mt` values to tighten the layout.
- Update the "Pro" plan's visual distinction with a more prominent gradient or glow.

### User Interface Improvements

- Feature items will be smaller and more compactly arranged.
- Card height will be normalized to avoid excessive length.
- Improved hover effects and border treatments.
