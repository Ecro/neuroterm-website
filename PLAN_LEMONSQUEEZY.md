# Plan: LemonSqueezy Payment Integration

## Classification
- **Type:** Feature
- **Phase:** Launch Critical
- **Complexity:** Low
- **Risk:** Low

## Problem Statement
**What:** Integrate LemonSqueezy payment to enable users to purchase NeuroTerm Pro licenses.
**Why:** "Buy Pro" buttons currently do nothing - users cannot pay, blocking all revenue.
**Success:** Users can click "Buy Pro", complete checkout, and receive a license key.

## Technical Approach

### Option A: Hosted Checkout Links (Recommended)
Simply link buttons directly to LemonSqueezy hosted checkout URL. LemonSqueezy handles everything: payment processing, license key generation, email delivery.

- **Pros:**
  - Simplest implementation (30 min)
  - No backend code required
  - PCI compliance handled by LemonSqueezy
  - License keys auto-generated and emailed
- **Cons:**
  - User leaves site briefly for checkout
  - Less customization of checkout flow

### Option B: Embedded Checkout Overlay
Use LemonSqueezy.js to show checkout in a modal overlay.

- **Pros:** User stays on site
- **Cons:** Slightly more complex, requires JS SDK

### Decision: **Option A** for MVP, can upgrade to B later.

---

## Implementation Steps

### Phase 1: LemonSqueezy Dashboard Setup (Manual)

