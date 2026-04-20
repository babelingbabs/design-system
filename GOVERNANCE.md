# Design System Governance

This document is the **constitution** for the design system. It defines how components, tokens, and patterns should be used—especially by AI agents building UI with this system.

## For AI Agents: How to Use This Document

You are being asked to build UI using this design system. **Before writing any code:**

1. **Check the Component Selection Guide** (below) to pick the right component for the use case
2. **Read that component's rules** in `src/docs/componentRegistry.ts` (the `do` and `dont` arrays)
3. **Follow the Token Usage Rules** — never use hardcoded colors, spacing, or sizing
4. **Avoid the Forbidden Patterns** section — these are the things this system explicitly forbids
5. **Check the Composition Rules** — components have legal parent/child relationships

If your task involves composing components outside the documented rules, **ask first**. The governance rules exist to keep the design system coherent and themeable.

---

## Core Principles

### 1. Token-First, Always

Every visual property must come from a CSS custom property in `variables.css`. Hardcoded hex values, pixel values, and magic numbers are forbidden.

- ✅ `color: var(--color-primary-default)`
- ✅ `padding: var(--spacing-4)`
- ❌ `color: #3b82f6`
- ❌ `padding: 16px`

**Why?** Theming, dark mode, accessibility, and consistency all depend on this. When you hardcode a value, you break the entire system.

### 2. Semantic Over Presentational

Choose components and tokens based on **meaning**, not **appearance**.

- ✅ Use `variant="error"` because the state is an error
- ✅ Use `color="muted"` because the text is secondary information
- ❌ Use a red button because red looks good
- ❌ Use a gray text color because it feels lighter

The system is designed so semantic choices automatically produce the right visual appearance. Trust it.

### 3. Component Before Custom

If a design system component covers the use case, **use it**. Do not build custom equivalents or style raw HTML.

- ✅ `<Button variant="danger">Delete</Button>`
- ✅ `<FormField label="Name"><Input /></FormField>`
- ❌ `<button className='custom-delete-btn'>Delete</button>`
- ❌ `<label><input type="text" className='form-input' /></label>`

**Why?** Custom components break a11y, theming, and consistency. The design system is built to handle common patterns correctly.

### 4. Composition Within Rules

Components have defined parent/child relationships (see **Composition Rules** below). These exist to maintain a11y and UX coherence.

- ✅ `<RadioGroup><Radio /></RadioGroup>`
- ✅ `<FormField><Input /></FormField>`
- ❌ `<Radio />` without RadioGroup (loses shared state)
- ❌ `<Input />` without FormField (loses label + error binding)

### 5. Accessibility Is Non-Negotiable

All interactive components must meet WCAG 2.1 AA minimum. This is not optional.

- Never remove focus rings without providing an equivalent replacement
- Never skip heading levels
- Never omit labels on form controls
- Never override ARIA attributes for design purposes

Accessibility is part of the design, not a post-launch concern.

---

## Token Usage Rules

### Required Token Categories

#### Color
Use **semantic color tokens** for all color values:
- `--color-fg-default`, `--color-fg-muted`, `--color-fg-subtle` — text colors
- `--color-bg-default`, `--color-bg-raised`, `--color-bg-muted` — backgrounds
- `--color-border-default`, `--color-border-subtle` — borders
- `--color-primary-default`, `--color-primary-hover`, `--color-primary-active` — primary actions
- `--color-accent-default` — secondary emphasis
- `--color-success-default`, `--color-warning-default`, `--color-error-default` — semantic states
- `--color-success-subtle`, `--color-warning-subtle`, `--color-error-subtle` — subtle variants

**Forbidden:** Primitive tokens like `--color-primitive-indigo-600`. These are implementation details. Use the semantic layer.

#### Spacing
Use **spacing tokens** (4px-based scale) for all padding, margin, and gap:
- `--spacing-2` (8px), `--spacing-4` (16px), `--spacing-6` (24px), `--spacing-8` (32px), etc.

Never use arbitrary values like `16px`, `1rem`, or `1.3em`. The scale is:
- `--spacing-0` = 0
- `--spacing-1` = 4px
- `--spacing-2` = 8px
- `--spacing-3` = 12px
- ...up to `--spacing-24` = 96px

#### Radius
Use **radius tokens** for all `border-radius`:
- `--radius-none` = 0
- `--radius-sm` = 2px
- `--radius-md` = 4px
- `--radius-lg` = 8px
- `--radius-full` = 9999px

#### Shadow
Use **shadow tokens** for all `box-shadow`:
- `--shadow-xs` — tiny elevation
- `--shadow-sm` — card shadow
- `--shadow-md` — popover/dropdown
- `--shadow-lg` — tooltip
- `--shadow-xl` — modal
- `--shadow-2xl` — dialog
- `--shadow-focus-ring` — focus indicator (use this for custom focus rings)
- `--shadow-focus-ring-error` — error focus ring

