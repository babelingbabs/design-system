---
version: alpha
name: Kingsley Design System
description: >
  A portfolio-grade design system built for precision and warmth.
  Warm neutrals, architectural minimalism, and Swiss grid discipline
  meet a subtle industrial edge — inspired by Apple, Robinhood, Spotify,
  Airbnb, and teenage engineering.

colors:
  # Backgrounds (light mode canonical values)
  bg-base: "#fafaf9"
  bg-raised: "#ffffff"
  bg-sunken: "#f5f4f2"
  bg-inverse: "#171615"

  # Foreground / text
  fg-default: "#171615"
  fg-muted: "#7a7974"
  fg-subtle: "#a8a7a2"
  fg-inverse: "#ffffff"

  # Borders
  border-default: "#e3e2df"
  border-strong: "#c9c8c4"
  border-focus: "#6366f1"

  # Primary actions (near-black in light mode, near-white in dark)
  primary: "#171615"
  primary-hover: "#3e3d3a"
  primary-fg: "#ffffff"
  primary-subtle: "#f5f4f2"

  # Accent (indigo)
  accent: "#6366f1"
  accent-hover: "#4f46e5"
  accent-fg: "#ffffff"
  accent-subtle: "#eef2ff"

  # Semantic states
  success: "#22c55e"
  success-subtle: "#f0fdf4"
  warning: "#f59e0b"
  warning-subtle: "#fffbeb"
  error: "#ef4444"
  error-hover: "#dc2626"
  error-subtle: "#fff1f0"

typography:
  display:
    fontFamily: Inter
    fontSize: 3.75rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.04em
  h1:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.04em
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: -0.02em
  h4:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.375
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0em
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.02em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 20px
  full: 9999px

spacing:
  1: 4px
  2: 8px
  3: 12px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
  10: 40px
  12: 48px
  16: 64px
  20: 80px
  24: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-fg}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.primary-fg}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.fg-default}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg-muted}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-danger:
    backgroundColor: "#c41a1a"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-danger-hover:
    backgroundColor: "#b91c1c"
  input:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.fg-default}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  input-focus:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.fg-default}"
  card:
    backgroundColor: "{colors.bg-raised}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-ghost:
    backgroundColor: "{colors.bg-sunken}"
    rounded: "{rounded.lg}"
    padding: 24px
  badge-success:
    backgroundColor: "{colors.success-subtle}"
    textColor: "#15803d"
    rounded: "{rounded.full}"
    padding: 2px 8px
  badge-warning:
    backgroundColor: "{colors.warning-subtle}"
    textColor: "#b45309"
    rounded: "{rounded.full}"
    padding: 2px 8px
  badge-error:
    backgroundColor: "{colors.error-subtle}"
    textColor: "#b91c1c"
    rounded: "{rounded.full}"
    padding: 2px 8px
  toast-success:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.fg-default}"
    rounded: "{rounded.lg}"
  toast-error:
    backgroundColor: "{colors.bg-raised}"
    textColor: "{colors.fg-default}"
    rounded: "{rounded.lg}"
  dialog:
    backgroundColor: "{colors.bg-raised}"
    rounded: "{rounded.xl}"
    padding: 24px
  tooltip:
    backgroundColor: "{colors.bg-inverse}"
    textColor: "{colors.fg-inverse}"
    rounded: "{rounded.md}"
    padding: 6px 10px
---

## Overview

**Warm minimalism with architectural precision.** The design language draws from
Swiss grid discipline and the precision of technical objects — the feel of a
well-made physical product rendered in software.

The palette is rooted in warm near-black and near-white, with a single indigo
accent. Not blue — indigo. There's a distinction: it's cooler than blue, more
considered, closer to ink. Primary actions use near-black in light mode and
near-white in dark mode, so the UI inverts cleanly without a separate color
system.

Think: a Leica camera's user interface. Robinhood's financial clarity. The
tactile satisfaction of a teenage engineering product. Apple's restraint without
its sterility.

Backgrounds have warmth baked in — `#fafaf9` reads as near-white but never
clinical. Headlines sit heavy and close. Body text breathes. Interface text is
Inter throughout; code is JetBrains Mono.

## Colors

The palette has one job: clarity of hierarchy.

