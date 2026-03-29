# Kingsley Design System

> Swiss design meets technical blueprints. Warm but precise.

A clean, architectural design system built with React, TypeScript, Tailwind CSS v4, and Framer Motion. Inspired by Apple, Robinhood, Spotify, Airbnb, and teenage engineering.

---

## Stack

- **React 18** + **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first config)
- **Framer Motion** (animation layer)
- **Storybook 8** (interactive playground)

## Design Principles

- **Minimal radius** — 4–8px max. Clean edges.
- **Barely-there shadows** — you feel depth before you see it.
- **Two typefaces** — Inter for UI, JetBrains Mono for technical accents.
- **4px grid** — all spacing is a multiple of 4.
- **Muted architectural accent** — a blue-gray that reads as technical without being cold.
- **Light + dark from day one** — CSS variables invert elegantly.

## Getting Started

```bash
npm install
npm run storybook    # Launch interactive playground at localhost:6006
npm run type-check   # TypeScript validation
npm run build        # Build library
```

## Project Structure

```
src/
├── tokens/          # colors, spacing, typography, shadows (TS + CSS variables)
│   └── tokens.css   # CSS custom properties, light + dark mode
├── components/
│   ├── Typography/  # H1–H6, Text, Lead, Caption, Mono, Label
│   ├── Button/      # primary, secondary, ghost, danger · sm/md/lg · icon support
│   ├── Card/        # default, outlined, elevated, ghost · composable sections
│   ├── Input/       # label, hint, error, success, prefix/suffix adornments
│   └── Grid/        # 12-col Grid, GridOverlay, Stack
├── animations/      # Framer Motion variants (fadeIn, slideUp, scaleIn, stagger...)
└── index.ts         # barrel exports
```

## Token System

All design decisions live in `src/tokens/tokens.css` as CSS custom properties. This means:

- Zero JS overhead at runtime
- Clean dark mode via `[data-theme="dark"]` or `prefers-color-scheme`
- Tailwind picks them up via the `@theme` block in `src/styles/global.css`

### Color Palette

| Token | Light | Dark |
|-------|-------|------|
| `--color-bg-base` | `#FAFAFA` | `#111111` |
| `--color-fg-primary` | `#1A1A1A` | `#F0F0F0` |
| `--color-accent-500` | `#4A7BA7` | `#6793BB` |
| `--color-border-default` | `#D4D4D4` | `#333333` |

## Components

### Typography
```tsx
import { H1, H2, Text, Lead, Caption, Mono, Label } from '@kingsley/design-system'

<H1>Heading One</H1>
<Text secondary>Supporting copy</Text>
<Mono accent>const value = 42</Mono>
<Label required>Field name</Label>
```

### Button
```tsx
import { Button } from '@kingsley/design-system'

<Button variant="primary">Save changes</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="ghost" icon={<PlusIcon />}>Add item</Button>
<Button iconOnly icon={<GearIcon />} variant="secondary">Settings</Button>
<Button loading>Saving...</Button>
```

### Card
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@kingsley/design-system'

<Card variant="elevated" interactive>
  <CardHeader><H5>Title</H5></CardHeader>
  <CardBody><Text>Content</Text></CardBody>
  <CardFooter>
    <Caption>Footer note</Caption>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>
```

### Input
```tsx
import { Input } from '@kingsley/design-system'

<Input label="Email" placeholder="you@example.com" prefix={<MailIcon />} />
<Input label="Amount" prefix="$" suffix="USD" />
<Input label="Password" inputState="error" errorMessage="Incorrect password" />
```

### Grid
```tsx
import { Grid, GridItem, GridOverlay, Stack } from '@kingsley/design-system'

<Grid cols={12} gap="md">
  <GridItem span={8}><MainContent /></GridItem>
  <GridItem span={4}><Sidebar /></GridItem>
</Grid>

<Stack direction="row" justify="between" align="center">
  <Title />
  <Button>Action</Button>
</Stack>

<GridOverlay visible={showGrid} columns={12} unit={8} />
```

### Animations
```tsx
import { fadeIn, slideUp, staggerChildren, staggerItem, cardHover } from '@kingsley/design-system'
import { motion } from 'framer-motion'

<motion.div variants={slideUp} initial="hidden" animate="visible">
  Content
</motion.div>

<motion.ul variants={staggerChildren} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li key={item.id} variants={staggerItem}>{item.label}</motion.li>
  ))}
</motion.ul>
```

## Storybook

The Storybook playground includes:

- **Foundation/Tokens** — full token visualization (colors, type scale, spacing, shadows, radii)
- **Foundation/Typography** — all type styles in context
- **Foundation/Animations** — live animation demos with replay
- **Components/Button** — all variants, sizes, states, and icon combinations
- **Components/Card** — variants, composable sections, interactive hover
- **Components/Input** — all states, sizes, and prefix/suffix adornments
- **Components/Grid** — column layouts, architectural overlay toggle, Stack demos

Both light and dark modes are accessible via the toolbar toggle.

---

## Screenshots

_Coming soon._

---

## License

MIT © Kingsley