#### Typography
Use **typography tokens** for font properties:
- `--typography-font-family-sans` = Inter
- `--typography-font-family-mono` = JetBrains Mono
- `--typography-font-size-xs`, `--typography-font-size-sm`, `--typography-font-size-md`, etc.
- `--typography-font-weight-regular`, `--typography-font-weight-semibold`, `--typography-font-weight-bold`
- `--typography-line-height-tight`, `--typography-line-height-normal`, `--typography-line-height-relaxed`

#### Motion
Use **motion tokens** for animations and transitions:
- `--motion-duration-fast` = 100ms
- `--motion-duration-normal` = 150ms
- `--motion-duration-slow` = 300ms
- `--motion-easing-ease-in`, `--motion-easing-ease-out`, `--motion-easing-spring`

#### State
Use **state tokens** for interactive states:
- `--state-disabled-opacity` = opacity for disabled elements (0.5)
- `--state-focus-ring-color` = focus ring color
- `--state-hover-overlay-subtle` = hover overlay

### Forbidden Patterns

| Pattern | Why | Fix |
|---------|-----|-----|
| `--color-primitive-*` | Breaks theming. Use semantic tokens instead. | `--color-primary-default`, `--color-error-default` |
| Hardcoded hex values (`#3b82f6`) | Bypasses theming entirely. | `var(--color-primary-default)` |
| Hardcoded pixel spacing (`padding: 16px`) | Breaks spacing scale and theming. | `padding: var(--spacing-4)` |
| Hardcoded border-radius (`border-radius: 8px`) | Breaks radius consistency. | `border-radius: var(--radius-md)` |
| `opacity: 0.5` for disabled | Can't be adjusted globally. | `opacity: var(--state-disabled-opacity)` |
| Raw Tailwind classes (`text-indigo-500`) | Hardcoded colors, not semantic. | Component props (`variant="primary"`) |

---

## Component Selection Guide

**Use this decision tree to pick the right component for the use case.**

| Use Case | Component | Notes |
|----------|-----------|-------|
| **Primary call-to-action** | `Button` variant="primary" | Only one per visual group |
| **Destructive action** | `Button` variant="danger" + `Dialog` | Always confirm before executing |
| **Secondary action** | `Button` variant="secondary" | Lower visual weight |
| **Icon-only or low-priority** | `Button` variant="ghost" | Always provide `aria-label` |
| **Binary toggle (immediate)** | `Switch` | For settings that apply instantly |
| **Binary selection (form)** | `Checkbox` | For form submit scenarios |
| **Select 1 from 2–4 (all visible)** | `Radio` + `RadioGroup` | Best when all options are visible |
| **Select 1 from 5+ options** | `Select` | Dropdown menu |
| **Transient success/error** | `Toast` | Auto-dismisses after 3–5 seconds |
| **Persistent status** | `Alert` | Stays until dismissed or resolved |
| **Blocking confirmation** | `Dialog` | Requires explicit user action |
| **Contextual rich content** | `Popover` | Anchored to a trigger |
| **Short label for icon** | `Tooltip` | Non-interactive, under 10 words |
| **Action menu** | `DropdownMenu` | Overflow or context actions |
| **Status or category label** | `Badge` | Non-interactive, 1–3 words |
| **Section navigation** | `Tabs` | Secondary navigation within a page |
| **Location breadcrumb** | `Breadcrumbs` | For pages 2+ levels deep |
| **User photo or initials** | `Avatar` | Provide `name` for fallback |
| **3+ avatars compact** | `AvatarGroup` | Set `size` on group, not children |
| **Grouped content** | `Card` | With border or shadow |
| **Page max-width constraint** | `Container` | Outermost wrapper |
| **Flex layout + gap** | `Stack` | Primary layout primitive |
| **Visual section break** | `Divider` | Use sparingly |

---

## Composition Rules

### FormField
- **Wrap these:** `Input`, `Select`, `Textarea`, `Checkbox`, `Switch`, `RadioGroup`
- **Why:** FormField manages label, helper text, error state, and a11y binding
- ✅ `<FormField label="Email"><Input /></FormField>`
- ❌ `<label><Input /></label>` (loses error binding)

### Dialog
- **Required structure:**
  ```jsx
  <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogTrigger asChild>
      <Button>Open</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Title</DialogTitle> {/* REQUIRED for a11y */}
      </DialogHeader>
      {/* content here */}
      <DialogFooter>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={onConfirm}>Confirm</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  ```
- ✅ DialogTitle can be visually hidden but must exist
- ❌ Dialog without DialogTitle

### RadioGroup
- **Wrap:** `Radio` items
- ✅ `<RadioGroup value={selected}><Radio value="a" /></RadioGroup>`
- ❌ `<Radio />` without RadioGroup (loses state management)

### Tabs
- **Required:** `TabsList` with `TabsTrigger` items, `TabsContent` sections
- ✅ `<Tabs><TabsList><TabsTrigger>Tab 1</TabsTrigger></TabsList><TabsContent>Content</TabsContent></Tabs>`
- ❌ Tabs without TabsList

