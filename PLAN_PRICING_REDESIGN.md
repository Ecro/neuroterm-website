# Plan: Pricing Table Redesign - Feature-Focused & Attractive

## Classification
- **Type:** improvement
- **Phase:** Post-MVP (Website Enhancement)
- **Complexity:** Medium
- **Risk:** Low

## Problem Statement
**What:** The current pricing table is a boring row-based comparison that lists limits rather than showcasing value. It doesn't leverage the compelling feature descriptions from the features page.

**Why:**
- Generic table format fails to communicate product value
- Users see "20/day" and "2 files" (limits) instead of "Magic Input" and "Local RAG" (benefits)
- GPU rendering, SSH, SFTP, Pattern Highlighting aren't shown at all
- Doesn't match the polished, grouped style of the features page
- PricingPreview.tsx (landing page) is outdated with wrong limits

**Success:** A pricing page that makes users excited about what they GET, with Pro tier feeling like a clear value upgrade.

## Technical Approach

### Option A: Feature-Focused Cards (Recommended)

Replace the table with two side-by-side pricing cards that:

1. **Show features by category** (matching Features page structure):
   - AI Intelligence
   - Connectivity
   - Terminal Experience

2. **Use icons from Features page** for visual consistency

3. **Free tier emphasizes INCLUSION** ("Everything you need to start"):
   - All core features available
   - Limits shown as subtle secondary text

4. **Pro tier emphasizes UNLIMITED** ("No limits. Full power."):
   - Unlimited AI, documents, connections
   - "Priority" or "Enhanced" language

5. **Modern card design** with:
   - Prominent price/badge
   - Feature list with icons
   - Clear CTA buttons
   - Pro card has gradient accent

### Option B: Enhanced Table with Icons
Keep table but add icons and group by category. Less impactful but simpler.

**Recommendation:** Option A - Modern SaaS pricing uses cards, not tables.

## Design Reference

### From Features Page (3 Categories):

```
AI Intelligence
├── Magic Input (sparkle icon)
└── Local RAG (book icon)

Connectivity
├── Native Serial (link icon)
├── SSH Terminal (terminal icon)
├── SFTP File Browser (upload icon)
└── Multi-Session (folder icon)

Terminal Experience
├── GPU Rendering (lightning icon)
└── Pattern Highlighting (brush icon)
```

### Proposed Card Structure (Benefit-Focused):

**Design Philosophy:**
- Lead with WoW moments, not feature lists
- Use benefit language ("Ask your datasheets") not tech jargon ("Local RAG")
- Create emotional connection with what users can DO

```
┌───────────────────────────┐  ┌───────────────────────────────┐
│           FREE            │  │             PRO               │
│          Forever          │  │      ~~$39~~ $19 one-time     │
├───────────────────────────┤  ├───────────────────────────────┤
│                           │  │                               │
│ AI Features               │  │ AI Features                   │
│ ✓ Get commands from English│ │ ✓ Get commands from English   │
│ ✓ Ask questions about logs│  │ ✓ Ask questions about logs    │
│ ✓ Generate AI reports     │  │ ✓ Generate AI reports         │
│   → 20 queries/day        │  │   → Unlimited                 │
│                           │  │                               │
│ ✓ Import datasheets       │  │ ✓ Import datasheets           │
│   2 docs                  │  │   Unlimited                   │
│                           │  │                               │
│ ✓ Serial + SSH + SFTP     │  │ ✓ Saved connections           │
│   All-in-one              │  │   Unlimited                   │
│                           │  │                               │
│ ✓ Minimap with markers    │  │ ✓ Minimap with markers        │
│ ✓ 100% offline            │  │ ✓ 100% offline                │
│ ✓ All other features      │  │ ✓ All other features          │
│                           │  │ ✓ 1 year updates              │
│                           │  │                               │
├───────────────────────────┤  ├───────────────────────────────┤
│     [Download Free]       │  │      [Buy Pro — $19]          │
└───────────────────────────┘  └───────────────────────────────┘
```

