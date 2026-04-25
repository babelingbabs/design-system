# Case Study: Design System as Agent Control Layer

**Role:** Solo designer + builder  
**Timeline:** 10 sprints, ~4 weeks  
**Stack:** React · TypeScript · Vite · Tailwind v4 · Framer Motion · Radix UI · Storybook  
**Repo:** `@kingsley/design-system`

---

## The Setup

AI can generate UI now. Figma Make, v0, Claude, Cursor — any of them will produce a notification card, a settings panel, a data table in seconds. The output looks plausible. Product teams are starting to use it.

The problem: plausible isn't the same as correct. AI-generated UI breaks in predictable ways.

```
padding: 14px         ← invented. Not on any grid.
border-radius: 6px    ← also invented. Between sm (4px) and md (8px).
color: #2563eb        ← guessed blue. Not from the palette.
transition: linear    ← default easing. No thought given to feel.
```

Every one of those decisions is individually small. Together, across a product, they create visual noise — the kind of accumulated inconsistency that's hard to name but immediately felt. Screens that almost look right but don't quite cohere.

The standard answer is "write better prompts." That's not a system. That's hoping.

---

## The Shift

I started this project to build a design system. I finished it having built something different: **an agent control layer** — infrastructure that constrains what AI can output before the output lands in a product.

The reframe: design tokens have two uses.

| Traditional use | Agent layer use |
|---|---|
| Consistency across human-authored UIs | Guardrails on AI-generated UIs |
| Reference for designers | Validation schema for AI output |
| Figma → code handoff | Agent prompt grounding + output parsing |

The same token architecture that gives a design team shared language gives AI agents a constrained solution space. Force an agent to draw from the token manifest — and only the token manifest — and the broken output disappears. Not because the agent got smarter. Because you collapsed its solution space to the values the system allows.

---

## What Was Built

### 27 Components

Built across 10 sprints from foundation to full system coverage. Every component:
- Uses only CSS custom properties from the token layer — no hardcoded values
- Radix UI primitives under the hood (accessibility handled at the primitive level)
- Framer Motion animations tied to motion tokens, not arbitrary durations
- TypeScript types, CSS modules, Storybook stories
- WCAG 2.1 AA compliant

**Foundation:** Button, Input, Badge, Card  
**Forms:** Checkbox, Radio, Select, Switch, Textarea, FormField  
**Overlays:** Dialog, Tooltip, Popover, DropdownMenu  
**Feedback:** Alert, Toast  
**Navigation:** Tabs, Breadcrumbs  
**Layout:** Stack, Container, Divider  
**Data Display:** Avatar, AvatarGroup  
**Typography:** Heading, Text, Label, Code

### 7 Token Categories

W3C DTCG format (JSON) → Style Dictionary → CSS custom properties. Two layers:

**Primitive layer** (`--color-primitive-*`) — raw values. Never used in components directly.  
**Semantic layer** (`--color-fg-default`, `--color-bg-raised`, `--color-primary-default`) — meaning-mapped. This is what components consume.

The two-layer model is what makes theming real. Dark mode isn't a separate stylesheet — it's the semantic layer re-pointing to different primitives under `[data-theme="dark"]`.

Token categories:
- **Color** — semantic light + dark, primitive scale
- **Spacing** — 4px-based, 0–96px
- **Radius** — none / sm / md / lg / xl / 2xl / full
- **Shadow** — xs through 2xl + focus rings
- **Typography** — Inter (sans), JetBrains Mono (mono), full scale
- **Motion** — duration fast/normal/slow/slower + easing curves including spring
- **States** — disabled opacity, focus ring, hover overlays

### The Governance Layer

Three documents that turn the system into something AI can reason about:

**`DESIGN.md`** — Google's open-source spec for AI-readable design identity. YAML front matter with all canonical token values. Prose rationale explaining why each decision was made (not just what). Compatible with `npx @google/design.md lint` — which caught real contrast failures in the danger button and badge components during authoring.

**`GOVERNANCE.md`** — The constitution. Not just token documentation. Rules:
- Component selection guide: given a use case, which component?
- Composition rules: which components can nest where
- Forbidden patterns: 15 explicit things AI must never do
- Accessibility baseline: WCAG requirements per component type
- Naming conventions for files, props, CSS variables

**`governance.json`** — Machine-readable version of all governance rules. Schema for future linting: parse AI-generated JSX against component rules, not just token values.

---

## The Agent Layer in Practice

### Prompt Grounding

Before asking any AI to generate UI, inject the token manifest as constraint:

```
Generate a notification card using only these design tokens:
- Spacing: 4, 8, 12, 16, 24, 32px (no other values)
- Radius: sm=4px, md=8px, lg=12px (named tokens only)
- Colors: semantic tokens — bg-raised, fg-default, fg-muted, border-default,
  accent-default, success-subtle, error-subtle
- Motion: 100ms fast / 200ms normal / 300ms slow;
  easeOut for entrances, spring for micro-interactions
```