### Card Nesting
- **Rule:** Don't nest `Card` with `variant="border"` inside another `Card` with `variant="border"`
- ✅ Outer card border, inner card ghost
- ❌ Nested border-on-border (visual confusion)

### Container Nesting
- **Rule:** Don't nest `Container` inside `Container`
- ✅ `<Container><Stack>...</Stack></Container>`
- ❌ `<Container><Container>` (redundant constraint)

### Stack Children
- **Rule:** Control spacing via `gap` on Stack, not margins on children
- ✅ `<Stack gap={4}><div>Item 1</div><div>Item 2</div></Stack>`
- ❌ `<Stack><div style={{ marginBottom: '16px' }}>Item 1</div></Stack>`

---

## Accessibility Baseline (WCAG 2.1 AA)

### Color & Contrast
- **Normal text:** 4.5:1 contrast ratio minimum against background
- **Large text (18pt+ or bold 14pt+):** 3:1 contrast ratio minimum
- **No color-only communication:** Always pair color with text, icon, or pattern

### Interactive Elements
- **Focus visible:** All interactive elements must show a visible focus indicator
  - Don't remove `outline` without an equivalent replacement
  - Use `--shadow-focus-ring` for custom focus indicators
- **Focus order:** Follows logical reading sequence (no positive `tabIndex` unless essential)
- **Disabled state:** Use `opacity: var(--state-disabled-opacity)` and `disabled` attribute together

### Forms
- **Labels:** Every form control must have an associated visible label (FormField handles this)
- **Error messages:** Associated via `aria-describedby` (FormField handles this)
- **Helper text:** Use `helperText` prop for format hints

### Headings
- **Hierarchy:** Never skip heading levels (h1 → h2 → h3, not h1 → h3)
- **One h1 per page:** Document outline requires this
- **Use Heading component:** Always pass the semantic `level` prop

### Images
- **Alt text:** Informative images require descriptive alt (e.g., `alt="Sarah Chen, product designer"`)
- **Decorative images:** `alt=""` (empty string tells screen readers to skip)
- **Avatar component:** Always provide `alt` and `name` props

### Dialog & Modals
- **Title required:** Always include `DialogTitle` for a11y
- **Focus management:** Focus moves to first interactive element (or title if no controls) when dialog opens; returns to trigger when closed
- **Dismiss:** Pressing Escape should close the dialog (handled by component)

### Motion & Animation
- **Respect prefers-reduced-motion:** All animations must respond to user's system preference
- **No auto-playing animations:** Let users initiate motion

---

## Naming Conventions

### Files
- Components: PascalCase (`Button.tsx`, `FormField.tsx`)
- Hooks: camelCase with `use` prefix (`useTheme.ts`, `useToast.ts`)
- Utilities: camelCase (`formatDate.ts`, `cn.ts`)
- Styles: Same name as component with `.module.css` suffix (`Button.module.css`)

### Props
- Boolean props: `is*` or `has*` prefix (`isLoading`, `isDisabled`, `hasError`)
- Handler props: `on*` prefix (`onClick`, `onOpenChange`, `onSelect`)
- Semantic props: Avoid presentation words
  - ✅ `variant="primary"` (semantic)
  - ❌ `color="blue"` (presentational)

### CSS Classes & Variables
- Token names: kebab-case (`--color-primary-default`, `--spacing-4`)
- Component classes: BEM variant (`Button__label`, `FormField__input`) — optional, use CSS modules instead
- Avoid: Utility class combos outside of components

---

## Frequently Asked Questions

**Q: Can I use inline styles for quick testing?**  
A: No. Always use component props or token CSS variables. Quick testing should become real code, and shortcuts become technical debt.

**Q: What if a component doesn't support what I need?**  
A: Add the prop to the component (if it's reusable) or ask before building a custom workaround. Document the addition in the component's governance rules.

**Q: Can I use Tailwind classes directly?**  
A: Only for utility layouts (e.g., `flex`, `flex-col`, `gap-4`). **Never use hardcoded color or spacing Tailwind classes** — those bypass the token system. Instead, use semantic component props.

**Q: My design says to use a different color/spacing than the tokens provide. What do I do?**  
A: Propose a new token to the design system. Tokens are the source of truth, and custom one-offs break theming and consistency.

**Q: Can I have multiple primary buttons?**  
A: No. Only one `variant="primary"` per visual group. Additional actions should use `variant="secondary"` or `variant="ghost"`.

**Q: Should I use Toast for a form submission confirmation?**  
A: Only if the action is non-destructive (e.g., "Note saved"). For anything destructive, use Dialog. Toast is for transient confirmations; Dialog is for things that need explicit consent.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-04-20 | Initial governance layer — token rules, component selection guide, composition rules, accessibility baseline |

---

**Last Updated:** April 20, 2026  
**Maintained by:** Design System Team
