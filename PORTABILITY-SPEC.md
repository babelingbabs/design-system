# Design System Agent Governance — Portability Spec

This document describes the architecture pattern we built so it can be reproduced
on any design system. The implementation is system-agnostic — only the token values,
component names, and brand decisions change.

---

## What This Architecture Does

It turns a design system into an **agent control layer** — infrastructure that constrains
AI-generated UI to brand-safe, accessible, on-system output. Three mechanisms:

1. **Prompt grounding** — inject the token manifest before generation so the AI's solution space collapses to what the system allows
2. **Output validation** — parse generated code for values that fall outside the token manifest
3. **Self-improving loop** — score every generation, extract lessons from failures, future generations start with accumulated knowledge

---

## The Three Documents to Build

### 1. DESIGN.md
*Machine-readable visual identity. The AI entry point.*

Format: [Google design.md spec](https://github.com/google-labs-code/design.md) — YAML front matter + Markdown prose.

```yaml
---
version: alpha
name: [Company] Design System

colors:
  # Extract from your token system — semantic layer only, not primitives
  primary: "#..."
  fg-default: "#..."
  fg-muted: "#..."
  bg-base: "#..."
  bg-raised: "#..."
  border-default: "#..."
  accent: "#..."
  success: "#..."
  warning: "#..."
  error: "#..."

typography:
  body-md:
    fontFamily: [Your body font]
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: [Your font]
    fontSize: 0.875rem
    fontWeight: 500
  # ... add your full scale

rounded:
  sm: [value]
  md: [value]
  lg: [value]
  full: 9999px

spacing:
  1: 4px
  2: 8px
  # ... your scale

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: [your button padding]
  # ... key components
---

## Overview
[1-3 paragraphs describing the brand's visual identity — not just what the tokens are, but WHY.
What does the palette communicate? What's the typographic intent? What's the motion character?
This is what an AI needs to make judgment calls in underspecified situations.]

## Colors
[Explain intent of each color role — not just the value]

## Typography
[Explain typographic hierarchy and intent]

## Layout
[Spacing scale intent, grid system, radius philosophy]

## Components
[Link to GOVERNANCE.md for full rules]

## Do's and Don'ts
[Top-level forbidden patterns — will be expanded in GOVERNANCE.md]
```

**Validate it:**
```bash
npx @google/design.md lint DESIGN.md
```
Fix all contrast errors before moving on. Warnings about orphaned tokens are acceptable.

---

### 2. GOVERNANCE.md
*The constitution. Human and AI readable.*

Sections to write (in this order):

#### For AI Agents: How to Use This Document
Numbered list of steps an AI must follow before writing any code. Be explicit and imperative.

#### Core Principles (4–6 principles)
Each principle needs:
- A name
- The rule, stated clearly
- A do/don't example pair
- The "why" (one sentence)

The five principles that matter most for agent governance:
1. **Token-First** — every visual property from a token, no hardcoded values
2. **Semantic Over Presentational** — choose based on meaning, not appearance
3. **Component Before Custom** — if a DS component covers it, use it
4. **Composition Within Rules** — components have legal parent/child relationships
5. **Accessibility Is Non-Negotiable** — WCAG AA minimum, no exceptions

#### Token Usage Rules
For each token category:
- What it's for
- Required usage pattern
- Forbidden usage pattern
- Examples of correct tokens

#### Component Selection Guide
A decision matrix: given a use case, which component?
Format: table with columns Use Case / Component / Notes

This is the highest-value section for AI agents. Cover:
- All interactive component choices (Button variants, form controls, overlays)
- Feedback component choices (when Toast vs Alert vs Dialog)
- Layout component choices (when to use which container/layout primitive)
- Data display choices

#### Composition Rules
For each compound component (Dialog, Form, Tabs, etc.):
- Required structure (code example)
- What's illegal
- Why the rule exists

#### Forbidden Patterns
Explicit list of anti-patterns with:
- Pattern name
- What it looks like
- Why it's forbidden
- The remedy

Key patterns to always include:
- Inline styles for token values
- Hardcoded colors in any form
- Custom `<button>` instead of Button component
- Raw form elements without DS wrappers
- Removing focus rings
- Skipping heading levels
- Multiple primary CTAs in one view
- Using Toast for confirmations (should be Dialog)

#### Accessibility Baseline
WCAG 2.1 AA requirements mapped to your components:
- Contrast ratios
- Focus management rules
- Form label requirements
- Heading hierarchy
- Icon button labels

#### Naming Conventions
Files, props, CSS variables — your team's specific conventions.

---

### 3. componentRegistry (TypeScript or JSON)
*Per-component metadata. The machine-readable component rules.*

For each component, document:

```typescript
{
  name: string                  // Component name
  status: 'stable' | 'beta' | 'experimental' | 'deprecated'
  category: string              // Grouping (Foundation, Forms, Overlays, etc.)
  a11y: string                  // 'WCAG AA' | 'N/A'
  description: string           // One sentence: what it is and when to use it
  tokens: string[]              // CSS custom properties this component uses
  usageRules: {
    do: string[]                // Positive rules
    dont: string[]              // Negative rules
  }
}
```

Minimum: write this for every interactive component (buttons, inputs, selects, dialogs, etc.).
Lower priority: layout and typography primitives.

---

## Token Classification (Apply to Your System)

Not all tokens carry the same constraint weight. Classify yours into three tiers:

### 🔒 Hard Guardrails
Violations break brand, accessibility, or structural integrity.
- Spacing tokens → layout rhythm
- Radius tokens → shape language
- Semantic color tokens → brand + contrast
- State tokens → interaction consistency

### 🎨 Aesthetic Tokens
Violations produce technically correct but experientially wrong output.
- Motion duration → pacing
- Motion easing → personality (`spring` vs `linear` feels completely different)
- Shadow scale → depth model
- Typography scale → hierarchy

### 📐 Structural Tokens
Hardest for AI to infer — must be explicit in prompts.
- Grid base unit (4px, 8px)
- Two-layer color model (primitive → semantic)
- Type scale ratios
- Line height system

---

## The Self-Improving Loop (Optional, High Value)

If you want AI-generated UI to improve over time, implement a scoring loop:

**Scoring criteria:**
1. Component Conformance (0–40 pts) — static analysis: only DS components used, no hardcoded values
2. Intent Match (0–40 pts) — LLM-as-judge: does the output satisfy the prompt?
3. Aesthetic Quality (0–20 pts) — static analysis: token usage rate, nesting depth

**Loop behavior:**
- Generate → Score → if score ≥ threshold (75): done
- if score < threshold: extract lesson → retry with lesson injected
- Max N rounds (3 is reasonable)
- All trials stored with scores and lessons
- Lessons feed back into a cognition store for future sessions

**Cognition store seed entries (write these first):**
- Layout principles (your grid primitive vs raw divs)
- Button hierarchy rules (primary/secondary/ghost pairing)
- Typography scale usage (when to use which size)
- Color semantic usage (intent props, never hex)
- Form layout patterns (label position, submit placement)
- Card composition patterns (padding, nesting rules)
- Common anti-patterns to avoid (from your GOVERNANCE.md forbidden list)

---

## Validation Pipeline

Once the documents are built, wire in automated checks:

```bash
# Check DESIGN.md for broken token refs and contrast failures
npx @google/design.md lint DESIGN.md

# Diff token changes between versions
npx @google/design.md diff DESIGN.md DESIGN-v2.md

# Export tokens to other formats if needed
npx @google/design.md export --format tailwind DESIGN.md
```

For CI: add `npx @google/design.md lint DESIGN.md` as a required check on PRs that touch design tokens.

---

## File Structure

```
your-design-system/
├── DESIGN.md              ← AI entry point (build this first)
├── GOVERNANCE.md          ← Constitution (build this second)
├── src/docs/
│   ├── componentRegistry.ts   ← Per-component rules
│   └── governance.json        ← Machine-readable version of GOVERNANCE.md
└── tokens/
    └── (your existing token files)
```

---

## What to Extract from Your Existing Design System

Before writing anything, audit what you already have:

1. **Token inventory** — list all CSS custom properties / design tokens. Identify which are primitive and which are semantic.
2. **Component list** — every component in your library with its variants
3. **Existing docs** — anything already written about usage rules, do/don'ts, accessibility
4. **Brand guidelines** — color intent, typography rationale, motion principles
5. **Known anti-patterns** — what does your team catch in code review? Those become forbidden patterns.

The governance documents encode existing knowledge — they don't invent new rules.