## License Model

**Per-user license** (like MobaXterm):
- 1 license = 1 user
- Unlimited devices per user
- 1 year updates included
- Software keeps working after update period expires

### Pricing Page FAQ (brief)
- "Can I use on multiple devices?" → Yes, unlimited devices per user
- "What happens after 1 year?" → Software works, updates require renewal
- Link to full /terms page

### Terms Page (/terms)
Full license terms including:
- Per-user license definition
- Device usage policy
- Update/renewal policy
- Refund policy (14 days)
- Usage restrictions

### Key Features:

**AI Features (grouped, shared limit):**
1. **Get commands from English** - Type natural language, get terminal commands
2. **Ask questions about logs** - Chat with AI about your session
3. **Generate AI reports** - Transform logs into readable reports

**Other Features:**
4. **Import datasheets** - AI reads your docs for context
5. **Serial + SSH + SFTP** - All-in-one terminal
6. **Minimap with markers** - See all errors at a glance
7. **100% offline** - No cloud, no tracking
8. **All other features** - Log export, filters, macros, etc.

## Implementation Steps

| # | Task | File(s) | Description |
|---|------|---------|-------------|
| 1 | Create feature list data | `pricing/page.tsx` | Define features array with icons, names, free/pro values |
| 2 | Build PricingCard component | `pricing/page.tsx` | Reusable card component with icon support |
| 3 | Replace table with cards | `pricing/page.tsx` | Two-column responsive grid layout |
| 4 | Add visual hierarchy | `pricing/page.tsx` | Pro card highlighted with gradient border/bg |
| 5 | Update PricingPreview | `PricingPreview.tsx` | Match new design, fix outdated limits |
| 6 | Verify mobile responsiveness | Both files | Stack cards on mobile |

## Files to Modify

| File | Change Type | Description |
|------|-------------|-------------|
| `src/app/pricing/page.tsx` | major rewrite | Replace table with feature-focused cards, add license FAQ |
| `src/components/landing/PricingPreview.tsx` | major rewrite | Compact version of new card design, fix limits |
| `src/app/terms/page.tsx` | create | Full license terms page |

## Key Features to Highlight

### Free Tier
| Feature | Limit |
|---------|-------|
| **AI Features** | **20/day** |
| → Get commands from English | |
| → Ask questions about logs | |
| → Generate AI reports | |
| Import datasheets | 2 docs |
| Serial + SSH + SFTP | ✓ |
| Minimap with markers | ✓ |
| 100% offline | ✓ |
| All other features | ✓ |

### Pro Tier ($19 one-time, 1 year updates)
| Feature | Value |
|---------|-------|
| **AI Features** | **Unlimited** |
| → Get commands from English | |
| → Ask questions about logs | |
| → Generate AI reports | |
| Import datasheets | Unlimited |
| Saved connections | Unlimited |
| Minimap with markers | ✓ |
| 100% offline | ✓ |
| All other features | ✓ |
| **1 year updates** | ✓ |

## Exit Criteria

```
□ Pricing page uses card-based layout (not boring table)
□ AI Features grouped with 3 clear sub-items
□ All features use action-based language users understand
□ Pro tier shows "Unlimited" for AI, docs, connections
□ Pro tier shows "1 year updates" (not lifetime)
□ Pricing FAQ includes license questions (devices, renewal)
□ /terms page created with full license terms
□ PricingPreview.tsx matches new design
□ Mobile responsive (cards stack vertically)
□ Build passes with no errors
```

## Testing Strategy

- [ ] Visual review on desktop and mobile
- [ ] Verify all feature icons render correctly
- [ ] Check that limits match (20/day, 2 files, 2 connections)
- [ ] Ensure CTAs link correctly (/download, payment)

## Document Updates Needed

- [ ] **TECH_SPEC.md:** None (website only)
- [ ] **PLAN_MVP.md:** None
- [ ] **UI_SPEC.md:** None

---

> **Last Updated:** 2025-12-27