| # | Task | Details |
|---|------|---------|
| 1 | Create LemonSqueezy account | Go to [lemonsqueezy.com](https://lemonsqueezy.com) and sign up |
| 2 | Complete account verification | Email verification, payout setup (Stripe Connect) |
| 3 | Create Store | Name: "NeuroTerm" or your brand name |
| 4 | Create Product | Name: "NeuroTerm Pro", Type: **Software License** |
| 5 | Create Early Bird Variant | Price: $19, Name: "Early Bird (50% off)" |
| 6 | Enable License Keys | Product Settings → License Keys → Enable |
| 7 | Configure License Settings | Activation limit: 3, Expiration: None (lifetime) |
| 8 | Get Checkout URL | Click "Share" on variant → Copy checkout URL |
| 9 | Enable Test Mode | For testing without real charges |

**Expected Checkout URL Format:**
```
https://neuroterm.lemonsqueezy.com/buy/abc123def456
```

### Phase 2: Website Code Changes

| # | Task | File(s) | Description |
|---|------|---------|-------------|
| 1 | Create env file | `.env.local` | Add checkout URL environment variable |
| 2 | Create env example | `.env.example` | Document required variables |
| 3 | Update Hero button | `src/components/landing/Hero.tsx` | Change Link to external checkout |
| 4 | Update Pricing Preview | `src/components/landing/PricingPreview.tsx` | Change Link to external checkout |
| 5 | Update Pricing page | `src/app/pricing/page.tsx` | Change button to external link |

### Phase 3: Deploy & Verify

| # | Task | Description |
|---|------|-------------|
| 1 | Add env to Vercel | Project Settings → Environment Variables |
| 2 | Redeploy | `git push` triggers auto-deploy |
| 3 | Test checkout (test mode) | Complete a test purchase |
| 4 | Verify license email | Check that license key arrives |
| 5 | Switch to live mode | Disable test mode when ready |

---

## Files to Modify

| File | Change Type | Description |
|------|-------------|-------------|
| `src/components/landing/Hero.tsx` | modify | Change "Buy Pro" Link to external <a> |
| `src/components/landing/PricingPreview.tsx` | modify | Change "Buy Pro" Link to external <a> |
| `src/app/pricing/page.tsx` | modify | Change button to external <a> |

## Files to Create

| File | Purpose |
|------|---------|
| `.env.local` | LemonSqueezy checkout URL (local dev) |
| `.env.example` | Document required env vars for other developers |

---

## Code Changes Detail

### 1. Environment Variables

**.env.local** (create):
```bash
# LemonSqueezy
NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL=https://neuroterm.lemonsqueezy.com/buy/YOUR_VARIANT_ID
```

**.env.example** (create):
```bash
# LemonSqueezy Payment Integration
# Get your checkout URL from LemonSqueezy dashboard:
# Products → Your Product → Variants → Share → Copy URL
NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL=https://yourstore.lemonsqueezy.com/buy/variant_id
```

### 2. Hero.tsx Changes

**Before:**
```tsx
<Link
  href="/pricing"
  className="px-8 py-3.5 bg-emerald-500 text-black font-medium rounded-lg hover:bg-emerald-400 transition-colors"
>
  Buy Pro — $19
</Link>
```

**After:**
```tsx
<a
  href={process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL || '/pricing'}
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3.5 bg-emerald-500 text-black font-medium rounded-lg hover:bg-emerald-400 transition-colors"
>
  Buy Pro — $19
</a>
```

### 3. PricingPreview.tsx Changes

**Before:**
```tsx
<Link
  href="/pricing"
  className="inline-block px-6 py-2.5 text-sm font-medium text-black bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
>
  Buy Pro
</Link>
```

**After:**
```tsx
<a
  href={process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL || '/pricing'}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-2.5 text-sm font-medium text-black bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
>
  Buy Pro
</a>
```

### 4. pricing/page.tsx Changes

**Before:**
```tsx
<button
  className="inline-block px-8 py-3 font-medium text-black bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
>
  Buy Pro — $19
</button>
```

**After:**
```tsx
<a
  href={process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL || '/pricing'}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-3 font-medium text-black bg-emerald-500 rounded-lg hover:bg-emerald-400 transition-colors"
>
  Buy Pro — $19
</a>
```

---

## Vercel Environment Setup

In Vercel Dashboard:
1. Go to Project → Settings → Environment Variables
2. Add:
   - Name: `NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL`
   - Value: `https://neuroterm.lemonsqueezy.com/buy/YOUR_VARIANT_ID`
   - Environment: Production, Preview, Development

---

## Exit Criteria

```
□ LemonSqueezy account created and verified
□ Store created with product "NeuroTerm Pro"
□ License key generation enabled
□ Checkout URL obtained
□ Environment variable added to Vercel
□ All "Buy Pro" buttons link to checkout
□ Test purchase completes successfully
□ License key received via email
□ Website deployed with working checkout
```

## Testing Strategy

- [ ] **Test Mode:** Complete purchase in LemonSqueezy test mode (no real charge)
- [ ] **Button Check:** Verify all 3 buttons open checkout
- [ ] **Mobile Test:** Verify checkout works on mobile browsers
- [ ] **License Email:** Confirm license key arrives after purchase
- [ ] **Live Mode:** Make one real purchase to verify end-to-end

## Document Updates Needed

- [ ] **TECH_SPEC.md:** None (website, not desktop app)
- [ ] **PLAN_MVP.md:** None
- [ ] **PLAN_WEBSITE.md:** Update Phase 4 status to "Complete"
- [ ] **README.md:** Add note about env vars for contributors

---

## Future Enhancements (Phase 2)

### Desktop App License Validation

After website payment is working, add license validation to NeuroTerm desktop app:

1. **License Input UI** - Add to Settings or startup
2. **API Validation** - Call LemonSqueezy validate endpoint
3. **Local Storage** - Cache valid license in tauri-plugin-store
4. **Feature Gating** - Check license before Pro features

```typescript
// Future: Desktop app license validation
async function validateLicense(key: string): Promise<boolean> {
  const res = await fetch('https://api.lemonsqueezy.com/v1/licenses/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ license_key: key })
  });
  const data = await res.json();

  // Verify it's our store
  if (data.license_key?.store_id !== STORE_ID) return false;

  return data.valid === true;
}
```

### Embedded Checkout Overlay

Upgrade to modal checkout for better UX:

```tsx
// Future: Embedded checkout
import Script from 'next/script';

// In layout.tsx
<Script src="https://assets.lemonsqueezy.com/lemon.js" strategy="lazyOnload" />

// In component
const handleCheckout = () => {
  window.LemonSqueezy.Url.Open(process.env.NEXT_PUBLIC_LEMONSQUEEZY_CHECKOUT_URL);
};

<button onClick={handleCheckout}>Buy Pro — $19</button>
```

---

## Timeline Estimate

| Phase | Time | Notes |
|-------|------|-------|
| Dashboard Setup | 15 min | Manual steps in LemonSqueezy |
| Website Code | 15 min | 3 files, ~10 lines each |
| Deploy & Test | 10 min | Vercel env + test purchase |
| **Total** | **~40 min** | |

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| LemonSqueezy account issues | Low | High | Complete verification before coding |
| Checkout URL changes | Low | Medium | Use env var, easy to update |
| Payment failures | Low | Medium | Test in test mode first |
| License key delivery issues | Low | Medium | LemonSqueezy handles this |

---

> **Last Updated:** 2025-12-24
