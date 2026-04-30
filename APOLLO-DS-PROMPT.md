# Prompt: Build Agent Governance Layer for Apollo Design System

Copy everything between the --- markers and paste into Claude (or Claude Code).
Fill in the [brackets] with your actual values before pasting.

---

I want to build an AI agent governance layer on top of our existing design system.
The goal: make our design system machine-readable so AI tools (Cursor, Claude Code,
Figma Make, v0) generate on-system, brand-safe, accessible UI without needing human
review for every output.

This is based on an architecture pattern I've validated on a personal project.

## What to build

Three documents, in this order:

### 1. DESIGN.md (build first)

A machine-readable visual identity file in the Google design.md format
(https://github.com/google-labs-code/design.md).

Structure:
- YAML front matter with our canonical token values (colors, typography, spacing, radius, components)
- Markdown prose explaining WHY each decision was made — not just what the values are

Our design system details:
- **Component library:** [e.g. our internal DS / Radix / Shadcn / MUI — specify]
- **Token format:** [CSS custom properties / Tailwind config / Style Dictionary / etc.]
- **Key colors (list your semantic tokens):**
  - Primary/CTA: [value]
  - Background base: [value]
  - Foreground default: [value]
  - Foreground muted: [value]
  - Border default: [value]
  - Accent: [value]
  - Success: [value]
  - Warning: [value]
  - Error: [value]
- **Typography:** [font family/families, key sizes]
- **Spacing scale:** [e.g. 4px base, or 8px base, or custom]
- **Radius scale:** [your values]
- **Brand aesthetic:** [1-2 sentences — e.g. "Clean and professional, data-dense, minimal decoration, high trust"]

For the YAML component section, map our most-used components:
- Primary button
- Secondary/ghost button
- Destructive button
- Input field
- Card/panel
- Badge/tag
- Toast/notification
- Modal/dialog
- Tooltip

For the prose sections, cover:
- Overview: the brand's visual intent (not just describing the tokens — explain what they communicate)
- Colors: the intent of each color role
- Typography: the hierarchy logic
- Layout: spacing scale intent, radius philosophy
- Do's and Don'ts: the top-level rules

After writing it, validate with:
```
npx @google/design.md lint DESIGN.md
```
Fix any contrast errors before proceeding. Note: orphaned token warnings are expected
and acceptable — those tokens are used in component code, not in the DESIGN.md component list.

---

### 2. GOVERNANCE.md (build second)

The constitution for AI agents and developers using this design system.

Write these sections in order:

**For AI Agents: How to Use This Document**
A numbered list of steps an AI must follow before writing any component code.
Be imperative. Start with "Check the Component Selection Guide."

**Core Principles**
Five principles, each with: the rule, a do/don't example pair, and one sentence explaining why.
1. Token-First (no hardcoded values)
2. Semantic Over Presentational (choose by meaning, not appearance)
3. Component Before Custom (if DS covers it, use it)
4. Composition Within Rules (components have legal parent/child relationships)
5. Accessibility Is Non-Negotiable (WCAG AA, no exceptions)

**Token Usage Rules**
For each token category we have:
[List your categories — e.g. color, spacing, radius, shadow, typography, motion, states]

For each: what it's for, required usage pattern, forbidden usage, and correct examples.

**Component Selection Guide**
A decision matrix table: Use Case | Component | Notes

Cover at minimum:
- Primary CTA vs secondary vs destructive vs icon-only
- Binary toggle (immediate) vs binary selection (form)
- 2-4 exclusive options vs 5+ options
- Transient success/error vs persistent status
- Blocking confirmation vs focused form
- Contextual rich content vs short label
- Action menu
- Status/category label
- Section navigation within a page

Add any [company]-specific patterns we commonly use:
[List any patterns specific to your product — e.g. "empty states", "data tables", "loading skeletons"]

**Composition Rules**
For each compound component in our system, document:
- The required structure (with a short code example)
- What's illegal
- Why the rule exists

Focus on: forms, dialogs/modals, navigation, data tables if present.

**Forbidden Patterns**
At minimum include these (adapt names/code to our system):
1. Inline styles for token values
2. Hardcoded hex colors anywhere in component code
3. Custom-styled native elements when DS component exists
4. Raw form elements without DS wrappers
5. Removing focus indicators without replacement
6. Skipping heading levels
7. Multiple primary CTAs in one visual group
8. Using transient notifications for confirmations
9. Using primitive/raw token layer in component code (if two-layer token system)
10. [Add any patterns your team catches in code review]

**Accessibility Baseline**
WCAG 2.1 AA requirements mapped to our component types.
Cover: contrast ratios, focus management, form labels, heading hierarchy, icon button labels.

**Naming Conventions**
Our team's conventions for: file names, prop names, CSS variable names.

---

### 3. componentRegistry (build third)

A TypeScript file (or JSON if preferred) with per-component metadata.

For each component, include:
```typescript
{
  name: string
  status: 'stable' | 'beta' | 'experimental' | 'deprecated'
  category: string
  a11y: 'WCAG AA' | 'N/A'
  description: string        // one sentence: what it is and when to use it
  tokens: string[]           // CSS custom properties this component uses
  usageRules: {
    do: string[]
    dont: string[]
  }
}
```

Prioritize interactive components first (buttons, inputs, selects, dialogs, etc.).
Base the token lists on our actual CSS custom properties.
Base the do/dont rules on what you know about correct usage + what's in GOVERNANCE.md.

---

## Constraints

- Don't invent token values — use real values from our design system
- Don't invent component names — use the actual names from our library
- All governance rules should encode existing knowledge, not new rules we haven't agreed on
- The forbidden patterns list should reflect things we actually catch in code review
- Validate DESIGN.md with the lint tool before finalizing

## Output

Three files:
1. `DESIGN.md` at the repo root
2. `GOVERNANCE.md` at the repo root  
3. `src/docs/componentRegistry.ts` (or wherever component docs live)

When done, run `npx @google/design.md lint DESIGN.md` and share the output.
Zero contrast errors is the goal. Fix any that appear.

---

## Context on why this matters

AI tools are already generating UI for our products. Without a governance layer,
each generation is unconstrained — it invents spacing values, guesses hex colors,
ignores our motion system. A machine-readable governance layer collapses the AI's
solution space to what our system allows.

The same documents also make our design system dramatically more useful as a
grounding document for Cursor, Claude Code, and any other AI tool in our workflow.
A developer can drop DESIGN.md into any AI context and it immediately "knows" our
visual identity at the token level.