- **Primary (#171615):** Near-black ink for buttons, heavy text, and core UI
  chrome. Not pure black — it has warmth. In dark mode, this inverts to
  `#fafaf9`.
- **fg-default (#171615) / fg-muted (#7a7974) / fg-subtle (#a8a7a2):** Three
  levels of text hierarchy. Use them in order — default for headings and primary
  content, muted for secondary copy, subtle for captions and metadata.
- **Accent (#6366f1):** Indigo. The single expressive color in the system. Used
  for focus rings, links, and the rare moment when the UI needs to direct
  attention. Not overused.
- **Semantic states:** Success green, amber warning, red error. Each has a
  default (actionable), subtle (background tint), and border variant. Always
  chosen for semantic meaning, never for visual decoration.
- **Backgrounds:** `bg-base` is the page floor. `bg-raised` is cards and
  surfaces. `bg-sunken` is input fields and inset areas. All have warm undertones.

**Dark mode:** The system inverts via `[data-theme="dark"]`. Primary flips.
Backgrounds deepen without going pure black. Semantic colors shift to higher
chroma variants that remain legible on dark surfaces.

## Typography

Inter is the system typeface. One family, two optical roles:

- **Display / Headings:** Heavy weight, tight tracking. `h1` at −0.04em letter
  spacing. `h2`–`h4` at −0.02em. The tightness makes headlines feel architectural
  rather than airy.
- **Body:** 400 weight, 0 tracking, 1.5 line-height. Legible at scale.
- **Labels:** 500 weight, 0.875rem. Used for form labels, UI controls,
  navigation items.
- **Captions:** 400 weight, 0.75rem, +0.02em tracking. Slight expansion at small
  sizes improves readability.
- **Mono:** JetBrains Mono for code, technical values, and numerical data.

Never mix heading levels for visual sizing. Heading `level` and `size` are
separate props — use `level` for document semantics, `size` for visual intent.

## Layout

The spacing scale is 4px-based and covers `4px–96px`. Gaps, padding, and margins
must map to this scale — no arbitrary values.

The grid is 12-column, 24px gutter, 1280px max-width. `Container` enforces the
max-width. `Stack` is the primary layout primitive for flex arrangements.

Surfaces use radius with intention:
- `sm` (4px): Badges, tags, chips — elements that feel like data
- `md` (8px): Buttons, inputs, tooltips — interactive controls
- `lg` (12px): Cards, panels — container-level surfaces
- `xl` (16px): Dialogs, sheets — elevated full-surface elements
- `2xl` (20px): Feature cards, hero containers — expressive large surfaces
- `full` (9999px): Pills, avatars — circular or fully rounded

## Elevation & Depth

Shadows define layer hierarchy — not decorative depth, functional depth.

- `xs`: Barely perceptible lift. Used sparingly.
- `sm`: Card shadow — the default for any raised surface.
- `md`: Popovers, dropdown menus.
- `lg`: Tooltips.
- `xl`: Sheets, side panels.
- `2xl`: Dialogs and modals.
- `focus-ring`: `0 0 0 3px rgba(99, 102, 241, 0.35)` — indigo halo on focus.
  This is the system's only interactive affordance that breaks the neutral palette.

Never add drop shadows for decoration. Each elevation step signals a real
layer relationship.

## Shapes

One radius scale. No per-component custom values. If the scale doesn't have what
you need, the scale needs updating — not the component.

Shapes are architectural, not playful. Prefer `md`–`lg` for most interactive
surfaces. Reserve `2xl` and `full` for moments that need visual distinction
(hero cards, avatars, pill badges).

## Components

The system has 27 components across 7 categories. Every component is built with
Radix UI primitives (for accessibility) and Framer Motion (for animation). Each
component:

- Uses only CSS custom properties from the token system — no hardcoded values
- Meets WCAG 2.1 AA minimum
- Has a TypeScript types file, CSS module, and Storybook story

**Full component rules, composition constraints, and do/don't guidance live in:**
- [`GOVERNANCE.md`](./GOVERNANCE.md) — the human-readable constitution
- [`src/docs/governance.json`](./src/docs/governance.json) — machine-readable rules
- [`src/docs/componentRegistry.ts`](./src/docs/componentRegistry.ts) — per-component
  metadata with usage rules and token bindings

## Do's and Don'ts

**Do:**
- Use semantic color tokens — `--color-primary-default`, not `#171615`
- Use spacing tokens — `--spacing-4`, not `16px`
- Use the component decision matrix before building custom UI
- Wrap every form control in `FormField`
- Provide `alt` and `name` props on every `Avatar`
- Keep one `variant="primary"` Button per visual group

**Don't:**
- Don't use `--color-primitive-*` tokens in component code (implementation detail layer)
- Don't hardcode hex values, pixel spacing, or border-radius
- Don't use `Toast` for destructive confirmations — use `Dialog`
- Don't skip heading levels (`h1` → `h3` is invalid)
- Don't remove focus rings without a replacement
- Don't nest `Container` inside `Container`
- Don't add margin to `Stack` children — use `gap` on the Stack
