# Plan: Spread Enhanced UI Styling to All Pages

## Classification
- **Type:** improvement
- **Phase:** Post-MVP
- **Complexity:** Low
- **Risk:** Low

## Problem Statement
**What:** The home page has enhanced UI styling (better contrast, hover effects, animations) but other pages still use the old flat, low-contrast patterns.

**Why:** Inconsistent user experience across the site. Other pages feel dated compared to the polished home page.

**Success:** All pages use the same visual language - zinc color palette, visible cards, interactive hover effects, consistent button styles.

## Current State Analysis

### Home Page (Updated)
- Background: `bg-[#09090b]`, `bg-zinc-900/70`
- Cards: `bg-zinc-900/70 border-white/10` with hover lift/shadow
- Buttons: `.btn-primary`, `.btn-accent`, `.btn-ghost` utility classes
- Effects: Scale, translate, shadow transitions

### Other Pages (Outdated)
- Cards: `bg-white/[0.02] border-white/5` (almost invisible)
- Buttons: Inline styles `hover:bg-white/90` (no depth effects)
- Borders: `border-white/5` (too subtle)
- Text: `text-white/40`, `text-white/50` (could be brighter)

## Implementation Steps

| # | Task | File(s) | Description |
|---|------|---------|-------------|
| 1 | Update Download page | `src/app/download/page.tsx` | Cards, button, step indicators |
| 2 | Update Features page | `src/app/features/page.tsx` | Feature cards, CTA buttons |
| 3 | Update Pricing page | `src/app/pricing/page.tsx` | Table, FAQ cards, buttons |
| 4 | Update Support page | `src/app/support/page.tsx` | Support option cards |
| 5 | Update Docs index | `src/app/docs/page.tsx` | Section cards, quickstart banner |
| 6 | Update Docs subpages | `src/app/docs/*/page.tsx` | Content cards, nav links |
| 7 | Update Footer | `src/components/ui/Footer.tsx` | Border, link hover effects |

## Style Mapping

### Old → New Patterns

| Element | Old Pattern | New Pattern |
|---------|-------------|-------------|
| Card BG | `bg-white/[0.02]` | `bg-zinc-900/70 backdrop-blur-sm` |
| Card Border | `border-white/5` | `border-white/10` |
| Card Hover | `hover:bg-white/[0.05]` | `hover:bg-zinc-800/90 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl` |
| Primary Button | inline styles | `btn-primary` class |
| Ghost Button | inline styles | `btn-ghost` class |
| Muted Text | `text-white/40` | `text-zinc-400` |
| Body Text | `text-white/60` | `text-zinc-300` |
| Section Border | `border-white/5` | `border-white/8` |

## Files to Modify

| File | Change Type | Description |
|------|-------------|-------------|
| `src/app/download/page.tsx` | modify | Cards, download button, step numbers |
| `src/app/features/page.tsx` | modify | Feature cards, coming soon cards, CTAs |
| `src/app/pricing/page.tsx` | modify | Table styling, FAQ cards, badge |
| `src/app/support/page.tsx` | modify | Support option cards |
| `src/app/docs/page.tsx` | modify | Quickstart banner, section cards |
| `src/app/docs/quickstart/page.tsx` | modify | Step cards, code blocks, nav links |
| `src/app/docs/installation/page.tsx` | modify | Cards, code blocks |
| `src/app/docs/ollama-setup/page.tsx` | modify | Cards, code blocks |
| `src/app/docs/serial/page.tsx` | modify | Cards, tables |
| `src/app/docs/ssh/page.tsx` | modify | Cards |
| `src/app/docs/sftp/page.tsx` | modify | Cards |
| `src/app/docs/magic-input/page.tsx` | modify | Cards, examples |
| `src/app/docs/local-rag/page.tsx` | modify | Cards |
| `src/app/docs/shortcuts/page.tsx` | modify | Tables, cards |
| `src/app/docs/troubleshooting/page.tsx` | modify | FAQ cards |
| `src/components/ui/Footer.tsx` | modify | Border, link hovers |

## Exit Criteria
```
[ ] All cards use zinc-900 background with visible borders
[ ] All buttons use utility classes (btn-primary, btn-accent, btn-ghost)
[ ] All interactive elements have hover lift/shadow effects
[ ] Text contrast improved (zinc-300/400 instead of white/40/50)
[ ] Visual consistency across all pages
[ ] Build passes with no errors
```

## Testing Strategy
- [ ] Manual: Navigate all pages, verify card visibility
- [ ] Manual: Test all button hover states
- [ ] Manual: Check responsive on mobile viewport
- [ ] Build: `pnpm build` passes

## Document Updates Needed
- [ ] **TECH_SPEC.md:** None
- [ ] **PLAN_MVP.md:** None
- [ ] **UI_SPEC.md:** None (website, not app)

---

> **Last Updated:** 2025-12-26
