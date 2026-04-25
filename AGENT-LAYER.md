# Design System as Agent Control Layer

**Status:** Concept / Active Development
**Author:** Kingsley Wong
**Date:** 2026-04-25

---

## The Problem

AI agents — Figma Make, v0, Claude, Cursor — can now generate UI. Fast, cheap, at scale. The output looks plausible but breaks in predictable ways:

- Wrong spacing (AI invents values like `14px`, `22px`, `37px`)
- Inconsistent radius (mixes `4px`, `6px`, `8px`, `9px` arbitrarily)
- Color values that aren't from your palette (hex-guessed, not semantic)
- Motion that's too fast, too slow, or uses raw `linear` easing everywhere
- Accessible contrast ratios ignored
- Typography scale invented on the spot

The traditional design system answer: "write better prompts." That's not a system — that's hoping.

**The real answer: the design system becomes the validation and constraint layer for AI output.** Not a library. A control surface.

---

## The Insight

Design tokens have two uses:

| Traditional Use | Agent Layer Use |
|---|---|
| Consistency across human-authored UIs | Guardrails on AI-generated UIs |
| Reference for designers | Validation schema for AI output |
| Figma → code pipeline | Agent prompt constraints + output parsing |

The same token architecture that gives designers a shared language gives agents a constrained solution space. When agents are forced to draw from `{spacing.4}` instead of `14px`, the output is automatically on-system.

---

## Token Classification: Guardrail vs. Aesthetic

Not all tokens carry the same constraint weight. Three categories:

### 🔒 Hard Guardrails (break the system if violated)
These tokens define structural integrity. AI-generated UI that violates these is visually broken, inaccessible, or brand-inconsistent.

| Token Group | What it enforces |
|---|---|
| `spacing.*` | Layout rhythm. Prevents micro-misalignments. |
| `radius.*` | Shape language. Prevents arbitrary border curves. |
| `color.semantic.*` | Brand + accessibility. Prevents guessed hex values. |
| `states.*` | Interaction model. Ensures hover/focus/disabled are consistent. |

### 🎨 Aesthetic Tokens (shape experience quality)
These tokens define *feel*. AI that gets spacing right but uses `linear` easing everywhere produces technically correct but experientially flat output.

| Token Group | What it enforces |
|---|---|
| `motion.duration.*` | Pacing. Prevents jarring snaps or sluggish waits. |
| `motion.easing.*` | Character. `spring` vs `easeOut` signals totally different personalities. |
| `shadow.*` | Depth model. Prevents flat/overblown shadow combinations. |
| `typography.scale.*` | Hierarchy. Prevents arbitrarily sized headings. |

### 📐 Structural Tokens (define the grid contract)
These tokens encode the underlying grid and layout logic — the hardest for agents to infer without explicit grounding.

| Token Group | What it enforces |
|---|---|
| `spacing.4`, `spacing.8` | 4px base grid contract |
| `typography.lineHeight.*` | Reading rhythm |
| `color.primitive.*` → `color.semantic.*` | Two-layer color model (value → meaning) |

---

## How This Works in Practice

### 1. Prompt Grounding
When prompting an AI agent to generate UI, include the token manifest:

```
Generate a notification card component using only these design tokens:
- Spacing: 4, 8, 12, 16, 24, 32px
- Radius: sm (4px), md (8px), lg (12px), xl (16px), full (9999px)
- Colors: use semantic tokens only — surface, border, text-primary, text-secondary, accent, status-success, status-warning, status-error
- Motion: duration 100ms (fast), 200ms (normal), 300ms (slow); easing: easeOut for entrances, easeIn for exits
```

Result: the agent's solution space collapses to what the system allows.

### 2. Output Validation
Parse AI-generated CSS/JSX for values that fall outside the token manifest. Flag deviations:

```
❌ padding: 14px      → should be spacing.3 (12px) or spacing.4 (16px)
❌ border-radius: 6px → not a defined radius token
❌ color: #2563eb     → use color.semantic.accent instead
✅ gap: 8px           → spacing.2 ✓
✅ transition: 200ms  → motion.duration.normal ✓
```

### 3. Token-First Code Generation
The design system becomes the grounding document for code generation tools. When Cursor/Claude Code sees `import { tokens } from '@ds/tokens'`, it uses real values rather than guessing.

---

## The Portfolio Narrative

This is the shift worth documenting:

> **From:** "I built a design system with consistent components."
> **To:** "I built an agent control layer that constrains AI output to brand-safe, accessible, on-system UIs."

One is infrastructure. The other is infrastructure *that actively governs AI*.

The before/after demo (see `src/demos/AgentLayerDemo.tsx`) shows:
- **Unconstrained AI output** — plausible but broken (wrong spacing, invented colors, flat motion)
- **Token-constrained output** — same component, system-compliant, visually tighter

---

## Files

| File | Purpose |
|---|---|
| `AGENT-LAYER.md` | This brief |
| `src/demos/AgentLayerDemo.tsx` | Before/after interactive demo |
| `tokens/base/*.json` | W3C DTCG token source |
| `src/tokens/generated/` | Compiled CSS custom properties |

---

## Next Steps

- [ ] Build `AgentLayerDemo.tsx` (before/after card component)
- [ ] Add token validation utility: `validateAgentOutput(css: string): TokenViolation[]`
- [ ] Write portfolio case study from this brief
- [ ] Publish token manifest as machine-readable JSON (agents can reference directly)
- [ ] Explore: Figma Make integration — pass tokens as grounding doc on plugin init