The solution space collapses. What was previously underspecified — and therefore invented — is now constrained to system values.

### Output Validation

Parse AI-generated CSS for values that fall outside the token manifest. The violations from an unconstrained generation of the same notification card:

| Violation | AI output | Correct token |
|---|---|---|
| Padding | `14px 18px` | `spacing.3` / `spacing.4` (12px / 16px) |
| Border radius | `6px` | `radius.md` (8px) |
| Badge background | `#dbeafe` | `color.accent-subtle` |
| Badge text | `#1e40af` | `color.accent-subtle-fg` |
| Transition easing | `linear` | `motion.easing.spring-smooth` |
| Duration | `250ms` | `motion.duration.normal` (200ms) |
| Gap | `10px` | `spacing.2` (8px) |
| Caption font size | `11px` | `typography.scale.xs` (12px) |

Eight violations. None of them catastrophic individually. Together they're a component that looks like it was built by a different team.

The token-constrained version of the same component: zero violations. The agent didn't get smarter — the constraint layer did the work.

---

## The Aesthetic Philosophy

The system needed its own visual identity before it could govern anything.

**Warm minimalism.** Not iOS system gray — backgrounds with warmth baked in. `#fafaf9` is near-white but never clinical. `#0c0c0b` is near-black but never cold.

**Architectural precision.** Spacing is always on the 4px grid. Radius is always a named tier. Shadows define layer relationships, not decorative depth. Typography tracks tight at display sizes (−0.04em at h1), neutralizes at body (0em). These aren't taste preferences — they're structural decisions that prevent visual drift.

**One accent color.** Indigo (`#6366f1`). Not blue — indigo is cooler, more considered, closer to ink. It appears on focus rings, active states, and the rare moment the interface needs to direct attention. Never decorative.

**Primary action is near-black/near-white, not a color.** In light mode, primary buttons are `#171615`. In dark mode, they're `#fafaf9`. This means the primary action reads clearly against any background without a separate color system. The UI inverts cleanly.

---

## What the Linter Caught

Running `npx @google/design.md lint` on the `DESIGN.md` at first produced four contrast failures:

```json
{ "path": "components.button-danger",
  "message": "textColor (#fff1f0) on backgroundColor (#ef4444) has contrast ratio 3.42:1" }
{ "path": "components.badge-success",
  "message": "textColor (#22c55e) on backgroundColor (#f0fdf4) has contrast ratio 2.18:1" }
{ "path": "components.badge-warning",
  "message": "textColor (#f59e0b) on backgroundColor (#fffbeb) has contrast ratio 2.07:1" }
{ "path": "components.badge-error",
  "message": "textColor (#ef4444) on backgroundColor (#fff1f0) has contrast ratio 3.42:1" }
```

These were real bugs. The badge components were using the default semantic color on the subtle background — a combination that had never been checked for contrast. Badges use the darker `*-subtle-fg` variant now. The danger button uses a darker red (`#c41a1a`, 4.55:1) rather than the status red.

The governance layer found bugs in itself. That's the point.

---

## The Narrative Shift

Design systems used to be about consistency for human designers. The value proposition was clear: build once, ship everywhere, maintain one source of truth.

That's still true. But it's no longer the most interesting use.

The interesting use is this: **a well-structured design system is the grounding document that turns AI code generation from plausible output into on-system output.** The tokens, governance rules, and component contracts become the constraints that collapse AI's solution space from "anything that looks close" to "exactly what the system allows."

That's not documentation. That's infrastructure that actively governs what AI can produce.

The question I'm now asking for every design system decision: *is this rule something a linter could check?* If yes, it should be in `governance.json`. If a human has to review it, it should be in `GOVERNANCE.md` with enough specificity that an AI can act on it without ambiguity.

The next step is the validation utility — `validateAgentOutput(jsx: string): TokenViolation[]` — that makes this pipeline programmable. Pass any AI-generated component through it, get structured findings. Wire it into CI. Run it on every Figma Make export.

That's the version of this that scales.

---

## Files

| File | What it is |
|---|---|
| `DESIGN.md` | Google design.md compatible entry point — tokens + rationale |
| `GOVERNANCE.md` | Constitution — component rules, forbidden patterns, a11y baseline |
| `src/docs/governance.json` | Machine-readable governance rules |
| `src/docs/componentRegistry.ts` | Per-component metadata with usage rules + token bindings |
| `src/demos/AgentLayerDemo.tsx` | Interactive before/after — 8 annotated violations |
| `tokens/base/*.json` | W3C DTCG token source |
| `src/tokens/generated/variables.css` | Compiled CSS custom properties |
