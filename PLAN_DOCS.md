# Plan: NeuroTerm Documentation

## Classification
- **Type:** docs
- **Phase:** Post-MVP (Launch requirement)
- **Complexity:** Medium
- **Risk:** Low

## Problem Statement
**What:** Create comprehensive documentation for NeuroTerm
**Why:** Users need guidance on features, especially AI/RAG which are novel
**Success:** Users can self-serve common questions, reduce support burden

---

## Research Summary

### Best-in-Class Examples

| Product | What Makes It Great | Source |
|---------|---------------------|--------|
| **Stripe** | 3-column layout, interactive code, language switcher | [Mintlify Blog](https://www.mintlify.com/blog/stripe-docs) |
| **Warp** | Quickstart first, feature-organized, integrations | [Warp Docs](https://docs.warp.dev) |
| **Tailwind** | Copy-paste examples, visual demos | tailwindcss.com/docs |

### Documentation Best Practices

From [Google Style Guide](https://google.github.io/styleguide/docguide/best_practices.html) and [GitBook Guide](https://gitbook.com/docs/guides/docs-best-practices/documentation-structure-tips):

1. **Start with Quickstart** - Get users to "hello world" in <5 minutes
2. **Organize by user goal** - Not by feature, but by what users want to do
3. **Include runnable examples** - Copy-paste-ready code
4. **Keep updated with code** - Docs should change with features
5. **Visual content** - Screenshots, GIFs, diagrams

### Recommended Tool: Mintlify

| Tool | Pros | Cons |
|------|------|------|
| **Mintlify** | Beautiful out-of-box, AI search, auto-deploy from GitHub | Paid for custom domain |
| Docusaurus | Free, highly customizable | More setup, less polished |
| GitBook | WYSIWYG editor, free for OSS | Less dev-focused design |

**Recommendation:** Mintlify for modern, Stripe-like experience with minimal effort.

---

## Proposed Documentation Structure

```
docs.neuroterm.dev/
├── Introduction
│   └── What is NeuroTerm?
├── Getting Started
│   ├── Installation
│   ├── Ollama Setup
│   └── First Connection (5-min quickstart)
├── Connections
│   ├── Serial Port
│   ├── SSH Terminal
│   └── SFTP File Transfer
├── AI Features
│   ├── Magic Input
│   ├── Local RAG
│   └── AI Transforms
├── Terminal Features
│   ├── Pattern Highlighting
│   ├── Flash React
│   ├── Session Logging
│   └── Multi-Session Tabs
├── Reference
│   ├── Keyboard Shortcuts
│   ├── Settings
│   └── Troubleshooting
└── FAQ
```

---

## Content Priority

### Phase 1: Launch (Must Have)

| Page | Content | Est. Time |
|------|---------|-----------|
| **Installation** | Download, install, launch | 30 min |
| **Ollama Setup** | Install Ollama, pull model, configure endpoint | 1 hr |
| **Quickstart** | Connect serial → use Magic Input → done | 1 hr |
| **Serial Port** | Port selection, baud, DTR/RTS, flow control | 1 hr |
| **Magic Input** | @ syntax, examples, tips | 1 hr |
| **Keyboard Shortcuts** | Full reference table | 30 min |

**Total Phase 1:** ~6 hours of writing

### Phase 2: Complete (Should Have)

| Page | Content |
|------|---------|
| SSH Terminal | Host, auth methods, known hosts |
| SFTP | Browse, upload, download |
| Local RAG | Import docs, how embedding works, examples |
| Pattern Highlighting | Presets, custom regex |
| Settings | All configurable options |
| Troubleshooting | Common issues + solutions |

### Phase 3: Polish (Nice to Have)

| Page | Content |
|------|---------|
| Flash React | Auto-respond setup |
| AI Transforms | Custom prompts |
| Video Tutorials | Screen recordings |
| Use Case Guides | "Debug U-Boot", "Flash STM32" |

---

## Implementation Steps

| # | Task | Description |
|---|------|-------------|
| 1 | Set up Mintlify | Create repo, configure mintlify.json |
| 2 | Create structure | Navigation, folders, placeholder pages |
| 3 | Write Phase 1 docs | 6 core pages |
| 4 | Add screenshots | Capture UI for each feature |
| 5 | Deploy to subdomain | docs.neuroterm.dev |
| 6 | Link from website | Update /docs nav link |
| 7 | Write Phase 2 docs | Complete coverage |

---

## Mintlify Setup

### File Structure
```
neuroterm-docs/
├── mint.json           # Configuration
├── introduction.mdx    # Landing page
├── getting-started/
│   ├── installation.mdx
│   ├── ollama-setup.mdx
│   └── quickstart.mdx
├── connections/
│   ├── serial.mdx
│   ├── ssh.mdx
│   └── sftp.mdx
├── ai-features/
│   ├── magic-input.mdx
│   ├── local-rag.mdx
│   └── transforms.mdx
└── reference/
    ├── shortcuts.mdx
    ├── settings.mdx
    └── troubleshooting.mdx
```

### mint.json Example
```json
{
  "name": "NeuroTerm",
  "logo": {
    "dark": "/logo-dark.svg",
    "light": "/logo-light.svg"
  },
  "favicon": "/favicon.svg",
  "colors": {
    "primary": "#10B981",
    "light": "#34D399",
    "dark": "#059669"
  },
  "navigation": [
    {
      "group": "Getting Started",
      "pages": [
        "introduction",
        "getting-started/installation",
        "getting-started/ollama-setup",
        "getting-started/quickstart"
      ]
    },
    {
      "group": "Connections",
      "pages": [
        "connections/serial",
        "connections/ssh",
        "connections/sftp"
      ]
    },
    {
      "group": "AI Features",
      "pages": [
        "ai-features/magic-input",
        "ai-features/local-rag",
        "ai-features/transforms"
      ]
    },
    {
      "group": "Reference",
      "pages": [
        "reference/shortcuts",
        "reference/settings",
        "reference/troubleshooting"
      ]
    }
  ]
}
```

---

## Exit Criteria

```
□ Mintlify project set up with NeuroTerm branding
□ Phase 1 docs written (6 pages)
□ Screenshots for all major features
□ Deployed to docs.neuroterm.dev
□ Website /docs link works
□ AI search enabled
```

---

## Sources

- [Stripe Docs Best Practices](https://www.mintlify.com/blog/stripe-docs)
- [Warp Documentation](https://docs.warp.dev)
- [Google Documentation Style Guide](https://google.github.io/styleguide/docguide/best_practices.html)
- [GitBook Structure Tips](https://gitbook.com/docs/guides/docs-best-practices/documentation-structure-tips)
- [Mintlify Documentation](https://mintlify.com/docs)

---

> **Created:** 2025-12-26
